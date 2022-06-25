import data from "../data/data.js";
import choiceForm from "../view/form.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const choice = document.getElementById("choice");
const photoList = document.getElementById("album");
const likedPhoto = document.getElementById("album-liked")


choice.innerHTML = choiceForm(dogsList);

const form = document.getElementById("selectForm");
const select = document.getElementById("selected");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectValue = select.options[select.selectedIndex].value;
  const imagesList = dogsImages[selectValue];
  const likedPhotoSet = new Set();

  photoList.innerHTML = imagesList.map((img) => /* html */ `
      <div class = "album-item">
        <img  class="photo" src="${img}" alt="Dog rase"/>
        <div  class="picked"></div>
      </div>`).join('');

  const renderLiked = function () {
    likedPhoto.innerHTML = [...likedPhotoSet].map((img) => /*html*/
      `<div class="album-item">
            <img class="album__img" src="${img}">
        </div>`
    ).join('');
  }

  renderLiked(imagesList)

  const pickedDogs = [...document.querySelectorAll(".picked")];

  pickedDogs.forEach((element, i) => {
    element.addEventListener("click", function () {

      if (!element.classList.contains("liked")) {
        element.classList.toggle("liked");
        likedPhotoSet.add(`${dogsImages[selectValue][i]}`)
        renderLiked()
      } else {
        element.classList.toggle("liked");
        likedPhotoSet.delete(`${dogsImages[selectValue][i]}`)
        renderLiked()
      }
    })
  })
})