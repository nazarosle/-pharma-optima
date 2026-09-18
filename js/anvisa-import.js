/*
  PHARMA OPTIMA — IMPORTADOR DA BASE OFICIAL DA ANVISA
  ---------------------------------------------------------
  O QUE ISSO FAZ:
  Baixa a base de dados abertos de medicamentos registrados da Anvisa
  (fonte oficial: https://dados.anvisa.gov.br/dados/DADOS_ABERTOS_MEDICAMENTOS.csv,
  atualizada diariamente pelo governo) e importa pro seu Firestore,
  numa coleção chamada "anvisa_produtos". A partir daí, o botão
  "Verificar na base oficial da Anvisa" dentro do dashboard passa a
  funcionar de verdade, comparando com essa base local.

  POR QUE RODAR ISSO FORA DO NAVEGADOR (E NÃO NUM BOTÃO DO SITE):
  1. O arquivo da Anvisa é grande (centenas de milhares de linhas) —
     não daria pra baixar isso toda vez que alguém abrisse o site.
  2. O site da Anvisa bloqueia acesso automatizado direto do navegador.
  3. O Firestore no plano GRATUITO (Spark) não permite que "Cloud
     Functions" façam chamadas de rede externas — isso só é liberado
     no plano pago (Blaze). Rodando esse script no SEU computador,
     você contorna essa limitação sem pagar nada.

  COMO USAR (precisa ter Node.js instalado — nodejs.org, grátis):

  1. No terminal, dentro da pasta do projeto, rode:
       npm init -y
       npm install firebase-admin csv-parse

  2. Gere uma "chave de serviço": no Firebase Console, vá em
     ⚙️ Configurações do projeto > Contas de serviço > "Gerar nova
     chave privada". Isso baixa um arquivo .json.
     Renomeie esse arquivo para "serviceAccountKey.json" e coloque
     na mesma pasta deste script. NUNCA suba esse arquivo pro site
     público — ele dá acesso total ao seu banco de dados.

  3. Baixe o CSV da Anvisa manualmente (o navegador consegue acessar
     mesmo o site bloqueando robôs): acesse
       https://dados.anvisa.gov.br/dados/DADOS_ABERTOS_MEDICAMENTOS.csv
     e salve como "anvisa.csv" na mesma pasta deste script.

  4. Rode:
       node anvisa-import.js

  5. Repita os passos 3 e 4 de vez em quando (ex: 1x por mês) pra
     manter a base atualizada — não precisa refazer os passos 1 e 2.

  IMPORTANTE SOBRE AS COLUNAS DO CSV:
  A Anvisa pode ajustar o nome das colunas de tempos em tempos. Abra
  o anvisa.csv uma vez no Excel/Planilhas Google pra conferir os
  nomes exatos do cabeçalho e ajuste o COLUMN_MAP abaixo se precisar
  — neste script ele já está configurado com os nomes mais comuns
  usados por essa base (NOME_PRODUTO, NUMERO_REGISTRO_PRODUTO,
  SITUACAO_REGISTRO), mas confirme antes de rodar.
*/

const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");
const admin = require("firebase-admin");

const CSV_PATH = path.join(__dirname, "anvisa.csv");
const SERVICE_ACCOUNT_PATH = path.join(__dirname, "serviceAccountKey.json");

// Ajuste aqui se os nomes das colunas no CSV baixado forem diferentes
const COLUMN_MAP = {
  nome: "NOME_PRODUTO",
  numeroRegistro: "NUMERO_REGISTRO_PRODUTO",
  situacao: "SITUACAO_REGISTRO",
  principioAtivo: "PRINCIPIO_ATIVO",
  categoria: "CATEGORIA_REGULATORIA",
  fabricante: "NOME_FABRICANTE"
};

if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error("ERRO: não encontrei serviceAccountKey.json. Veja o passo 2 nas instruções no topo deste arquivo.");
  process.exit(1);
}

if (!fs.existsSync(CSV_PATH)) {
  console.error("ERRO: não encontrei anvisa.csv. Baixe o arquivo (passo 3 nas instruções) e coloque nesta pasta.");
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(require(SERVICE_ACCOUNT_PATH))
});

const db = admin.firestore();

async function run(){

  console.log("Lendo o CSV da Anvisa...");

  const records = [];

  const parser = fs
    .createReadStream(CSV_PATH)
    .pipe(parse({
      columns: true,
      delimiter: ";",       // a base da Anvisa costuma usar ; como separador
      skip_empty_lines: true,
      relax_column_count: true,
      encoding: "latin1"    // arquivos de governo geralmente vêm em Latin-1/ISO-8859-1
    }));

  for await (const row of parser) {

    const nome = row[COLUMN_MAP.nome];
    const numeroRegistro = row[COLUMN_MAP.numeroRegistro];
    const situacao = row[COLUMN_MAP.situacao];

    // Só guardamos produtos com registro VÁLIDO, pra não sugerir
    // produtos cancelados/caducos como se fossem regularizados
    if (!nome || !numeroRegistro) continue;
    if (situacao && !situacao.toUpperCase().includes("VÁLIDO") && !situacao.toUpperCase().includes("VALIDO")) continue;

    records.push({
      nome: nome.trim(),
      nomeNormalizado: nome.trim().toUpperCase(),
      numeroRegistro: numeroRegistro.trim(),
      situacao: (situacao || "").trim(),
      principioAtivo: (row[COLUMN_MAP.principioAtivo] || "").trim(),
      categoria: (row[COLUMN_MAP.categoria] || "").trim(),
      fabricante: (row[COLUMN_MAP.fabricante] || "").trim()
    });

  }

  console.log(`Encontrei ${records.length} produtos com registro válido.`);
  console.log("Enviando para o Firestore em lotes de 400 (pode levar alguns minutos)...");

  const BATCH_SIZE = 400;
  let sent = 0;

  for (let i = 0; i < records.length; i += BATCH_SIZE) {

    const chunk = records.slice(i, i + BATCH_SIZE);
    const batch = db.batch();

    chunk.forEach(record => {
      // Usa o número de registro como ID do documento, pra evitar duplicatas
      // ao rodar o import de novo no futuro (ele sobrescreve em vez de duplicar)
      const docId = record.numeroRegistro.replace(/[^a-zA-Z0-9]/g, "_") || db.collection("anvisa_produtos").doc().id;
      const ref = db.collection("anvisa_produtos").doc(docId);
      batch.set(ref, record, { merge: true });
    });

    await batch.commit();
    sent += chunk.length;
    console.log(`  ...${sent}/${records.length} enviados`);

  }

  console.log("Pronto! A base da Anvisa está disponível no seu Firestore, na coleção 'anvisa_produtos'.");
  process.exit(0);

}

run().catch(err => {
  console.error("Erro durante a importação:", err);
  process.exit(1);
});