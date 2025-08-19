document.addEventListener("DOMContentLoaded", () => {
  const btnWhatsApp = document.getElementById("btn-whatsapp");

  if (btnWhatsApp) {
    btnWhatsApp.addEventListener("click", () => {
      const numero = "5515991271165"; // substitua pelo número real com DDI+DDD
      const mensagem = "Olá! Gostaria de mais informações."; // mensagem padrão
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
        mensagem
      )}`;

      window.open(url, "_blank"); // abre em nova aba / aplicativo
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const linksWhatsApp = document.querySelectorAll("a[data-whatsapp]");

  linksWhatsApp.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // previne comportamento padrão do link

      const numero = "5515991271165"; // substitua pelo número real
      const mensagem = "Olá! Gostaria de mais informações."; // mensagem padrão
      const url = `https://wa.me/${numero}?text=${encodeURIComponent(
        mensagem
      )}`;

      window.open(url, "_blank"); // abre em nova aba / aplicativo
    });
  });
});
