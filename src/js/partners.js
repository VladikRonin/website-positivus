const track = document.querySelector('.partner');

if (window.innerWidth < 520 && track) {

    const partnerRow = document.querySelector('.partner__row');

    if (partnerRow) {
        const clone = partnerRow.innerHTML;
        partnerRow.innerHTML = clone + clone;
    }
}