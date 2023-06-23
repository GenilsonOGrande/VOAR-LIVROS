window.onload = function() {
    var fileInput = document.getElementById('file-input');
    var fileDisplay = document.getElementById('file-display');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var fileType = file.type;

        if (fileType.startsWith('image/')) {
            displayImage(file);
        } else if (fileType === 'application/pdf') {
            displayPdf(file);
        } else {
            fileDisplay.innerHTML = "Formato de arquivo inválido. Por favor, selecione uma imagem ou um arquivo PDF.";
        }
    });

    function displayImage(file) {
        fileDisplay.innerHTML = "";  // Limpar qualquer exibição anterior

        var img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        fileDisplay.appendChild(img);
    }

    function displayPdf(file) {
        fileDisplay.innerHTML = "";  // Limpar qualquer exibição anterior

        var reader = new FileReader();

        reader.onload = function(e) {
            var buffer = new Uint8Array(reader.result);
            PDFJS.getDocument(buffer).then(function(pdf) {
                var pageNumber = 1;
                pdf.getPage(pageNumber).then(function(page) {
                    var scale = 1.5;
                    var viewport = page.getViewport({ scale: scale });

                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    fileDisplay.appendChild(canvas);

                    page.render({
                        canvasContext: context,
                        viewport: viewport
                    });
                });
            });
        };

        reader.readAsArrayBuffer(file);
    }
};
