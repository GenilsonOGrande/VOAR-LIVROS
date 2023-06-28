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

