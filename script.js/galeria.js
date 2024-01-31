//galeria de bicicleta

const galeria = document.querySelectorAll(".bicicletas-img img");
const galeriaContainer = document.querySelector(".bicicletas-img");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px").matches;
  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventosGaleria);
