// main.js
let nombre = window.prompt("Ingresa tu nombre: ");
const nombreElemento = document.getElementById("nombre-invitado");
const countdownElement = document.getElementById("countdown");

// Asigna el nombre y muestra el contenedor
nombreElemento.textContent = nombre;
document.querySelector(".container").style.display = "flex";

function updateTime() {
  const targetDate = new Date("2024/12/20 19:00:00");
  const now = new Date();
  const diffInMilliseconds = targetDate.getTime() - now.getTime();

  // Calcula el tiempo restante en días, horas, minutos y segundos
  const days = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMilliseconds % (1000 * 60)) / 1000);

  // Formatea la cadena de cuenta atrás para una visualización clara
  let countdownString = "";
  if (days > 0) {
    countdownString += `${days} día(s) `;
  }
  if (hours > 0) {
    countdownString += `${hours.toString().padStart(2, '0')}:`;
  }
  countdownString += `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  countdownElement.textContent = countdownString;
}

// Actualiza la cuenta atrás cada segundo
setInterval(updateTime, 1000);
