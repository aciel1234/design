/* Copiar al portapapeles - No soportado en todos los navegadores */
function clipboardCopy() {
  let texto = document.getElementById("copiar-codigo").innerText;
  let feedbackElement = document.getElementById("feedbackElement");

  navigator.clipboard.writeText(texto)
    .then(function () {

      // Mostrar mensaje
      feedbackElement.innerHTML = `
        <i class="fa-regular fa-clipboard"></i>
        <p>Texto copiado al portapapeles</p>
      `;

      // Ocultar después de 1 segundo
      setTimeout(() => {
        feedbackElement.innerHTML = "";
      }, 2000);

    })
    .catch(function (err) {
      feedbackElement.textContent = 'Error al copiar texto: ' + err;

      setTimeout(() => {
        feedbackElement.innerHTML = "";
      }, 1000);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("copiar-codigo").addEventListener("click", clipboardCopy);
});


function clipboardCopy() {
  let texto = document.getElementById("copiar-codigo2").innerText;
  let feedbackElement = document.getElementById("feedbackElement");

  navigator.clipboard.writeText(texto)
    .then(function () {

      // Mostrar mensaje
      feedbackElement.innerHTML = `
        <i class="fa-regular fa-clipboard"></i>
        <p>Texto copiado al portapapeles</p>
      `;

      // Ocultar después de 1 segundo
      setTimeout(() => {
        feedbackElement.innerHTML = "";
      }, 2000);

    })
    .catch(function (err) {
      feedbackElement.textContent = 'Error al copiar texto: ' + err;

      setTimeout(() => {
        feedbackElement.innerHTML = "";
      }, 1000);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("copiar-codigo2").addEventListener("click", clipboardCopy);
});
