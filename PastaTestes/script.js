let currentIndex = 0;

function showCard(index) {
  const carousel = document.querySelector('.carousel');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth;

  currentIndex = index;

  const translateValue = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${translateValue}px)`;
}

function nextCard() {
  const cards = document.querySelectorAll('.card');
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showCard(currentIndex);
}

function prevCard() {
  const cards = document.querySelectorAll('.card');
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  showCard(currentIndex);
}

// Mostrar o primeiro card ao carregar a página
showCard(currentIndex);
