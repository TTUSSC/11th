// navbar 手機導覽列開合控制
const mobileBurger = () => {
    const navbarBurger = document.querySelector('#navBurger');
    const navbarItem = document.querySelector('#navMain');

    navbarBurger.addEventListener('click', () => {
        navbarItem.classList.toggle('is-active');
    })
}
mobileBurger();