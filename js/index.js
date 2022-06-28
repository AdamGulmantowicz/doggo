import data from "../data/data.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');
const header = document.querySelector('header');
const favourites = document.getElementById('galleryFavourites');


function renderPage(renderContent) {
    header.innerHTML = renderContent;
}

const renderMain = function () {

    return /*html*/ `
    <form class="card mb-l" id="dogForm">
        <h1 class='h3'>Choose breed</h1>
            <div class="field">
                <label>Breed</label>
                <select class="select" name="breed" id="select" form="dogs">
                    ${Object.keys(breedList.message).map(function (breed) {
                        return `<option value="${breed}">${breed}</option>`
                    }).join('')}
                </select>
            </div>
            <button class="btn" type="submit">Submit</button>
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
        `<div class="card mb-m">
            <img class="card__img" src="${path}">
            <button class="btn like ${favouritesSet.has(path) ? "": "btn--secondary"}">❤️</butt>
        </div>`
    ).join('');

    const like = Array.from(document.querySelectorAll('.like'))
    const renderFavs = function () {
        favourites.innerHTML = Array.from(favouritesSet).map((path) => /*html*/
            `<div class="card mb-m">
            <img class="card__img" src="${path}">
        </div>`
        ).join('');
    }
    like.forEach((element, i) => {
        element.addEventListener('click', function () {
            const currentImg = breedImages[selectValue][i];
            if (!favouritesSet.has(currentImg)) {
                element.classList.toggle('btn--secondary')
                favouritesSet.add(currentImg)
                renderFavs();
            } else {
                element.classList.toggle('btn--secondary')
                favouritesSet.delete(currentImg)
                renderFavs()
            }
        })
    })
})