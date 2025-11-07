// Typed.js animation
var typed = new Typed("#typed", {
  strings: ["Code. Create. Collaborate.", "Building the Future...", "Empowering Innovators."],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

// Particles.js background
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00d8ff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: { enable: true, color: "#00d8ff", opacity: 0.3 },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});