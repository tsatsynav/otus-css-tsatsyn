const body = document.querySelector('.page');
const btnOpenModal = document.querySelector('.menu__button-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.modal__close-btn');

const handleModalSwitch = () => {
  modal.classList.toggle('modal-closed');
  body.classList.toggle('page__scroll-locked');
};

btnOpenModal.addEventListener('click', handleModalSwitch);

btnCloseModal.addEventListener('click', handleModalSwitch);
