// 💌 CARTA
const abrir = document.getElementById("abrirCarta");
const cerrar = document.getElementById("cerrarCarta");
const carta = document.getElementById("carta");
const imagen = document.getElementById("imagenSorpresa");

// 👉 Botón SÍ
abrir.onclick = () => {
  carta.classList.add("activa");
  imagen.style.display = "block";
};

// 👉 Cerrar carta
cerrar.onclick = () => {
  carta.classList.remove("activa");
  imagen.style.display = "none";
};

// 😈 BOTÓN NO TRAVIESO
const btnNo = document.getElementById("btnNo");
let escala = 1;

btnNo.onclick = () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  escala -= 0.1;

  btnNo.style.transform = `translate(${x}px, ${y}px) scale(${escala})`;
  btnNo.style.animation = "shake 0.3s";

  setTimeout(() => btnNo.style.animation = "", 300);

  if (escala <= 0.3) {
    btnNo.style.display = "none";
  }
};

// 💕 CORAZONES ANIMADOS
const hearts = document.querySelector(".hearts");

setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}, 300);
