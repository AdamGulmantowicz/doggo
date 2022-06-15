import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');


const renderOption = function () {
    const select = document.getElementById('select');

    select.innerHTML = Object.keys(breedList.message).map(function (breed) {
        return `<option value="${breed}">${breed}</option>`
    }).join('')
}

const renderForm = function () {
    main.innerHTML = '<form id="dogForm"><select name="breed" id="select" form="dogs"></select><input type="submit" value="Submit"><br><label id="formLabel"></form>';
    renderOption();
}

renderForm();
const form = document.getElementById('dogForm');
const formLabel = document.getElementById('formLabel');


const findDogs = function () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectValue = select.options[select.selectedIndex].value;
        formLabel.innerHTML = `<h3>you choose ${selectValue} breed</h3>`
    })
}
findDogs();