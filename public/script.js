// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-button');
    const text = document.getElementById('text');
    const imagemLuana = document.getElementById('imagem-luana');

    let isImageVisible = true;

    toggleButton.addEventListener('click', function() {
        if (isImageVisible) {
            imagemLuana.style.display = 'none';
            text.style.display = 'block';
            toggleButton.innerHTML = '⬅'; // Mude a seta para a esquerda
        } else {
            imagemLuana.style.display = 'block';
            text.style.display = 'none';
            toggleButton.innerHTML = '➡'; // Mude a seta de volta para a direita
        }
        isImageVisible = !isImageVisible;
    });
});


