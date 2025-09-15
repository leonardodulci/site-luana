document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".MenuNav");
  const dropBtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");

  // Alterna visibilidade do menu hamburguer
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }

  // Alterna visibilidade do submenu "Fotos" no mobile
  if (dropBtn && dropdown) {
    dropBtn.addEventListener("click", function (e) {
      if (window.innerWidth <= 766) {
        e.preventDefault(); // Impede redirecionamento
        e.stopPropagation(); // Evita fechamento por clique fora
        dropdown.classList.toggle("show-dropdown");
      }
    });
  }

  // Fecha menu ou dropdown ao clicar fora
  document.addEventListener("click", function (e) {
    const clickedInsideNav = e.target.closest(".MenuNav");
    const clickedToggle = e.target.closest(".menu-toggle");

    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove("show");
      if (dropdown) dropdown.classList.remove("show-dropdown");
    }
  });

  // Carrossel de imagens da hero-section
  const carouselImages = document.querySelectorAll(".hero-image-carousel img");
  let currentImage = 0;

  function showNextImage() {
    if (carouselImages.length === 0) return;
    carouselImages[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % carouselImages.length;
    carouselImages[currentImage].classList.add("active");
  }

  setInterval(showNextImage, 4000); // Troca a cada 4 segundos

  // Evento exemplo (corrigido) — seção com ID 'section'
  const section = document.getElementById("section");
  if (section) {
    section.addEventListener("mouseover", () => {
      section.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, porro quas magnam corporis culpa neque nesciunt sunt id, fugit voluptatum ab recusandae laborum sequi dolores illo harum officia qui quibusdam!</p>`;
    });

    section.addEventListener("mouseout", () => {
      section.innerHTML = ""; // Limpa o conteúdo ao sair
    });
  }
});