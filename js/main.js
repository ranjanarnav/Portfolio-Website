// Navbar loader
fetch("/components/navbar.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("navbar-container");
    if (container) container.innerHTML = data;
  });


// Footer loader
fetch("/components/footer.html")
  .then(res => res.text())
  .then(data => {
    const container = document.getElementById("footer-container");
    if (container) container.innerHTML = data;
  });
async function loadComponent(id, file) {

  const res = await fetch(file);

  const data = await res.text();

  docugment.etElementById(id).innerHTML = data;

}


/* Load navbar */

loadComponent("navbar-container", "/components/navbar.html");


/* Load footer later */

loadComponent("footer-container", "/components/footer.html");

/* NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function () {

  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {

    navbar.classList.add(
      "bg-dark/80",
      "backdrop-blur-xl",
      "border-b",
      "border-border",
      "shadow-lg"
    );

  } else {

    navbar.classList.remove(
      "bg-dark/80",
      "backdrop-blur-xl",
      "border-b",
      "border-border",
      "shadow-lg"
    );

  }

});

// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 400) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".animate-on-scroll").forEach((el) => {

  gsap.fromTo(el,

    {
      opacity: 0,
      y: 40
    },

    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {

        trigger: el,

        start: "top 85%",

        toggleActions: "play none none none"

      }

    }

  );

});

// ===== contact & small UI helpers (append to js/main.js) =====
(() => {
  // safe guard: run only in browsers
  if (typeof window === 'undefined') return;

  // ---------- intersection reveal ----------
  const animateItems = document.querySelectorAll('[data-animate]');
  if (animateItems && animateItems.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          // optional: unobserve to avoid toggling
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    animateItems.forEach(i => io.observe(i));
  }

  // ---------- copy to clipboard + toast ----------
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('copy-toast');
  const toastText = document.getElementById('copy-toast-text');
  let toastTimer = null;

  function showToast(text = 'Copied') {
    if (!toast) return;
    toastText.textContent = text;
    toast.classList.add('show');
    // for nice effect: set transform from CSS
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0) scale(1)';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      toast.style.opacity = '';
      toast.style.transform = '';
    }, 1800);
  }

  function fallbackCopy(text) {
    // old fallback copy
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); showToast('Copied'); }
    catch (e) { showToast('Copy failed'); }
    document.body.removeChild(ta);
  }

  if (copyBtns && copyBtns.length) {
    copyBtns.forEach(btn => {
      btn.addEventListener('click', async (ev) => {
        const toCopy = btn.getAttribute('data-copy') || '';
        if (!toCopy) return;
        // try modern API
        try {
          await navigator.clipboard.writeText(toCopy);
          // small animation on the button
          btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(0.96)' }, { transform: 'scale(1)' }], { duration: 260, easing: 'ease-out' });
          showToast('Copied to clipboard');
        } catch (err) {
          fallbackCopy(toCopy);
        }
      });
    });
  }

  // ---------- small accessibility: press Enter on focused copy button ----------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement && document.activeElement.classList.contains('copy-btn')) {
      document.activeElement.click();
    }
  });

  // ---------- small safety: expose helpers for debugging ----------
  window.__contactUI = { showToast };

})();