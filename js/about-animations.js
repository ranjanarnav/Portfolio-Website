gsap.registerPlugin(ScrollTrigger);


// ================= HERO =================

gsap.from(".about-title", {
  opacity: 0,
  y: 60,
  duration: 1
});

gsap.from(".about-subtitle", {
  opacity: 0,
  y: 40,
  delay: 0.2,
  duration: 1
});


// ================= STORY =================

gsap.from(".story-text", {

  scrollTrigger: {
    trigger: ".about-story",
    start: "top 80%"
  },

  opacity: 0,
  y: 50,
  duration: 1

});


// ================= TIMELINE LINE =================

gsap.from(".timeline", {

  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%"
  },

  opacity: 0,
  duration: 1

});


// ================= TIMELINE ITEMS =================

gsap.utils.toArray(".timeline-item").forEach((item, i) => {

  gsap.from(item, {

    scrollTrigger: {
      trigger: item,
      start: "top 85%"
    },

    opacity: 0,
    y: 80,
    duration: 0.8,
    delay: i * 0.15

  });

});


// ================= STATS COUNTER =================

gsap.utils.toArray(".stat-number").forEach(stat => {

  let value = stat.getAttribute("data-count");

  gsap.to(stat, {

    scrollTrigger: {
      trigger: stat,
      start: "top 90%"
    },

    innerText: value,
    duration: 2,
    snap: { innerText: 1 },

    onUpdate: function () {

      stat.innerText = Math.floor(stat.innerText);

    }

  });

});


// ================= FADE SECTIONS =================

gsap.utils.toArray("section").forEach(section => {

  gsap.from(section, {

    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    },

    opacity: 0,
    y: 40,
    duration: 0.8

  });

});