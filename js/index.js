import data from "../data/data.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const selectForm = document.querySelector(".mySelect");

const findDogRase = function () {
  selectForm.innerHTML = Object.keys(dogsList.message).map(function (el) {
    return `<option value= "${el}" class="mySelect__rase"> ${el} </option>`
  })
}
findDogRase();