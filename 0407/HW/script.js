const menu = document.querySelector('.navbar__menu');
const toggleBtn = document.querySelector('.navbar__toggleBtn');
const icons = document.querySelector('.navbar__icons');



toggleBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});