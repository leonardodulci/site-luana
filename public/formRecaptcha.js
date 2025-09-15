<script src="https://www.google.com/recaptcha/api.js" async defer></script>


    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contactHeroForm");

      form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("hero_name").value.trim();
        const telefone = document.getElementById("hero_phone").value.trim();
        const mensagem = document.getElementById("hero_message").value.trim();
        const recaptchaResp = grecaptcha.getResponse();

        if (!nome || !telefone || !mensagem) {
          alert("Por favor, preencha todos os campos.");
          return;
        }
        if (!recaptchaResp) {
          alert("Por favor, confirme que você não é um robô.");
          return;
        }

        const texto = `Olá, meu nome é ${nome}.%0ATelefone: ${telefone}%0AMensagem: ${mensagem}`;
        const numero = "5561999225658";
        const url = `https://wa.me/${numero}?text=${texto}`;

        window.open(url, "_blank");
      });
    });
