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
            <button class="btn like ${localStorage.getItem(`${path}`) ? "": "btn--secondary"}">❤️</butt>
        </div>`
    ).join('');
    favourites.innerHTML = `<button id="clearBtn" class="btn" type="submit">Clear Favourites</button>` +
        Object.keys(localStorage).map((path) => /*html*/
            `<div class="card mb-m">
            <img class="card__img" src="${path}">
        </div>`
        ).join('');
    Object.keys(localStorage).forEach(el => {
        favouritesSet.add(el)
    })




    const like = Array.from(document.querySelectorAll('.like'))


    const renderFavs = function () {
        favourites.innerHTML = `<button id="clearBtn" class="btn" type="submit">Clear Favourites</button>` +
            Array.from(favouritesSet).map((path) => /*html*/
                `<div class="card mb-m">
            <img class="card__img" src="${path}">
        </div>`
            ).join('');

        const clearBtn = document.getElementById('clearBtn');

        clearBtn.addEventListener('click', (e) => {
            localStorage.clear();
            console.log(favouritesSet);
            Array.from(favouritesSet).forEach(el => {
                favouritesSet.delete(`${el}`)
            })
            console.log(favouritesSet);
            like.forEach(el => {
                if (!el.classList.contains('btn--secondary')) {
                    el.classList.toggle('btn--secondary');
                }
            })
            favourites.innerHTML = `<button id="clearBtn" class="btn" type="submit">Clear Favourites</button>`
        })
    }
    renderFavs();
    like.forEach((element, i) => {
        element.addEventListener('click', function () {
            const currentImg = breedImages[selectValue][i];
            if (!favouritesSet.has(currentImg)) {
                element.classList.toggle('btn--secondary')
                favouritesSet.add(currentImg)
                localStorage.setItem(`${currentImg}`, `${currentImg}`);
                console.log(Object.keys(localStorage))
                renderFavs();
            } else {
                element.classList.toggle('btn--secondary')
                favouritesSet.delete(currentImg)
                localStorage.removeItem(`${currentImg}`);
                renderFavs()
            }
        })
    })
})