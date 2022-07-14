import data from "../data/data.js";
import imgCard from "./components/card.js";
import renderForm from "./view/renderForm.js";
import renderGallery from "./view/renderGallery.js";

// const breedList = JSON.parse(data.breedList);
const breedImages = JSON.parse(data.breedImages);
const main = document.querySelector("main");
const header = document.querySelector("header");
export const favouritesSet = new Set();

function handleFormSubmit(e) {
  // tutaj odpalasz drugiego fetcha po zdjęcia rasy
  // ze zdjęciami z promise odpalasz renderGallery i elo
  e.preventDefault();
  const selectValue = select.options[select.selectedIndex].value;

  fetch(`https://dog.ceo/api/breed/${selectValue}/images`)
    .then((res) => {
      return res.json();
    })
    .then((path) => {
      renderGallery(path.message);
    });
}

fetch("https://dog.ceo/api/breeds/list/all")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    header.innerHTML = renderForm(data.message);
    // ustaw listenera tutaj
    const form = document.getElementById("dogForm");

    form.addEventListener("submit", handleFormSubmit);
  });
