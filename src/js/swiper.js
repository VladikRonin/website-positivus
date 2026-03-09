import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function initTestimonialsSwiper() {

    const testimonialsSwiper = new Swiper('.testimonials-slider', {
    modules: [Navigation, Pagination],
    
    // Настройки поведения
    observer: true,             // следит за изменениями внутри слайдера
    observeParents: true,       // следит за изменениями родителей
    observeSlideChildren: true, // следит за содержимым слайдов
    loop: true,                 // Бесконечная прокрутка
    slidesPerView: 'auto',      // Ширина слайда берется из CSS (важно для обрезки краев)
    centeredSlides: true,       // Активный слайд по центру
    spaceBetween: 50,           // Отступ между слайдами

    // Пагинация (ЗВЕЗДЫ)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
        // Возвращаем HTML звездочки вместо точки
        return `
            <span class="${className}">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" fill="white"/>
                </svg>
            </span>
        `; 
        },
    },

    // Стрелки
    navigation: {
        nextEl: '.arrow-next',
        prevEl: '.arrow-prev',
    },
    });
};