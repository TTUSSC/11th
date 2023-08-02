const navbarBurger = document.querySelector('#navBurger');
const navbarItem = document.querySelector('#navMain');

navbarBurger.addEventListener('click',()=>{
    navbarItem.classList.toggle('is-active');
})