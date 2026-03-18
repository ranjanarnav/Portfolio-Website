gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power3.out",
  duration: 0.8
});


// HERO
gsap.fromTo(".hero-title",
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, delay: 0.2 }
);

gsap.fromTo(".hero-description",
  { opacity: 0, y: 30 },
  { opacity: 1, y: 0, delay: 0.4 }
);

gsap.fromTo(".hero-buttons",
  { opacity: 0, y: 20 },
  { opacity: 1, y: 0, delay: 0.6 }
);

gsap.fromTo(".terminal-glass",
  { opacity: 0, y: 50 },
  { opacity: 1, y: 0, delay: 0.5 }
);


// SECTION TITLES
gsap.utils.toArray(".section-title").forEach(el => {

  gsap.fromTo(el,

    { opacity: 0, y: 40 },

    {
      opacity: 1,
      y: 0,

      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true
      }

    }

  );

});


// BUILD CARDS
gsap.fromTo(".build-card",

  { opacity: 0, y: 50 },

  {
    opacity: 1,
    y: 0,
    stagger: 0.15,

    scrollTrigger: {
      trigger: "#what-i-build",
      start: "top 80%",
      once: true
    }

  }

);


// SKILLS
gsap.fromTo(".skill-card",

  { opacity: 0, y: 40 },

  {
    opacity: 1,
    y: 0,
    stagger: 0.1,

    scrollTrigger: {
      trigger: "#skills",
      start: "top 80%",
      once: true
    }

  }

);


// STACK
gsap.fromTo(".stack-card",

  { opacity: 0, y: 50 },

  {
    opacity: 1,
    y: 0,
    stagger: 0.15,

    scrollTrigger: {
      trigger: "#stack",
      start: "top 80%",
      once: true
    }

  }

);


// PROJECTS
gsap.fromTo(".project-card",

  { opacity: 0, y: 60 },

  {
    opacity: 1,
    y: 0,
    stagger: 0.2,

    scrollTrigger: {
      trigger: "#projects",
      start: "top 85%",
      once: true
    }

  }

);


// AWARDS
gsap.fromTo(".award-card",

  { opacity: 0, y: 50 },

  {
    opacity: 1,
    y: 0,
    stagger: 0.15,

    scrollTrigger: {
      trigger: "#awards",
      start: "top 85%",
      once: true
    }

  }

);


// CRITICAL FIX
ScrollTrigger.refresh();