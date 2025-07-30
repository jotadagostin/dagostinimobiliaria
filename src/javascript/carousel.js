const carousel = document.getElementById("carousel");
const nextBtn = document.querySelector(".arrow-next");
const prevBtn = document.querySelector(".arrow-prev");
const cardWidth = 360 + 14;
const visibleCards = 4;

// Clonar os primeiros e últimos cards
const originalCards = Array.from(carousel.querySelectorAll(".card"));
for (let i = 0; i < visibleCards; i++) {
  const firstClone = originalCards[i].cloneNode(true);
  const lastClone = originalCards[originalCards.length - 1 - i].cloneNode(true);
  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, carousel.firstChild);
}

const allCards = carousel.querySelectorAll(".card");

let currentIndex = visibleCards;
carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

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
  if (currentIndex >= allCards.length - visibleCards * 2) {
    carousel.style.transition = "none";
    currentIndex = visibleCards;
    carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
  if (currentIndex < visibleCards) {
    carousel.style.transition = "none";
    currentIndex = allCards.length - visibleCards * 2;
    carousel.style.transform = `translateX(${-cardWidth * currentIndex}px)`;
  }
});
