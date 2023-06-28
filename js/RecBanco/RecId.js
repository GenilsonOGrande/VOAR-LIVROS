var IdUserRec = JSON.parse(localStorage.getItem('IdUser'));

// Verifica se o array foi recuperado com sucesso
if (IdUserRec !== null) {
  
  console.log(IdUserRec);
} else {
  console.log("Teste. Id: " + IdUserRec);
}
