// Defina as funções dentro do escopo global
let imagemAtual = 0;
const imagens = document.querySelectorAll('.miniaturas img');
const imagemGrande = document.querySelector('.imagem-grande img');

function exibirImagem(indice) {
    imagemGrande.src = imagens[indice].getAttribute('data-imagem');
    imagemAtual = indice;
}

function proximaImagem() {
    imagemAtual++;
    if (imagemAtual >= imagens.length) {
        imagemAtual = 0;
    }
    exibirImagem(imagemAtual);
}

function anteriorImagem() {
    imagemAtual--;
    if (imagemAtual < 0) {
        imagemAtual = imagens.length - 1;
    }
    exibirImagem(imagemAtual);
}

// Adicione event listeners para as setas de navegação após as funções
document.querySelector('.seta-direita').addEventListener('click', proximaImagem);
document.querySelector('.seta-esquerda').addEventListener('click', anteriorImagem);

// Inicialize a exibição com a primeira imagem
exibirImagem(imagemAtual);
