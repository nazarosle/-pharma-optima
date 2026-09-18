/*
  PHARMA OPTIMA — AUTH GUARD
  ----------------------------
  Incluído em toda página protegida, logo depois de firebase-config.js
  e ANTES de data.js/script.js. Esconde o conteúdo até confirmar que
  o usuário está logado; se não estiver, manda para login.html.
*/

document.documentElement.style.visibility = "hidden";

auth.onAuthStateChanged((user) => {

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.documentElement.style.visibility = "visible";

  // Preenche o e-mail do usuário logado onde houver o elemento #currentUserEmail
  const emailEl = document.getElementById("currentUserEmail");
  if (emailEl) emailEl.textContent = user.email;

});

function logout(){
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}