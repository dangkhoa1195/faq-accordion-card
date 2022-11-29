const iconsElement = document.querySelectorAll('.icon');
const questionsElement = document.querySelectorAll('.card__question');

iconsElement.forEach(icon =>
  icon.addEventListener('click', event => {
    const currentIcon = event.target;
    currentIcon.classList.toggle('close');
    currentIcon.parentNode.nextElementSibling.classList.toggle('hide');
    currentIcon.previousElementSibling.classList.toggle('font-weight-700');
  })
);
questionsElement.forEach(icon =>
  icon.addEventListener('click', event => {
    const currentQuestion = event.target;
    currentQuestion.nextElementSibling.classList.toggle('close');
    currentQuestion.parentNode.nextElementSibling.classList.toggle('hide');
    currentQuestion.classList.toggle('font-weight-700');
  })
);
