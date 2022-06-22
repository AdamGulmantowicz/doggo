import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');
const header = document.querySelector('header');
const favourites = document.getElementById('favourites');


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
const favouritesSet = new Set();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectValue = select.options[select.selectedIndex].value;
    const renderImg = breedImages[selectValue];
    gallerySection.innerHTML = renderImg.map((path) => /*html*/
        `<div class="gallery__item">
            <img class="gallery__img" src="${path}">
            <div class="like"></div>
        </div>`
    ).join('');

    const like = Array.from(document.querySelectorAll('.like'))
    like.forEach(element => {
        element.addEventListener('click', function () {
            element.classList.toggle('like--checked')
            if (!element.classList.contains('like--checked')) {
                favouritesSet.add(element.parentElement.outerHTML);
            }
        })
    })

})