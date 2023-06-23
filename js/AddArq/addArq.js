<!DOCTYPE html>
<html>
<head>
  <title>Exibição de Arquivos</title>
  <style>
    #file-input {
      display: none;
    }
    #file-label {
      display: inline-block;
      padding: 10px 20px;
      background-color: #4CAF50;
      color: white;
      cursor: pointer;
    }
    #file-container {
      margin-top: 20px;
      width: 100%;
    }
  </style>
</head>
<body>
  <input type="file" id="file-input" accept=".jpg, .jpeg, .png, .pdf">
  <label for="file-input" id="file-label">Selecionar arquivo</label>
  <div id="file-container"></div>

  <script>
    function carregarArquivo() {
      var fileInput = document.getElementById('file-input');
      var file = fileInput.files[0];

      if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
          var fileContainer = document.getElementById('file-container');
          var fileURL = e.target.result;

          // Verifica o tipo de arquivo
          var fileType = file.type;

          // Exibe o arquivo conforme o tipo
          if (fileType.startsWith('image/')) {
            var imageHTML = '<img src="' + fileURL + '" alt="Imagem" />';
            fileContainer.innerHTML = imageHTML;
          } else if (fileType.startsWith('audio/')) {
            var audioHTML = '<audio controls><source src="' + fileURL + '" type="' + fileType + '"></audio>';
            fileContainer.innerHTML = audioHTML;
          } else if (fileType.startsWith('video/')) {
            var videoHTML = '<video controls><source src="' + fileURL + '" type="' + fileType + '"></video>';
            fileContainer.innerHTML = videoHTML;
          } else if (fileType === 'application/pdf') {
            var pdfHTML = '<embed src="' + fileURL + '" type="application/pdf" width="100%" height="1000px" />';
            fileContainer.innerHTML = pdfHTML;
          } else {
            var fileLinkHTML = '<a href="' + fileURL + '">Download</a>';
            fileContainer.innerHTML = fileLinkHTML;
          }
        };

        reader.readAsDataURL(file);
      }
    }
  </script>
</body>
</html>
