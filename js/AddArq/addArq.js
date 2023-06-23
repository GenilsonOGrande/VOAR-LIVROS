document.getElementById('file-input').addEventListener('change', function(e) {
  var file = e.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var fileDisplay = document.getElementById('file-display');

    if (file.type.startsWith('image/')) {
      var img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '500px';
      img.style.maxHeight = '600px';
      fileDisplay.innerHTML = '';
      fileDisplay.appendChild(img);
    } else if (file.type === 'application/pdf') {
      var embed = document.createElement('embed');
      embed.src = e.target.result;
      embed.width = '500';
      embed.height = '600';
      fileDisplay.innerHTML = '';
      fileDisplay.appendChild(embed);
    } else {
      fileDisplay.innerHTML = 'Formato de arquivo não suportado.';
    }
  }

  reader.readAsDataURL(file);
});
