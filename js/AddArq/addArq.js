window.onload = function() {
    var fileInput = document.getElementById('file-input');
    var fileDisplay = document.getElementById('file-display');
    var selectedFile = null;

    fileInput.addEventListener('change', function(e) {
        selectedFile = fileInput.files[0];
    });

    function displayImage() {
        fileDisplay.innerHTML = "";  // Limpar qualquer exibição anterior

        var img = document.createElement('img');
        img.src = URL.createObjectURL(selectedFile);
        img.style.maxWidth = '100%';
        img.style.maxHeight = '100%';
        fileDisplay.appendChild(img);
    }

    function displayPdf() {
        fileDisplay.innerHTML = "";  // Limpar qualquer exibição anterior

        var fileReader = new FileReader();

        fileReader.onload = function() {
            var typedarray = new Uint8Array(this.result);
            PDFJS.getDocument(typedarray).promise.then(function(pdf) {
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

        fileReader.readAsArrayBuffer(selectedFile);
    }

    function displayFile() {
        if (!selectedFile) {
            fileDisplay.innerHTML = "Nenhum arquivo selecionado.";
            return;
        }

        var fileType = selectedFile.type;

        if (fileType.startsWith('image/')) {
            displayImage();
        } else if (fileType === 'application/pdf') {
            displayPdf();
        } else {
            fileDisplay.innerHTML = "Formato de arquivo inválido. Por favor, selecione uma imagem ou um arquivo PDF.";
        }
    }
};
