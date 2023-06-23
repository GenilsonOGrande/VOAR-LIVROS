window.onload = function() {
    var fileInput = document.getElementById('file-input');
    var fileDisplay = document.getElementById('file-display');
    var selectedFile = null;

    fileInput.addEventListener('change', function(e) {
        selectedFile = e.target.files[0];
    });

    function displayImage(file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '100%';
            fileDisplay.innerHTML = '';
            fileDisplay.appendChild(img);
        };
        reader.readAsDataURL(file);
    }

    function displayPdf(file) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            var typedarray = new Uint8Array(e.target.result);
            pdfjsLib.getDocument(typedarray).promise.then(function(pdf) {
                pdf.getPage(1).then(function(page) {
                    var viewport = page.getViewport({ scale: 1.5 });
                    var canvas = document.createElement('canvas');
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    page.render(renderContext).promise.then(function() {
                        fileDisplay.innerHTML = '';
                        fileDisplay.appendChild(canvas);
                    });
                });
            });
        };
        fileReader.readAsArrayBuffer(file);
    }

    document.getElementById('display-btn').addEventListener('click', function() {
        if (!selectedFile) {
            fileDisplay.innerHTML = "Nenhum arquivo selecionado.";
            return;
        }

        var fileType = selectedFile.type;

        if (fileType.startsWith('image/')) {
            displayImage(selectedFile);
        } else if (fileType === 'application/pdf') {
            displayPdf(selectedFile);
        } else {
            fileDisplay.innerHTML = "Formato de arquivo inválido. Por favor, selecione uma imagem ou um arquivo PDF.";
        }
    });
};
