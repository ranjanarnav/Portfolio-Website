// register plugin
gsap.registerPlugin(ScrollTrigger);


// =======================
// PAGE LOAD ANIMATION
// =======================

gsap.set("body", { opacity: 1 });

gsap.from(".section-pill", {
  opacity: 0,
  y: 20,
  duration: 0.6
});

gsap.from("h1", {
  opacity: 0,
  y: 40,
  duration: 0.8,
  delay: 0.1
});


// =======================
// SCROLL ANIMATION
// =======================

gsap.utils.toArray(".contact-card").forEach(card => {

  gsap.from(card, {

    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },

    opacity: 0,
    y: 40,
    duration: 0.6

  });

});


// =======================
// ICON POP ANIMATION
// =======================

document.querySelectorAll(".contact-card").forEach(card => {

  card.addEventListener("mouseenter", () => {

    gsap.to(card.querySelector(".contact-icon"), {
      scale: 1.2,
      duration: 0.3
    });

  });

  card.addEventListener("mouseleave", () => {

    gsap.to(card.querySelector(".contact-icon"), {
      scale: 1,
      duration: 0.3
    });

  });

});


// =======================
// COPY BUTTON ANIMATION
// =======================

document.querySelectorAll(".copy-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const text = btn.dataset.copy;

    navigator.clipboard.writeText(text);

    // animation
    gsap.to(btn, {
      scale: 0.85,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });

    // change icon temporarily
    const icon = btn.querySelector("i");

    icon.classList.remove("fa-copy");
    icon.classList.add("fa-check");

    setTimeout(() => {
      icon.classList.remove("fa-check");
      icon.classList.add("fa-copy");
    }, 1500);

  });

});


// =======================
// CARD HOVER GLOW ANIMATION
// =======================

document.querySelectorAll(".contact-card").forEach(card => {

  card.addEventListener("mouseenter", () => {

    gsap.to(card, {
      boxShadow: "0 0 30px rgba(34,197,94,0.25)",
      duration: 0.3
    });

  });

  card.addEventListener("mouseleave", () => {

    gsap.to(card, {
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      duration: 0.3
    });

  });

});