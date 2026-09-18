/*
  PHARMA OPTIMA — CAMADA DE DADOS (FIRESTORE)
  -----------------------------------------------
  Guarda produtos, metas, funcionários e configurações no Firestore
  (banco de dados na nuvem do Firebase), para que os dados fiquem
  disponíveis em qualquer computador/navegador, não só no seu PC.

  Requer que firebase-config.js já tenha rodado antes deste arquivo
  (ele cria as variáveis globais `auth` e `db` usadas aqui).

  Padrão usado: cada coleção (products, goals, employees) tem um
  "listener" em tempo real (onSnapshot) — sempre que algo muda no
  banco (por você ou por qualquer outra pessoa logada), a tela
  atualiza sozinha, sem precisar recarregar a página.

  SOBRE OS PRODUTOS (ANVISA):
  Os IDs de produtos da Anvisa ficam numa coleção separada chamada
  "anvisa_produtos", carregada pelo script anvisa-import.js (rodado
  uma vez por você, fora do navegador). O botão "Verificar na Anvisa"
  no formulário de produto consulta essa coleção.
*/

const SEED_DATA = {

  products: [
    {
      nome: "Dipirona Monoidratada 500mg",
      principioAtivo: "Dipirona monoidratada",
      categoria: "Analgésicos",
      lote: "L2024-118",
      validade: "2027-03-01",
      quantidade: 3400,
      registroAnvisa: "1.0387.0076.001-9"
    },
    {
      nome: "Ácido Ascórbico (Vitamina C) 1g",
      principioAtivo: "Ácido ascórbico",
      categoria: "Vitaminas",
      lote: "L2024-204",
      validade: "2026-11-01",
      quantidade: 2150,
      registroAnvisa: "1.0068.0090.002-4"
    },
    {
      nome: "Ibuprofeno 400mg",
      principioAtivo: "Ibuprofeno",
      categoria: "Anti-inflamatórios",
      lote: "L2024-097",
      validade: "2026-09-01",
      quantidade: 860,
      registroAnvisa: "1.0068.0112.003-7"
    },
    {
      nome: "Amoxicilina Tri-hidratada 500mg",
      principioAtivo: "Amoxicilina tri-hidratada",
      categoria: "Antibióticos",
      lote: "L2024-055",
      validade: "2026-09-01",
      quantidade: 140,
      registroAnvisa: "1.0068.0143.004-1"
    },
    {
      nome: "Paracetamol 750mg",
      principioAtivo: "Paracetamol",
      categoria: "Analgésicos",
      lote: "L2023-311",
      validade: "2026-06-01",
      quantidade: 0,
      registroAnvisa: "1.0068.0178.005-8"
    },
    {
      nome: "Loratadina 10mg",
      principioAtivo: "Loratadina",
      categoria: "Antialérgicos",
      lote: "L2024-142",
      validade: "2027-01-01",
      quantidade: 720,
      registroAnvisa: "1.0068.0201.006-2"
    }
  ],

  goals: [
    { titulo:"Reduzir perdas de produção para 3%", responsavel:"Carlos Menezes", prazo:"2026-09-30", progresso:80 },
    { titulo:"Aumentar faturamento trimestral em 15%", responsavel:"Fernanda Reis", prazo:"2026-10-15", progresso:62 },
    { titulo:"Certificar nova linha de produção (ISO 9001)", responsavel:"Paulo Andrade", prazo:"2026-09-20", progresso:45 },
    { titulo:"Zerar rupturas de estoque em antibióticos", responsavel:"Juliana Prado", prazo:"2026-11-01", progresso:28 },
    { titulo:"Treinar 100% da equipe em boas práticas de fabricação", responsavel:"Ricardo Lima", prazo:"2026-09-10", progresso:90 }
  ],

  employees: [
    { nome:"Carlos Menezes", cargo:"Supervisor de Produção", departamento:"Produção", turno:"Manhã", status:"Presente" },
    { nome:"Fernanda Reis", cargo:"Farmacêutica Pesquisadora", departamento:"Pesquisa", turno:"Tarde", status:"Presente" },
    { nome:"Paulo Andrade", cargo:"Analista de Qualidade", departamento:"Qualidade", turno:"Manhã", status:"Ausente" },
    { nome:"Juliana Prado", cargo:"Gerente Comercial", departamento:"Vendas", turno:"Tarde", status:"Presente" },
    { nome:"Ricardo Lima", cargo:"Operador de Máquinas", departamento:"Produção", turno:"Noite", status:"Presente" }
  ]

};

const Store = {

  data: {
    products: [],
    goals: [],
    employees: [],
    settings: { theme:"dark", timezone:"America/Sao_Paulo", language:"pt", photo:null }
  },

  ready: false,
  listeners: [],

  onChange(cb){
    this.listeners.push(cb);
  },

  notify(){
    this.listeners.forEach(cb => cb());
  },

  /* Roda uma vez, disparado pelo auth-guard depois do login confirmado */
  async init(){

    await this.seedIfEmpty();

    db.collection("products").onSnapshot(snap => {
      this.data.products = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      this.ready = true;
      this.notify();
    });

    db.collection("goals").onSnapshot(snap => {
      this.data.goals = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      this.notify();
    });

    db.collection("employees").onSnapshot(snap => {
      this.data.employees = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      this.notify();
    });

    db.collection("settings").doc("app").onSnapshot(doc => {
      if (doc.exists) Object.assign(this.data.settings, doc.data());
      this.notify();
    });

  },

  /* Primeira vez que alguém loga: popula o banco vazio com os dados de exemplo */
  async seedIfEmpty(){

    const flag = await db.collection("meta").doc("seeded").get();
    if (flag.exists) return;

    const batch = db.batch();

    SEED_DATA.products.forEach(p => {
      const ref = db.collection("products").doc();
      batch.set(ref, p);
    });

    SEED_DATA.goals.forEach(g => {
      const ref = db.collection("goals").doc();
      batch.set(ref, g);
    });

    SEED_DATA.employees.forEach(e => {
      const ref = db.collection("employees").doc();
      batch.set(ref, e);
    });

    batch.set(db.collection("meta").doc("seeded"), { seededAt: new Date().toISOString() });

    await batch.commit();

  },

  /* PRODUCTS */

  getProducts(){
    return this.data.products;
  },

  productStatus(product){
    if (product.quantidade <= 0) return "esgotado";
    if (product.quantidade < 200) return "baixo";
    if (product.quantidade < 1000) return "medio";
    return "alto";
  },

  isExpiringSoon(product, days = 30){
    const today = new Date();
    const validade = new Date(product.validade);
    const diffDays = (validade - today) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 && diffDays <= days;
  },

  addProduct(product){
    return db.collection("products").add(product);
  },

  updateProduct(id, updates){
    return db.collection("products").doc(id).update(updates);
  },

  deleteProduct(id){
    return db.collection("products").doc(id).delete();
  },

  /* ANVISA (só funciona depois de rodar anvisa-import.js uma vez) */

  async verificarAnvisa(termo){

    const termoNormalizado = termo.trim().toUpperCase();
    if (!termoNormalizado) return [];

    const snap = await db.collection("anvisa_produtos")
      .where("nomeNormalizado", ">=", termoNormalizado)
      .where("nomeNormalizado", "<=", termoNormalizado + "\uf8ff")
      .limit(8)
      .get();

    return snap.docs.map(d => d.data());

  },

  /* GOALS */

  getGoals(){
    return this.data.goals;
  },

  goalStatus(goal){
    if (goal.progresso >= 100) return "concluido";
    const today = new Date();
    const prazo = new Date(goal.prazo);
    if (prazo < today) return "atrasado";
    return "andamento";
  },

  addGoal(goal){
    return db.collection("goals").add(goal);
  },

  updateGoal(id, updates){
    return db.collection("goals").doc(id).update(updates);
  },

  deleteGoal(id){
    return db.collection("goals").doc(id).delete();
  },

  /* EMPLOYEES */

  getEmployees(){
    return this.data.employees;
  },

  addEmployee(employee){
    return db.collection("employees").add(employee);
  },

  updateEmployee(id, updates){
    return db.collection("employees").doc(id).update(updates);
  },

  deleteEmployee(id){
    return db.collection("employees").doc(id).delete();
  },

  /* SETTINGS */

  getSettings(){
    return this.data.settings;
  },

  updateSettings(updates){
    return db.collection("settings").doc("app").set(updates, { merge: true });
  }

};