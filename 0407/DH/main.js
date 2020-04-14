const toggleBtn = document.querySelector('.toggle_btn');
const menu = document.querySelector('.menu_box');
const icons = document.querySelector('.sns_box');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
    icons.classList.toggle('active');
});