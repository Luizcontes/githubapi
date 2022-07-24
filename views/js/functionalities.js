const lightbox = document.getElementById('lightbox');
const logo = document.getElementById('logo')
logo.addEventListener('click', () => turnLightbox())

const turnLightbox = () => {
    lightbox.classList.toggle('lightbox-hidden');
    lightbox.classList.toggle('lightbox');
}

const body = document.getElementById('body');
const card = document.getElementById('card')

body.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target.matches('#close') || e.target.matches('#lightbox')) {
        lightbox.classList.toggle('lightbox-out');
        setTimeout(() => {
            lightbox.classList.toggle('lightbox-out');
            lightbox.classList.toggle('lightbox-hidden');
            lightbox.classList.toggle('lightbox')
        }, 1000);
    }
    if (e.target.matches('#close2')) {
        card.classList.add('hidden')
    }
});

function cardClick() {
    card.classList.remove('hidden')
}

const sideMenu = document.getElementById('side-menu')
const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    sideMenu.classList.toggle('active')
})

setTimeout(turnLightbox, 1000);