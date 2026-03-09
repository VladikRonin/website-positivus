document.addEventListener('click', (event) => {
    // Проверяем, что клик был по элементу аккордеона или внутри него
    const item = event.target.closest('.process__item');
    if (!item) return;

    const isOpen = item.classList.contains('active');
    const allItems = document.querySelectorAll('.process__item');

    // Закрываем все остальные открытые элементы
    allItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.process__body');
        if (otherBody) otherBody.style.maxHeight = null;
    });

    // Если текущий элемент не был открыт — открываем его
    if (!isOpen) {
        item.classList.add('active');
        const body = item.querySelector('.process__body');
        if (body) {
            body.style.maxHeight = body.scrollHeight + "px";
        }
    }
});