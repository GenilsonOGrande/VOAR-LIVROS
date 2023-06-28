// Recupera o array (banco dados interno/navegador) do localStorage
var listaUsersRec = JSON.parse(localStorage.getItem('BancoUsers'));

// Verifica se o array foi recuperado com sucesso
if (listaUsersRec !== null) {
  
  console.log(listaUsersRec);
} else {
  console.log('Users não encontrados.');
}
//----------------------------------------------
function verificarTipoUsuario(idUsuario) {
  var usuario = listaUsersRec.find(function(user) {
    return user.id === idUsuario;
  });
  return usuario ? usuario.tipo : null;
}

// Exemplo de uso
var idUsuarioLogado = 1; // ID do usuário logado (exemplo: 1 para Administrador)
var tipoUsuarioLogado = verificarTipoUsuario(idUsuarioLogado);

if (tipoUsuarioLogado === "admin") {
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

/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidades de recuperar um banco de dados interno.
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
*/
