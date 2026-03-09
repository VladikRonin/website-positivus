const track = document.querySelector('.partner');

// Создаем два ряда для анимации
if (window.innerWidth < 520 && track) {
//   const logos = Array.from(track.querySelectorAll('.partner__logo'));
//   const row1 = logos.slice(0, 3);
//   const row2 = logos.slice(3, 6);
  
//   // Очищаем и создаем два отдельных контейнера для анимации
//   track.innerHTML = `
//     <div class="partner__row row-top">${row1.map(l => l.outerHTML).join('')}${row1.map(l => l.outerHTML).join('')}</div>
//     <div class="partner__row row-bottom">${row2.map(l => l.outerHTML).join('')}${row2.map(l => l.outerHTML).join('')}</div>
//   `;

    const partnerRow = document.querySelector('.partner__row');

    if (partnerRow) {
        const clone = partnerRow.innerHTML;
        partnerRow.innerHTML = clone + clone;
    }
}

// НЕ ИСПОЛЬЗУЕТСЯ