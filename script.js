// 💌 mensaje para Tía Ana María
const mensaje =
"Tía Ana María 💖\n\n" +
"Gracias por ese apoyo incondicional y por cada consejo que me das para ser una mejor persona.\n\n" +
"Siempre te voy a llevar en mi corazón y siempre vas a estar presente en mi vida.\n\n" +
"Te quiero mucho 💕\n\n" +
"Eres como un ángel en mi camino,\n" +
"alguien que me cuida y me protege con ese espíritu maternal tan bonito ✨";
let i = 0;

// 💌 abrir tarjeta
function abrirTarjeta() {
  document.querySelector(".sobre").style.display = "none";
  document.querySelector(".tarjeta").style.display = "block";

  escribir();
  lanzarConfeti();
}

// ✍️ escritura
function escribir() {
  if (i < mensaje.length) {
    document.getElementById("texto").innerHTML += mensaje.charAt(i);
    i++;
    setTimeout(escribir, 40);
  }
}

/* 🎵 activar música (por seguridad del navegador) */
document.body.addEventListener("click", () => {
  document.getElementById("musica").play();
});

/* 💖 CONFETI DE CORAZONES */
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function crearCorazones() {
  for (let i = 0; i < 80; i++) {
    hearts.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      s: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1
    });
  }
}

function dibujar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(h => {
    ctx.font = `${h.s}px Arial`;
    ctx.fillText("💖", h.x, h.y);

    h.y += h.speed;

    if (h.y > canvas.height) {
      h.y = -20;
      h.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(dibujar);
}

function lanzarConfeti() {
  crearCorazones();
  dibujar();
}