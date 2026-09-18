/*
  PHARMA OPTIMA — CONFIGURAÇÃO DO FIREBASE
  -------------------------------------------
  1. Vá em console.firebase.google.com > seu projeto > ⚙️ Configurações
     do projeto > role até "Seus apps" > app Web.
  2. Copie o objeto "firebaseConfig" que aparece lá e cole no lugar do
     objeto abaixo (substitua TUDO, incluindo as aspas).
  3. Salve este arquivo e suba ele junto com os outros.

  Isso NÃO é segredo — essas chaves são públicas por natureza (elas vão
  para o navegador de qualquer forma). A segurança de verdade vem das
  "Regras do Firestore" (arquivo firestore.rules), que controlam quem
  pode ler/escrever os dados. Não pule a configuração dessas regras.
*/


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9iQdgkOqcRGOwiFx6YHcu8ZrAvyg6pFk",
  authDomain: "pharma-optima.firebaseapp.com",
  projectId: "pharma-optima",
  storageBucket: "pharma-optima.firebasestorage.app",
  messagingSenderId: "686853830427",
  appId: "1:686853830427:web:83686af40074a8699c45be"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
