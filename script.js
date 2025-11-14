/* Copiar al portapapeles - No soportado en todos los navegadores */
function clipboardCopy() {
  let texto = document.getElementById("copiar-codigo").innerText;
    navigator.clipboard.writeText(texto).then(function() {
        let feedbackElement = document.getElementById("feedbackElement")
        feedbackElement.innerHTML += `<i class="fa-regular fa-clipboard"></i><p>Texto copiado al portapapeles</p>`;
    }).catch(function(err) {
        feedbackElement.textContent = 'Error al copiar texto: ' + err;
    });
}

 document.addEventListener("DOMContentLoaded", function () {
      document.getElementById("copiar-codigo").addEventListener("click", clipboardCopy);
    });

