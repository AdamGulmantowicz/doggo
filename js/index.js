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
        `<div class="frame">
            <img class="frame__img" src="${path}">
            <div class="like ${favouritesSet.has(path) && "like--checked" ? "like--checked": ""}"></div>
        </div>`
    ).join('');

    const like = Array.from(document.querySelectorAll('.like'))
    const renderFavs = function () {
        favourites.innerHTML = Array.from(favouritesSet).map((path) => /*html*/
            `<div class="frame">
            <img class="frame__img" src="${path}">
        </div>`
        ).join('');
    }
    like.forEach((element, i) => {
        element.addEventListener('click', function () {
            if (!element.classList.contains('like--checked')) {
                element.classList.toggle('like--checked')
                favouritesSet.add(`${breedImages[selectValue][i]}`)
                renderFavs();
                console.log(favouritesSet)
            } else {
                element.classList.toggle('like--checked')
                favouritesSet.forEach(path => path === `${breedImages[selectValue][i]}` ? favouritesSet.delete(path) : path)
                renderFavs()
                console.log(favouritesSet)
            }
        })
    })
})