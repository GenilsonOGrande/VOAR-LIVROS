// Recupera o array (banco dados interno/navegador) do localStorage
var listaUsersRec = JSON.parse(localStorage.getItem('BancoUsers'));

// Verifica se o array foi recuperado com sucesso
if (listaUsersRec !== null) {
  
  console.log(listaUsersRec);
} else {
  console.log('Users não encontrados.');
}
//---------------------------------------------------------
var IdUserRec = JSON.parse(localStorage.getItem('IdUser'));

// Verifica se o array foi recuperado com sucesso
if (IdUserRec !== null) {
  
  console.log(IdUserRec);
} else {
  console.log('Teste');
}
/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidades de recuperar um banco de dados interno.
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
*/
