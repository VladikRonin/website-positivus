import { initTestimonialsSwiper } from './swiper';

async function renderSection(jsonPath, containerSelector, templateRef) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    
    try {
        const response = await fetch(jsonPath);
        const data = await response.json();
        container.innerHTML = '';
        data.forEach(item => {
            const html = templateRef(item);
            container.insertAdjacentHTML('beforeend', html);
        });
    }
    
    catch (error) {
        console.error(`Ошибка загрузки данных из ${jsonPath}:`, error);
        container.innerHTML = '<p>Не удалось загрузить данные :(</p>';
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    const template = {
        services: (item) => `
          <article class="services__service-card service-card service-card--${item.bg}">
            <div class="service-card__info">
              <div class="service-card__text">
                <h3 class="service-card__title"><span class="service-card__span">${item.title}</span></h3>
                <a href="${item.link}" class="service-card__link">
                  <img class="service-card__link-icon" src="${item.linkIcon}" alt="Узнать больше">
                  <span class="service-card__link-span">Learn more</span>
                </a>
              </div>
              <img class="service-card__img" src="${item.img}" alt="Поисковая оптимизация">
              <img class="service-card__img service-card__img--mobile" src="${item.imgMobile}" alt="Поисковая оптимизация">
            </div>
          </article>
        `,
        process: (item) => `
          <article class="process__item">
            <div class="process__head">
              <div class="process__title-box">
                <h1>
                  <span class="process__number">${item.number}</span>
                </h1>
                <h2 class="process__name">${item.name}</h2>
              </div>
              <button class="process__toggle" aria-label="Показать/скрыть текст">
                <img src="./img/icons/process/process__icon-minus.svg" alt="Закрыть текст" class="process__icon-minus">
                <img src="./img/icons/process/process__icon-plus.svg" alt="Открыть текст" class="process__icon-plus">
              </button>
            </div>
            <div class="process__body">
              <div class="process__content">
                <p class="process__text">${item.text}</p>
              </div>
            </div>
          </article>
        `,
        team: (item) => `
          <li class="team__item">
            <article>
              <div class="team__information">
                <img src="${item.img}" loading="lazy" alt="Изображение пользователя" class="team__img">
                <div class="team__person">
                  <h3 class="team__name">${item.name}</h3>
                  <p class="team__post">${item.post}</p>
                </div>
                <a href="${item.link}" class="team__link" aria-label="Ссылка на LinkedIn">
                  <img src="./img/icons/team/team__linkedin-icon.svg" alt="Ссылка на LinkedIn" class="team__icon">
                </a>
              </div>
              <p class="team__portfolio">${item.portfolio}</p>
            </article>          
          </li>
        `,
        testimonials: (item) => `
          <article class="swiper-slide swiper-testimonials-slide">
            <div class="testimonials__review-card">
                <div class="review-card-text">${item.text}</div>
                <div class="review-card-author">
                  <p class="author-name">${item.name}</p>
                  <p class="author-role">${item.role}</p>
                </div>
            </div>
          </article>
        `
    };

    renderSection('./json/services.json', '.services__grid', template.services);
    renderSection('./json/process.json', '.process__accordion', template.process);
    renderSection('./json/team.json', '.team__list', template.team);
    await renderSection('./json/testimonials.json', '.swiper-wrapper', template.testimonials);

    initTestimonialsSwiper();
});