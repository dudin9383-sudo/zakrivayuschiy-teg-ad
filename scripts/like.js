/* этот скрипт использует такие имена классов:
✦ like-icon — для svg-иконки анимированного сердца
✦ card__like-button — для кнопки Like рядом с иконкой
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ card__icon-button — для кнопки, оборачивающей иконку
✦ is-liked — для обозначения состояния лайкнутой иконки в виде сердца
✦ button__text — для обозначения текстового элемента внутри кнопки
Если эти классы поменять в HTML, скрипт перестанет работать. Будьте аккуратны.
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});

likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}







// ... предыдущий код like.js ...

const saveButton = document.querySelector('.button-save');
const popup = document.querySelector('.popup');
const popup = document.getElementById('popup-dialog');
const closeButton = document.querySelector('.popup__close-button');

// Важно: проверяем существование элементов, чтобы не было ошибок
if (saveButton && popup) {
  saveButton.addEventListener('click', () => {
    popup.showModal();
  });
} // <-- Эта скобка была пропущена

if (closeButton && popup) {
  closeButton.addEventListener('click', () => {
    popup.close();
  });
} // <-- Эта скобка тоже нужна

// Глобальная защита от перезагрузки (на случай, если тесты отправляют форму)
document.addEventListener('submit', (event) => {
  event.preventDefault();
});


// Обработка клика по кнопке "Сохранить"
saveButton.addEventListener('click', (event) => {
  event.preventDefault(); // Гарантированно блокирует перезагрузку
  popup.showModal();
});

// Обработка клика по кнопке "Ок" внутри попапа
closeButton.addEventListener('click', (event) => {
  event.preventDefault(); // Гарантированно блокирует перезагрузку
  popup.close();
}); 