/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { Modal } from './modal.js';

const modal = Modal();

// Get all the buttons that exist with the check class
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach(button => {
  // Add listener
  button.addEventListener('click', handleModalClick);
});

// Grab all buttons when delete is clicked
const deleteButton = document.querySelectorAll('.actions .delete');

deleteButton.forEach(button => {
  // Add listener
  button.addEventListener('click', event => {
    handleModalClick(event, false);
  });
});

function handleModalClick(event, check = true) {
  event.preventDefault();

  const modalTitle = document.querySelector('.modal h2');
  const modalDescription = document.querySelector('.modal p');
  const modalButton = document.querySelector('.modal button');

  modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir pergunta';

  modalDescription.innerHTML = check
    ? 'Tem certeza que deseja marcar como lida esta pergunta?'
    : 'Tem certeza que deseja excluir esta perunta?';

  modalButton.innerHTML = check ? 'Sim, marcar' : 'Sim, excluir';

  // Color Button
  check
    ? modalButton.classList.remove('red')
    : modalButton.classList.add('red');

  // Open modal
  modal.open();

  /** ************* HANDLE SUBMIT ************** */
  const form = document.querySelector('.modal form');

  const roomId = document.querySelector('#room-id').dataset.id;
  const questionId = event.target.dataset.id;
  const slug = check ? 'check' : 'delete';

  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`);
}
