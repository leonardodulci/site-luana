
  $(document).ready(function () {
    $("#whatsappForm").submit(function (e) {
      e.preventDefault(); // Impede o envio padrão do formulário

      // Coleta os dados do formulário
      const name = $("#name").val();
      const phone = $("#phone").val();
      const message = $("#message").val();

      // Formata a mensagem do WhatsApp
      const whatsappMessage = `Olá, meu nome é ${name} e gostaria de falar sobre: ${message}. Meu número de telefone é ${phone}.`;

      // Substitua 'seunumerodewhatsapp' pelo número de telefone real do WhatsApp, incluindo o código do país e área (sem espaços ou caracteres especiais).
      const whatsappLink = `https://api.whatsapp.com/send?phone=+5561999225658&text=${encodeURIComponent(whatsappMessage)}`;

      // Redireciona o usuário para o link do WhatsApp
      window.location.href = whatsappLink;
    });
  });

