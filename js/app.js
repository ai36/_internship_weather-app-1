import data from './data.js';
import renderDetailsItem from './components/details/Details.js';
import renderPrognosisItem from './components/prognosis/Prognosis.js';
import { headerSearchInput2Console, headerSearchStopSubmit, headerSearchDoClear } from './components/searchForm/Search.js';
import { updateTimeAndDay } from './components/today/Today.js';
import sliderScroll from './components/sliderScroll/SliderScroll.js';


const todayDetailsItems = document.querySelectorAll('.today-details-item');
data.details.forEach((item, key) => {
    todayDetailsItems[key].innerHTML = renderDetailsItem(item);
});

function updateSlider() {
    const dataSet = document.querySelector(".slider__tab").getAttribute('aria-pressed') ? data.data24 : data.data5;

    const sliderListItems = document.querySelector('.slider-list');
    sliderListItems.innerHTML = "";
    dataSet.forEach((item) => {
        const sliderListItem = document.createElement('li');
        sliderListItem.classList.add('slider-list__item');
        sliderListItem.innerHTML = renderPrognosisItem(item);

        function timeDifferenceInMilliseconds(targetTime) {
            const now = new Date();
            const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
            const targetDate = new Date(now);
            targetDate.setHours(targetHours, targetMinutes, 0, 0);
            if(targetDate < now) {
                targetDate.setDate(targetDate.getDate() + 1);
            }
            return targetDate - now;
        }
        sliderListItem.style.order = timeDifferenceInMilliseconds(item.time);

        sliderListItems.appendChild(sliderListItem);
    });
}

headerSearchInput2Console();
headerSearchStopSubmit();
headerSearchDoClear();

updateTimeAndDay();
setInterval(() => {updateTimeAndDay()}, 1000);

updateSlider();

function switchTab() {
    window.addEventListener("click", (event) => {
        let elem = event.target;
        if (elem.classList.contains("slider__tab") && elem.ariaPressed !== "true") {
            let pressed = document.querySelector(".slider__tab[aria-pressed=true]");
            [elem.ariaPressed, pressed.ariaPressed] = [pressed.ariaPressed, elem.ariaPressed];
            document.querySelector('.slider-list').scrollTo(0,0);
        }

        updateSlider();
    });
}

switchTab();
sliderScroll();