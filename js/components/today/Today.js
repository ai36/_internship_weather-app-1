const todayInfoLocationTime = document.querySelector(".today-info-location__time");
const todayInfoLocationDay = document.querySelector(".today-info-location__day");

function updateTimeAndDay() {
    const todayInfoLocationTimeValue = new Date().toTimeString().slice(0, 5);
    todayInfoLocationTime.textContent = todayInfoLocationTimeValue;
    todayInfoLocationTime.setAttribute("datetime", todayInfoLocationTimeValue); 
    todayInfoLocationDay.textContent = new Date().toLocaleDateString(navigator.language, {weekday: "long", day: "2-digit", month: "long"});
    todayInfoLocationDay.setAttribute("datetime", new Date().toISOString().split('T')[0]); 
}

export { updateTimeAndDay };