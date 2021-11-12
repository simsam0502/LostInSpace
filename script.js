particlesJS("particles-js", {
  particles: {
    number: {
      value: 312,
      density: { enable: true, value_area: 961.4075005808503 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
    },
    size: {
      value: 4.005864585753543,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "bubble" },
      onclick: { enable: false, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: true
});

// Game Logic

const rocket = document.getElementById("rocket");
var x=0,y=0;

// Rocket Motion

window.addEventListener("keydown",(event)=>{
  const keyPressed = event.key;
  switch(keyPressed){
    case "ArrowUp": y+=25;
                    break;
    case "ArrowLeft": x-=50;
                      break;
    case "ArrowDown": y-=25;
                      break;
    case "ArrowRight": x+=50;              
  }
  rocket.style.left=x+'px';
  rocket.style.bottom=y+'px';
});

// Collision Detection



