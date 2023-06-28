function verificarTipoUsuario(idUsuario) {
  var usuario = listaUsers.find(function(user) {
    return user.id === idUsuario;
  });

  if (usuario) {
    if (usuario.email === "adm@gmail.com") {
      console.log("Usuário logado é um Administrador.");
      // Adicionar funcionalidades exclusivas do Administrador
    }  else {
      console.log("Usuário logado é um Usuário Comum.");
    }
  } 
}
