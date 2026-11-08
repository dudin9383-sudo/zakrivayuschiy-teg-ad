window.addEventListener('DOMContentLoaded', () => {
  const likeHeartArray = document.querySelectorAll('.like-icon');
  const likeButtonArray = document.querySelectorAll('.card__like-button');
  const iconButtonArray = document.querySelectorAll('.card__icon-button');

  iconButtonArray.forEach((iconButton, index) => {
    iconButton.onclick = () => {
      toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
    };
  });

  likeButtonArray.forEach((button, index) => {
    button.onclick = () => {
      toggleIsLiked(likeHeartArray[index], button);
    };
  });

  function toggleIsLiked(heart, button) {
    if (!heart || !button) return;
    heart.classList.toggle('is-liked');
    setButtonText(heart, button);
  }

  function setButtonText(heart, button) {
    const textElement = button.querySelector('.button__text');
    if (!textElement) return;

    if (heart.classList.contains('is-liked')) {
      setTimeout(() => {
        textElement.textContent = 'Unlike';
      }, 500);
    } else {
      setTimeout(() => {
        textElement.textContent = 'Like';
      }, 500);
    }
  }


  const saveButton = document.querySelector('.button-save');
  const closeButton = document.querySelector('.popup__close-button');
  const dialog = document.querySelector('#popup-dialog');

  if (saveButton && dialog) {
    saveButton.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
    });
  }

  if (closeButton && dialog) {
    closeButton.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.close();
    });
  }
});