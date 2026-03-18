const canvas = document.getElementById("bg-canvas");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const particleCount = 80;


// CREATE PARTICLES

for (let i = 0; i < particleCount; i++) {

  particles.push({

    x: Math.random() * canvas.width,

    y: Math.random() * canvas.height,

    radius: Math.random() * 2,

    speed: Math.random() * 0.5 + 0.2,

    opacity: Math.random() * 0.5

  });

}


// ANIMATE

function animate() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {

    p.y += p.speed;

    if (p.y > canvas.height) {

      p.y = 0;
      p.x = Math.random() * canvas.width;

    }

    ctx.beginPath();

    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

    ctx.fillStyle = `rgba(34,197,94,${p.opacity})`;

    ctx.fill();

  });

  requestAnimationFrame(animate);

}

animate();


// RESPONSIVE

window.addEventListener("resize", () => {

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});