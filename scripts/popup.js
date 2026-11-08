const saveButton = document.querySelector('.button-save');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');

if (saveButton && popup) {
  saveButton.addEventListener('click', () => {
    popup.showModal();
  });
}

if (closeButton && popup) {
  closeButton.addEventListener('click', () => {
    popup.close();
  });
}