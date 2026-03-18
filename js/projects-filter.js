// register plugin
gsap.registerPlugin(ScrollTrigger);


// ==========================
// INITIAL STATE FIX
// ==========================

// ensure cards are visible for layout
gsap.set(".project-card", {
  opacity: 1,
  y: 0,
  scale: 1
});


// ==========================
// FILTER SYSTEM (FIXED)
// ==========================

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(btn => {

  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    cards.forEach(card => {

      const category = card.dataset.category || "";

      if (filter === "all" || category.includes(filter)) {

        card.style.display = "block";

        gsap.fromTo(card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4
          }
        );

      } else {

        gsap.to(card, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.3,
          onComplete: () => {
            card.style.display = "none";
          }
        });

      }

    });

  });

});


// ==========================
// PAGE LOAD ANIMATION (SAFE)
// ==========================

window.addEventListener("load", () => {

  gsap.from(".section-title", {
    opacity: 0,
    y: 40,
    duration: 0.8
  });

  gsap.from(".filter-btn", {
    opacity: 0,
    y: 40,
    duration: 0.8
  });

  gsap.from(".project-card", {
    opacity: 0,
    y: 60,
    stagger: 0.15,
    duration: 0.8,
    clearProps: "all"
  });

});


// ==========================
// SCROLL ANIMATION (FIXED)
// ==========================

gsap.utils.toArray(".project-card").forEach(card => {

  gsap.from(card, {

    scrollTrigger: {
      trigger: card,
      start: "top 90%",
      toggleActions: "play none none none"
    },

    opacity: 0,
    y: 50,
    duration: 0.8,
    clearProps: "all"

  });

});


// refresh ScrollTrigger after everything loads
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});