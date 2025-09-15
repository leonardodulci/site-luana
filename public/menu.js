document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".MenuNav");
  const dropBtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");

  // Mostrar ou esconder o menu
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Mostrar ou esconder submenu "Fotos" no mobile
  dropBtn.addEventListener("click", function (e) {
    if (window.innerWidth <= 766) {
      e.preventDefault(); // Impede navegação para #galeria
      dropdown.classList.toggle("show-dropdown");
    }
  });

  // Fecha menu ou submenu se clicar fora
  document.addEventListener("click", function (e) {
    const clickedInsideNav = e.target.closest(".MenuNav");
    const clickedToggle = e.target.closest(".menu-toggle");

    if (!clickedInsideNav && !clickedToggle) {
      nav.classList.remove("show");
      dropdown.classList.remove("show-dropdown");
    }
  });
});

