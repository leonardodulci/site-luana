document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactHeroForm");

  if (!form) return; // Garante que o formulário existe

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Impede recarregamento da página

    const name = document.getElementById("hero_name").value.trim();
    const phone = document.getElementById("hero_phone").value.trim();
    const message = document.getElementById("hero_message").value.trim();
    const captchaResponse = grecaptcha.getResponse();

    if (!name || !phone || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!captchaResponse) {
      alert("Por favor, confirme que você não é um robô.");
      return;
    }

    // WhatsApp envio
    const phoneNumber = "5561999225658";
    const texto = `Olá! Me chamo ${name}, meu telefone é ${phone}. Mensagem:${message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texto)}`;

    window.open(whatsappURL, "_blank");
  });
});  