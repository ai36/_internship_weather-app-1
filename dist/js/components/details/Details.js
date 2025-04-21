const renderDetailsItem = (item) => {
    let progress = ``;
    if (item.progress) {
        let inputRangeStep = 100 / (item.progress.max - item.progress.min);
        let inputRangeValue = (item.value - item.progress.min) * inputRangeStep;
        progress = `
        <div class="progress-bar-range-wrapper">
            <input class="progress-bar__range progress-bar__range--${item.progress.type}" type="range" value="${inputRangeValue}" min="0" max="100" step="${inputRangeStep}" disabled style="--x-range: ${inputRangeValue};">
        </div>`;
    }
    let legend = Array.isArray(item.legend) ? `<span>${item.legend[0]}</span> <span>${item.legend[1]}</span>` : `<span>${item.legend}</span>`;
    let val = /^(0?[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(item.value)
        ? `<time datetime="${item.value.length > 4 ? item.value : "0" + item.value}">${item.value}</time>`
        : `${item.value} ${item.unit ? item.unit : ""}`;
    return `
        <div class="value-box">
            <h3 class="value-box__title">${item.title}</h3>
            <img class="value-box__icon" src="${item.icon}" alt="${item.title} | Weather App">
            <span class="value-box__value">${val}</span>
        </div>
        <div class="progress-bar">
            ${progress}
            <div class="progress-bar-value">
                ${legend}
            </div>
        </div>
    `;
};

export default renderDetailsItem;
