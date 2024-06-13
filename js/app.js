
const signInBtn = document.getElementById('sign-up-btn');
const signUpBtn = document.getElementById('sign-in-btn');
const container = document.querySelector('.container');

signInBtn.addEventListener('click', () => container.classList.add('sign-in-mode'));

signUpBtn.addEventListener('click', () => container.classList.remove('sign-in-mode'));