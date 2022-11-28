const iconsElement = document.querySelectorAll('.icon');
const questionsElement = document.querySelectorAll('.card__question');

iconsElement.forEach(icon =>
  icon.addEventListener('click', event => {
    event.target.classList.toggle('close');
    event.target.parentNode.nextElementSibling.classList.toggle('hide');
  })
);
questionsElement.forEach(icon =>
  icon.addEventListener('click', event => {
    event.target.nextElementSibling.classList.toggle('close');
    event.target.parentNode.nextElementSibling.classList.toggle('hide');
  })
);
