document.getElementById('file-input').addEventListener('change', function(e) {
  var file = e.target.files[0];

  if (file) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var fileContainer = document.getElementById('file-container');
      fileContainer.innerHTML = ''; // Limpa o conteúdo anterior

      var fileURL = e.target.result;
      var fileType = file.type;

      if (fileType.startsWith('image/')) {
        var img = document.createElement('img');
        img.src = fileURL;
        fileContainer.appendChild(img);
      } else if (fileType === 'application/pdf') {
        var embed = document.createElement('embed');
        embed.src = fileURL;
        fileContainer.appendChild(embed);
      } else {
        var unsupportedMsg = document.createElement('p');
        unsupportedMsg.textContent = 'Formato de arquivo não suportado.';
        fileContainer.appendChild(unsupportedMsg);
      }
    };

    reader.readAsDataURL(file);
  }
});
