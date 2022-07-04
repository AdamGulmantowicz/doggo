
import data from "../data/data.js";
import imgCard from "./components/card.js";

const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector('main');
const header = document.querySelector('header');
const favourites = document.getElementById('galleryFavourites');


function renderPage(renderContent) {
    header.innerHTML = renderContent;
}

const renderMain = function () {

    return /* html */ `
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
export const favouritesSet = new Set();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const selectValue = select.options[select.selectedIndex].value;
    const renderImg = breedImages[selectValue];
    const storageArr = JSON.parse(localStorage.getItem('favouritesImgs'));

    if(storageArr){
        storageArr.forEach(el => {
        favouritesSet.add(el)
        })
    }

    gallerySection.innerHTML = renderImg.map((path) =>
        imgCard(path)
    ).join('');


    const like = Array.from(document.querySelectorAll('.like'))
    const renderFavs = function () {
        favourites.innerHTML = `<button id="clearBtn" class="btn mb-l" type="submit">Clear Favourites</button>` +
            Array.from(favouritesSet).map((path) =>
                imgCard(path, false)
            ).join('');

        const clearBtn = document.getElementById('clearBtn');

        clearBtn.addEventListener('click', (e) => {
            localStorage.clear();
            Array.from(favouritesSet).forEach(el => {
                favouritesSet.delete(`${el}`)
            })
            like.forEach(el => {
                if (!el.classList.contains('btn--secondary')) {
                    el.classList.toggle('btn--secondary');
                }
            })
            favourites.innerHTML = `<button id="clearBtn" class="btn mb-l" type="submit">Clear Favourites</button>`
        })
    }
    renderFavs();

    like.forEach((element, i) => {
        element.addEventListener('click', function () {
            const currentImg = breedImages[selectValue][i];
            if (!favouritesSet.has(currentImg)) {
                element.classList.toggle('btn--secondary')
                favouritesSet.add(currentImg)
                localStorage.setItem(`favouritesImgs`, `${JSON.stringify(Array.from(favouritesSet))}`);
                renderFavs();
            } else {
                element.classList.toggle('btn--secondary')
                favouritesSet.delete(currentImg)
                localStorage.setItem(`favouritesImgs`, `${JSON.stringify(Array.from(favouritesSet))}`);
                renderFavs()
            }
        })
    })
})