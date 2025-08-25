// Obtém a referência para o seu cabeçalho
const header = document.querySelector('header');

// Adiciona um "ouvinte" para o evento de rolagem da janela
window.addEventListener('scroll', () => {
  // Verifica se a rolagem vertical (scrollY) é maior que 50 pixels
  if (window.scrollY > 50) {
    // Se for, adiciona a classe 'scrolled' ao cabeçalho
    header.classList.add('scrolled');
  } else {
    // Se não, remove a classe 'scrolled'
    header.classList.remove('scrolled');
  }
});