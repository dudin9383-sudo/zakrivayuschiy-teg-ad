const saveButton = document.querySelector('.button-save');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

saveButton.addEventListener('click', () => {
  popup.showModal();
});

closeButton.addEventListener('click', () => {
  popup.close();
});