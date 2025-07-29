const carousel = document.getElementById("carousel");
const nextBtn = document.querySelector(".arrow-next");
const prevBtn = document.querySelector(".arrow-prev");
const cards = carousel.querySelectorAll(".card");
const wrapper = document.getElementById("carousel-wrapper");

const cardWidth = 360 + 14; // card + gap
const visibleCards = 4; // cards visíveis

// Clonar os primeiros e últimos cards para loop infinito
for (let i = 0; i < visibleCards; i++) {
  const firstClone = cards[i].cloneNode(true);
  const lastClone = cards[cards.length - 1 - i].cloneNode(true);
  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, carousel.firstChild);
}

let currentIndex = visibleCards; // começamos no primeiro card “real” (depois dos clones)

// Ajusta posição inicial
carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

// Bloquear cliques rápidos
let isMoving = false;

function moveToIndex(index) {
  if (isMoving) return;
  isMoving = true;
  carousel.style.transition = "transform 0.5s ease";
  carousel.style.transform = `translateX(${-cardWidth * index}px)`;
  currentIndex = index;
}

nextBtn.addEventListener("click", () => {
  moveToIndex(currentIndex + 1);
});

prevBtn.addEventListener("click", () => {
  moveToIndex(currentIndex - 1);
});

carousel.addEventListener("transitionend", () => {
  isMoving = false;
  if (currentIndex >= cards.length + visibleCards) {
    // ultrapassou clones do final -> resetar para real
    carousel.style.transition = "none";
    currentIndex = visibleCards;
    carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  if (currentIndex < visibleCards) {
    // ultrapassou clones do começo -> resetar para real final
    carousel.style.transition = "none";
    currentIndex = cards.length + visibleCards - 1;
    carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
});
