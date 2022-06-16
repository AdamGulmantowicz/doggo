import breedList from "../data/data.js";
const input = document.getElementById("raceType");
const formSelect = document.getElementById("formSelect");
const dogDisplay = document.getElementsByClassName("dogPhotos");
const submitButton = document.getElementById("submitButton");
const printedDogs = document.getElementById("main");
const breedAllList = JSON.parse(JSON.stringify(breedList));
const breedingList = JSON.parse(breedAllList.breedList);

const {
    message,
    status
} = breedingList;

const dogNames = Object.keys(message);
dogNames.forEach(el => input.innerHTML += `<option value="${el}">${el}</option>`);

function printingDogo(selectedDog) {
    const breedImages = JSON.parse(breedAllList.breedImages);
    for (const dog in breedImages) {
        if (dog === selectedDog) {
            for (const dogImage in breedImages[dog]) {
                printedDogs.innerHTML += `<img src="${breedImages[dog][dogImage]}" alt="${breedImages[dog]}" srcset="">`;
            }
        }
    }
}

formSelect.addEventListener("submit", e => {
    e.preventDefault();
    const selectedDog = input.value;
    printedDogs.innerHTML = ``;
    printingDogo(selectedDog);
})