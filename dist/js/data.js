const weather = {
    "clear-sky": "Солнечно",
    "few-clouds": "Облачно с прояснениями",
    "scattered-clouds": "Переменная облачность",
    "broken-clouds": "Облачно",
    "shower-rain": "Ливень",
    "rain": "Дождь",
    "thunderstorm": "Гроза",
    "snow": "Снег",
    "mist": "Туман"
}

const details = [
    {
        title: "Влажность",
        icon: "img/icons32/humidity.svg",
        value: "75",
        unit: "%",
        progress: {
            type: "progress",
            min: 0,
            step: 1,
            max: 100
        },
        legend: [
            "0%",
            "100%",
        ],
    },
    {
        title: "Давление",
        icon: "img/icons32/barometr.svg",
        value: "761",
        unit: null,
        progress: {
            type: "pressure",
            min: 661,
            step: 1,
            max: 861
        },
        legend: "Повышенное",
    },
    {
        title: "Видимость",
        icon: "img/icons32/visibility.svg",
        value: "28",
        unit: "км",
        progress: {
            type: "progress",
            min: 0,
            step: 1,
            max: 100
        },
        legend: "Нормальная",
    },
    {
        title: "Рассвет",
        icon: "img/icons32/sunrise.svg",
        value: "8:42",
        unit: null,
        progress:
            null,
        legend: [
            "Прошло:&nbsp;",
            "02:47",
        ],
    },
    {
        title: "Закат",
        icon: "img/icons32/sunset.svg",
        value: "16:37",
        unit: null,
        progress:
            null,
        legend: [
            "Осталось:&nbsp;",
            "05:08",
        ],
    },
    {
        title: "Сила ветра",
        icon: "img/icons32/direction/north-west.svg",
        value: "2",
        unit: "м/с",
        progress:
            null,
        legend: "Северо-западный",
    },
];

const data24 = [
    {
        time: '12:00',
        key: 'broken-clouds',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-7°',
    },
    {
        time: '15:00',
        key: 'broken-clouds',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-5°',
    },
    {
        time: '18:00',
        key: 'broken-clouds',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-7°',
    },
    {
        time: '21:00',
        key: 'broken-clouds',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-9°',
    },
    {
        time: '0:00',
        key: 'broken-clouds',
        get icon() { return `night/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-11°',
    },
    {
        time: '3:00',
        key: 'broken-clouds',
        get icon() { return `night/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-7°',
    },
    {
        time: '6:00',
        key: 'broken-clouds',
        get icon() { return `night/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-7°',
    },
    {
        time: '9:00',
        key: 'broken-clouds',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: '-7°',
    },
];

const futureDates = [];
for(let i = 0; i <= 4; i++) {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i + 1);
    futureDates[i] = currentDate.toLocaleDateString(navigator.language, {weekday: 'short', day: 'numeric', month: 'short'});
}

const data5 = [
    {
        get time() { return futureDates[data5.indexOf(this)] },
        key: 'clear-sky',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: 'от -17° до -11°',
    },
    {
        get time() { return futureDates[data5.indexOf(this)] },
        key: 'clear-sky',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: 'от -16° до -8°',
    },
    {
        get time() { return futureDates[data5.indexOf(this)] },
        key: 'clear-sky',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: 'от -8° до -2°',
    },
    {
        get time() { return futureDates[data5.indexOf(this)] },
        key: 'clear-sky',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: 'от -8° до -2°',
    },
    {
        get time() { return futureDates[data5.indexOf(this)] },
        key: 'clear-sky',
        get icon() { return `day/${this.key}.svg` },
        get text() { return weather[this.key] },
        temp: 'от -8° до -2°',
    },
];

export default { details, data24, data5 };