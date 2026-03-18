const dot = document.querySelector(".cursor-dot");
const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let glowX = 0;
let glowY = 0;


// track mouse

document.addEventListener("mousemove", (e) => {

  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.transform =
    `translate(${mouseX}px, ${mouseY}px)`;

});


// smooth glow follow

function animateGlow() {

  glowX += (mouseX - glowX) * 0.12;
  glowY += (mouseY - glowY) * 0.12;

  glow.style.transform =
    `translate(${glowX - 17}px, ${glowY - 17}px)`;

  requestAnimationFrame(animateGlow);

}

animateGlow();


// hover detection

const hoverElements = document.querySelectorAll(
  "a, button, .project-card, .build-card, .skill-card, .stack-card"
);

hoverElements.forEach(el => {

  el.addEventListener("mouseenter", () => {

    glow.classList.add("cursor-hover");

  });

  el.addEventListener("mouseleave", () => {

    glow.classList.remove("cursor-hover");

  });

});