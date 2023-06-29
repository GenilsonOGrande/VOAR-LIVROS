var IdUserRec = JSON.parse(localStorage.getItem('IdUser'));

// Verifica se o array foi recuperado com sucesso
if (IdUserRec !== null) {
  
  console.log("Funcionou. Id: " + IdUserRec);
} else {
  console.log("Não Funcionou. Id: " + IdUserRec);
}
