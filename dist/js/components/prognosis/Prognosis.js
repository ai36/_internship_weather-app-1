const renderPrognosisItem = (item) => {
    let time = `<time class="day-hour-weather__time" datetime="${item.time.length > 4 ? item.time : ("0" + item.time)}">${item.time.length > 4 ? item.time : ("0" + item.time)}</time>`;
    return `
        <div class="day-hour-weather">
            ${time}
            <img class="day-hour-weather__icon" src="img/icons100/${item.icon}" alt="${item.text}">
            <span class="day-hour-weather__value">${item.temp}</span>
        </div>
    `;
}

export default renderPrognosisItem;


