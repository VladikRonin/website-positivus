document.addEventListener('DOMContentLoaded', () => {

    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__burger-menu');
    const main = document.querySelector('.main');
    const html = document.documentElement;
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        main.classList.toggle('lock');

        document.body.classList.toggle('lock');
        html.classList.toggle('lock');
    });

    const selectors = ['.burger-menu__list', '.header__inner'];

    // Функция-обработчик
    const preventScroll = (e) => {
        e.preventDefault();
    };

    // Проходимся по списку и вешаем событие только на существующие элементы
    selectors.forEach(selector => {
        const element = document.querySelector(selector);
        if (element) {
            element.addEventListener('touchmove', preventScroll, { passive: false });
        }
    });
});
