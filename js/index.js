import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');
const header = document.querySelector('header');


function renderPage(renderContent) {
    header.innerHTML = renderContent;
}

const renderMain = function () {

    return /*html*/ `
        <form id="dogForm">
            <select name="breed" id="select" form="dogs">
                ${Object.keys(breedList.message).map(function (breed) {
                    return `<option value="${breed}">${breed}</option>`
                }).join('')}
            </select>
            <input type="submit" value="Submit">
        </form>`;
}

renderPage(renderMain());


const form = document.getElementById('dogForm');
const gallerySection = document.getElementById('gallery')
console.log(gallerySection)

const renderImg = function () {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const selectValue = select.options[select.selectedIndex].value;
        const selectImg = breedImages[selectValue];
        console.log(selectImg)
        gallerySection.innerHTML = selectImg.map((path) => /*html*/
            `<div class="gallery__item">
                <img class="gallery__img" src="${path}">
            </div>`
        ).join('');
    })
}
renderImg();