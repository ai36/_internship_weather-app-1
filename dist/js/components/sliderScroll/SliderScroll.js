function sliderScroll() {
    const sliderList = document.querySelector('.slider-list');
    const chevronLeft = document.querySelector('.chevron:has(.chevron__icon--left)');
    const chevronRight = document.querySelector('.chevron:has(.chevron__icon--right)');

    function updateChevrons() {
        const scrollLeft = sliderList.scrollLeft;
        const scrollWidth = sliderList.scrollWidth;
        const clientWidth = sliderList.clientWidth;

        chevronLeft.disabled = scrollLeft === 0;
        chevronRight.disabled = scrollLeft + clientWidth >= scrollWidth;

    }

    sliderList.addEventListener('scroll', updateChevrons);

    chevronLeft.addEventListener('click', () => {
        sliderList.scrollBy({left: -sliderList.clientWidth});
        sliderList.scrollWidth
        
    });

    chevronRight.addEventListener('click', () => {
        sliderList.scrollBy({left: sliderList.clientWidth});
    });

    updateChevrons();
}

export default sliderScroll;