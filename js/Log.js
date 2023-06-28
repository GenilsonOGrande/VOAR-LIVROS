// Verifica o tipo de usuário com base no email
function verificarTipoUsuario(email) {
  var usuario = listaUsersRec.find(function(user) {
    return user.email === email;
  });
  return usuario ? usuario.tipo : null;
}

// Exemplo de uso
function checkUserExistenceLog() {
  const email_login = document.getElementById("email_login").value;  
  const senha_login = document.getElementById("senha_login").value;
  
  const usuarioEncontrado = listaUsersRec.find(user => user.email === email_login && user.senha === senha_login);

  if (usuarioEncontrado) {
    window.alert("As credenciais são válidas. Bem-vindo, " + usuarioEncontrado.nome + "!");
    verificarTipoUsuario(usuarioEncontrado.email);

  } else {
    window.alert("As credenciais são inválidas. Por favor, verifique seu email e senha.");
  }
}

// Verificar tipo de usuário ao fazer login
function verificarTipoUsuario(emailUsuarioLogado) {
  var tipoUsuarioLogado = verificarTipoUsuario(emailUsuarioLogado);

  if (tipoUsuarioLogado === "adm") {
    // Funcionalidades exclusivas do Administrador
    console.log("Bem-vindo, Administrador!");
    // ...
  } else if (tipoUsuarioLogado === "user") {
    // Funcionalidades exclusivas do Usuário Comum
    console.log("Bem-vindo, Usuário Comum!");
    // ...
  } else {
    // Usuário não encontrado ou tipo inválido
    console.log("Usuário não encontrado ou tipo inválido.");
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
