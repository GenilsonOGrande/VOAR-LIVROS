//-----------------------------------------------------------------
function LogarUser(){
  checkUserExistenceLog();
}
//-----------------------------------------------------------------
function checkUserExistenceLog() {
  const email_login = document.getElementById("email_login").value;
  const senha_login = document.getElementById("senha_login").value;

  const usuarioEncontrado = listaUsersRec.find(user => user.email === email_login && user.senha === senha_login);

  if (usuarioEncontrado) {
    window.alert("As credenciais são válidas. Bem-vindo, " + usuarioEncontrado.nome + "!");
    verificarTipoUsuario(usuarioEncontrado.id);
  } else {
    window.alert("As credenciais são inválidas. Por favor, verifique seu email e senha.");
  }
}
//-----------------------------------------------------------------
/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidades de login de um usuário.
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
*/
