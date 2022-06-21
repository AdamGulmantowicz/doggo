import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');

function renderPage(renderContent) {
    main.innerHTML = renderContent;
}

const renderMain = function () {

    return `<form id="dogForm">
            <select name="breed" id="select" form="dogs">
            ${Object.keys(breedList.message).map(function (breed) {
                return `<option value="${breed}">${breed}</option>`
            }).join('')}
            </select>
            <input type="submit" value="Submit">
            </form>
            <section class="gallery">
            </section>`
            ;
}

renderPage(renderMain());

const form = document.getElementById('dogForm');


const renderImg = function () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectValue = select.options[select.selectedIndex].value;
        const selectImg =  breedImages[selectValue];
        const gallerySection = document.querySelector('gallery')
        selectImg.forEach(path => {
            gallerySection.innerHTML = `<img src=${path}>`
        })
    })
}
renderImg();