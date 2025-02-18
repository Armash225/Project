const hiddenMenuBtn = document.querySelector('.Menu--nav');
const hiddenMenu = document.querySelector('.hidden--menu');
const menuArrow = document.getElementById('Menu--arrow');

hiddenMenuBtn.addEventListener('click', () => {
    menuArrow.classList.toggle('Menu--arrow-clicked');
    hiddenMenu.classList.toggle('show--menu');
})


window.addEventListener('click', (event)=> {
    if (hiddenMenu.classList.contains('show--menu') && menuArrow.classList.contains('Menu--arrow-clicked') && event.target !== hiddenMenuBtn && event.target !== hiddenMenu) {
        hiddenMenu.classList.remove('show--menu');
        menuArrow.classList.remove('Menu--arrow-clicked');
    }
})

