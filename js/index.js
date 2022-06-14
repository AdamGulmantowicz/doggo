import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');

const renderForm = function () {
    main.innerHTML = '<select name="breed" id="select" form="dogs"></select>';
}
renderForm();

const renderOption = function () {
    const select = document.getElementById('select');

    select.innerHTML = Object.keys(breedList.message).map(function (element) {
        return `<option value="${element}">${element}</option>`
    }).join('')
}
renderOption();