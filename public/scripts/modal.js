/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper');

  const cancelButton = document.querySelector('.button.cancel');
  cancelButton.addEventListener('click', close);

  function open() {
    modalWrapper.classList.add('active');
  }

  function close() {
    modalWrapper.classList.remove('active');
  }

  return { open, close };
}
