function verificarTipoUsuario(idUsuario) {
  var usuario = listaUsersRec.find(function(user) {
    return user.id === idUsuario;
  });

  if (usuario) {
    if (usuario.email === "adm@gmail.com") {
      console.log("Usuário logado é um Administrador.");
      console.log("ID: " + idUsuario);
      // Adicionar funcionalidades exclusivas do Administrador
    }  else {
      console.log("Usuário logado é um Usuário Comum.");
      console.log("ID: " + idUsuario);
    }
  } 
}
//----------------------------------------------------------
function transferirIdUsers(){ 
localStorage.setItem('IdUser', JSON.stringify(idUsuario));   
}
