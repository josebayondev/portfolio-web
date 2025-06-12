// Inicializamos AOS
AOS.init({
  duration: 1000,
  once: true
});

let currentIndex = 0;
const panels = document.querySelectorAll('.panel');
const scrollContainer = document.querySelector('.horizontal-scroll');
const maxIndex = panels.length - 1;
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (isScrolling) return;

  if (e.deltaY > 0 && currentIndex < maxIndex) {
    currentIndex++;
    scrollToPanel();
  } else if (e.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToPanel();
  }
});

function scrollToPanel() {
  isScrolling = true;
  scrollContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
  setTimeout(() => {
    isScrolling = false;
    // Actualizar AOS cada vez que cambiamos de sección
    AOS.refresh();
  }, 700);
}

// Navegación del nav fijo
const navLinks = document.querySelectorAll('.fixed-nav a');
navLinks.forEach((link, index) => {
  link.addEventListener('click', e => {
    e.preventDefault();
    currentIndex = index;
    scrollToPanel();
  });
});


const panel1 = document.getElementById('panel1');
const logoContainer = document.getElementById('logoContainer');

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.left >= 0 && rect.left < window.innerWidth;
}


// Escucha los clics en los enlaces con hash (#panelX)
document.querySelectorAll('a[href^="#panel"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const section = document.getElementById(targetId);
    if (section) {
      const index = Array.from(section.parentElement.children).indexOf(section);
      document.querySelector('.horizontal-scroll').style.transform = `translateX(-${index * 100}vw)`;
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  let hoverCount = 0;

  // Crear div contador
  const contadorDiv = document.createElement("div");
  contadorDiv.id = "hover-counter";
  contadorDiv.style.position = "fixed";
  contadorDiv.style.top = "20px";
  contadorDiv.style.right = "20px";
  contadorDiv.style.padding = "10px 20px";
  contadorDiv.style.background = "rgba(0, 0, 0, 0.7)";
  contadorDiv.style.color = "white";
  contadorDiv.style.fontSize = "1rem";
  contadorDiv.style.borderRadius = "10px";
  contadorDiv.style.zIndex = "999";
  contadorDiv.style.fontFamily = "Poppins, sans-serif";
  contadorDiv.textContent = `Hover: ${hoverCount}`;
  document.body.appendChild(contadorDiv);

  // Crear pop-up oculto
  const popup = document.createElement("div");
  popup.id = "hover-popup";
  popup.textContent = "¡Lo señalaste más de 5 veces!";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#1abc9c";
  popup.style.color = "white";
  popup.style.padding = "20px 40px";
  popup.style.borderRadius = "15px";
  popup.style.fontSize = "1.5rem";
  popup.style.fontWeight = "bold";
  popup.style.fontFamily = "Poppins, sans-serif";
  popup.style.boxShadow = "0 0 15px rgba(26, 188, 156, 0.7)";
  popup.style.zIndex = "10000";
  popup.style.display = "none";
  popup.style.cursor = "pointer";
  document.body.appendChild(popup);

  // Mostrar popup cuando hoverCount > 5
  const bounceText = document.querySelector(".bounce-text");

if (bounceText) {
  bounceText.addEventListener("mouseenter", () => {
    hoverCount++;
    contadorDiv.textContent = `Hover: ${hoverCount}`;

    if (hoverCount > 5) {
      popup.style.display = "block";

      setTimeout(() => {
        popup.style.display = "none";
      }, 2000);
    }
  });
}});

const face = document.getElementById("sleepyFace");

face.addEventListener("click", () => {
  face.classList.toggle("sleepy");
  face.classList.toggle("awake");
});