import data from "../data/data.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const selectForm = document.querySelector(".mySelect");
console.log(dogsList);
console.log(dogsImages);

const findDogRase = function () {
  selectForm.innerHTML = Object.keys(dogsList.message).map(function (el) {
    return `<option value= "${el}" class="mySelect__rase"> ${el} </option>`
  })
}
findDogRase();

selectForm.addEventListener('change', (ra) => {
  const sel = selectForm[selectForm.selectedIndex].value;
  const str = dogsImages[sel];
  const insertMain = document.createElement("main");
  str.forEach(img => {
    insertMain.innerHTML = `<img src=${img}/>;`;
  });
});