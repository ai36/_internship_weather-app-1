function headerSearchInput2Console() {
    const headerSearchInput = document.querySelector(".header-search__input");
    headerSearchInput.addEventListener("input", () => console.log(headerSearchInput.value));
}

function headerSearchStopSubmit() {
    const headerSearchForm = document.querySelector(".header-search");
    headerSearchForm.addEventListener("submit", (event) => {
    event.preventDefault();
});
}

function headerSearchDoClear() {
    const cleanInputHandler = document.querySelector(".header-search-button__icon--close");
    const cleanInput = document.querySelector(".header-search__input");
    cleanInputHandler.addEventListener("click", () => cleanInput.value = "");
}

export { headerSearchInput2Console, headerSearchStopSubmit, headerSearchDoClear };