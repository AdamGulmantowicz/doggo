import data from "../data/data.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const selectForm = document.querySelector(".mySelect");
// console.log(dogsList);
// console.log(dogsImages);


const findDogRase = function () {
  selectForm.innerHTML = Object.keys(dogsList.message).map(function (el) {
    return `<option value= "${el}" class="mySelect__rase"> ${el} </option>`;
  });
};
findDogRase();

const photoList = document.getElementById("photos");
selectForm.addEventListener("change", (e) => {
  e.preventDefault();
  const selectValue = selectForm[selectForm.selectedIndex].value;
  const imagesList = dogsImages[selectValue];
  console.log(imagesList);
  photoList.innerHTML = imagesList
    .map((img) => /* html */ `<li><img src="${img}" alt="Dog rase"/></li>`)
    .join(",");
});