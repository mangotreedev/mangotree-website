export const initFlippableCard = () => {

  const cards = document.querySelectorAll('.flipable-resource-card');

  cards.forEach((card) => {
    card.addEventListener('click', function () {
      card.classList.add('is-flipped');
    });
  });

}