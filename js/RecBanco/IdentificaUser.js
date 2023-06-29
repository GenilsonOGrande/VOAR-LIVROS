function verificarTipoUsuario(idUsuario) {
  var usuario = listaUsersRec.find(function(user) {
    return user.id === idUsuario;
  });

  if (usuario) {
    if (usuario.email === "adm@gmail.com") {
      console.log("Usuário logado é um Administrador.");
      console.log("ID: " + idUsuario);
      localStorage.setItem('IdUser', JSON.stringify(idUsuario));   

      // Adicionar funcionalidades exclusivas do Administrador
    }  else {
      console.log("Usuário logado é um Usuário Comum.");
      console.log("ID: " + idUsuario);
      localStorage.setItem('IdUser', JSON.stringify(idUsuario));   
    }
  } 
//----------------------------------------------------------
}
/*function transferirIdUsers(){ 
localStorage.setItem('IdUser', JSON.stringify(idUsuario));   
}*/

/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidade de identificar o tipo de usuario quando realiza o login
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
*/

