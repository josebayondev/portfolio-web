const scrollButton = document.getElementById('scrollBtn');

scrollButton.addEventListener('click', () => {
  window.scrollBy({
    top: window.innerHeight, // Scroll down by one viewport height
    behavior: 'smooth' // Smooth scrolling effect   
  })
});


const tieBreakLinks = document.querySelectorAll('.tie-break');

tieBreakLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    // Evita que se cree más de un popup a la vez
    if (document.getElementById('tie-break-toast')) return;

    const toast = document.createElement('div');
    toast.id = 'tie-break-toast';
    toast.textContent = '¡La función Tie Break está en desarrollo!';

    // Estilos del popup
    toast.style.position = 'fixed';
    toast.style.top = '50%';
    toast.style.left = '50%';
    toast.style.transform = 'translate(-50%, -50%)'; // Centrado total
    toast.style.backgroundColor = '#333';
    toast.style.color = '#fff';
    toast.style.padding = '10px 20px';
    toast.style.borderRadius = '8px';
    toast.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
    toast.style.zIndex = '1000';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';

    document.body.appendChild(toast);

    // Aparecer suavemente
    requestAnimationFrame(() => {
      toast.style.opacity = '1';
    });

    // Eliminar después de 2 segundos
    setTimeout(() => {
      setTimeout(() => {
        toast.remove();
      },);
    }, 2000);
  });
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll('.img-dog-share-app img').forEach(img => {
  img.addEventListener('click', () => {
    modal.classList.add('show');
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});
