import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');

function renderPage(renderContent) {
    main.innerHTML = renderContent;
}

const renderForm = function () {

    return `<form id="dogForm">
            <select name="breed" id="select" form="dogs">
            ${Object.keys(breedList.message).map(function (breed) {
                return `<option value="${breed}">${breed}</option>`
            }).join('')}
            </select>
            <input type="submit" value="Submit">
            </form>`;
}

renderPage(renderForm())

const form = document.getElementById('dogForm');


const renderImg = function () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectValue = select.options[select.selectedIndex].value;
        main.innerHTML = `<section class="gallery">
                        ${Object.keys(breedImages.selectValue).map(function (path) {
                            return `<img src="${path}"></img>`
                        }).join('')}
                        </section>`
    })
}
renderImg();