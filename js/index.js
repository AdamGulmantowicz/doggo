import data from "../data/data.js";

const {
  breedImages
} = data;
const dogs = JSON.parse(breedImages);
const keys = Object.keys(dogs);


keys.forEach((key) => {
  var z = document.createElement("option");
  z.setAttribute("class", `"mySelect__rase"`)
  var t = document.createTextNode(`${key}`);
  z.appendChild(t);
  document.getElementById("mySelect").appendChild(z);
  const dog = document.querySelector(".mySelect__rase");

  // const rasePicture = document.querySelector(".mySelect");
  // rasePicture.addEventListener('change', function () {

  // })
});