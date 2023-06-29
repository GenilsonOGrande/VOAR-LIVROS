var IdUserRec = JSON.parse(localStorage.getItem('IdUser'));

// Verifica se o array foi recuperado com sucesso
if (IdUserRec !== null) {
  
  console.log("Funcionou. Id: " + IdUserRec);
} else {
  console.log("Não Funcionou. Id: " + IdUserRec);
}
/*
# Autor: Arthur J de Oliveira Santos
# Data: 21 de junho de 2023
# Descrição: Este código possui funcionalidade de recuperar o id do usuario acessado, mante-lo logado.
# Linkedin: https://www.linkedin.com/in/arthur-jacintho-de-oliveira-santos-3737b8261
# Github: https://github.com/ArthurJos04
*/
