document.getElementById('upload').addEventListener('change', function() {
  var file = this.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    if (file.type.indexOf('image') !== -1) {
      document.getElementById('visualizacao').innerHTML = '<img src="' + e.target.result + '" alt="Imagem" />';
    } else if (file.type.indexOf('pdf') !== -1) {
      document.getElementById('visualizacao').innerHTML = '<iframe src="' + e.target.result + '" width="100%" height="100%"></iframe>';
    } else {
      document.getElementById('visualizacao').innerHTML = 'Formato de arquivo não suportado.';
    }
  };

  reader.readAsDataURL(file);
});
