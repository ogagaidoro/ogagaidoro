const hamburgerBtnElement = document.getElementById('hamburger');
const closeBtnElement = document.getElementById('close');
const modalElement = document.getElementById('modal')
const backdropElement = document.getElementById('backdrop')
const bodyElement = document.getElementById('body')

hamburgerBtnElement.addEventListener('click', openModal)
closeBtnElement.addEventListener('click', closeModal)
modalElement.addEventListener('click', jump)