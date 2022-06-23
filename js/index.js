import data from "../data/data.js";
// import Form from "../view/form.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const choice = document.getElementById("choice");
const photoList = document.getElementById("album");
const likedPhoto = document.getElementById("album-liked")



function choiceForm() {
  return /*html*/ `
  <form id="dogForm"> 
   <select id="select" name="choice-dog">
        ${Object.keys(dogsList.message).map(function (el) {
        return /*HTML*/ ` <option value = "${el}" class = "selected__rase"> ${el} </option>` 
      }).join(" ")}
      </select>
      <input type="submit" class="input" value="Submit">

  </form>`
}

choice.innerHTML = choiceForm();



const form = document.getElementById("dogForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const selectValue = select.options[select.selectedIndex].value;
  const imagesList = dogsImages[selectValue];

  photoList.innerHTML = imagesList.map((img) => /* html */ `
      <div class = "album-item">
        <img  class="photo" src="${img}" alt="Dog rase"/>
        <div  class="picked"></div>
      </div>`).join('');
});


const pickedDogs = Array.from(document.querySelectorAll(".picked"));
console.log(pickedDogs);

pickedDogs.forEach(element => {
  element.addEventListener("click", function () {

    element.classList.toggle("liked");


  })
})