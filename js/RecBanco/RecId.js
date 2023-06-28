var IdUserRec = JSON.parse(localStorage.getItem('IdUser'));

// Verifica se o array foi recuperado com sucesso
if (varIdUserRec !== null) {
  
  console.log(varIdUserRec);
} else {
  console.log('Users não encontrados.');
}
