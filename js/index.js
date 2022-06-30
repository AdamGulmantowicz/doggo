import data from "../data/data.js";
import inputFind from "../view/input.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const choice = document.getElementById("choice");
const photoList = document.getElementById("album");
const likedPhoto = document.getElementById("album-liked")

choice.innerHTML = inputFind();
const alertMessage = function () {
  return alert("This type of dog's not exsist! Try again.")
}

document.querySelector(".btn_search").addEventListener("click", function (e) {
  e.preventDefault();
  const lettersToMatch = document.querySelector(".search_input").value
  console.log(lettersToMatch);

  Object.keys(dogsList.message).forEach(element => {
    const name = String(element);

    if (name.startsWith(lettersToMatch)) {

      const imagesList = dogsImages[element]

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

      pickedDogs.forEach((el, i) => {
        el.addEventListener("click", function () {

          if (!el.classList.contains("liked")) {
            el.classList.toggle("liked");
            likedPhotoSet.add(`${dogsImages[element][i]}`)
            renderLiked()
          } else {
            el.classList.toggle("liked");
            likedPhotoSet.delete(`${dogsImages[element][i]}`)
            renderLiked()
          }
        })
      })
    } else {
      alertMessage()
    }
  });
});