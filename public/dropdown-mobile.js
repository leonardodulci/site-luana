
document.addEventListener("DOMContentLoaded", function () {
  const dropBtn = document.querySelector(".dropbtn");
  const dropdown = document.querySelector(".dropdown-content");

  // Toggle ao clicar
  dropBtn.addEventListener("click", function (e) {
    e.preventDefault(); // previne o redirecionamento para #galeria
    dropdown.classList.toggle("show-dropdown");
  });

  // Fecha se clicar fora
  window.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item")) {
      dropdown.classList.remove("show-dropdown");
    }
  });
});

