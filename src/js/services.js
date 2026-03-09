document.addEventListener('DOMContentLoaded', () => {

    const servicesGrid = document.querySelector('.services__grid');

    async function loadServices() {
        try {
            const response = await fetch('/public/json/services.json');
            const data = await response.json();

            servicesGrid.innerHTML = '';

            data.forEach(item => {
                const serviceCard = `
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
                `;
                servicesGrid.insertAdjacentHTML('beforeend', serviceCard);
            });
        } catch (error) {
            console.error('Ошибка загрузки данных:', error);
            servicesGrid.innerHTML = '<p>Не удалось загрузить услуги :(</p>';
        }
    }

    loadServices();
});