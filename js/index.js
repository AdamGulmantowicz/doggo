import breedList from "../data/data.js";
const input = document.getElementById("rodzajRasy");
const breedAllList = JSON.parse(JSON.stringify(breedList));
const breedingList = JSON.parse(breedAllList.breedList);
const {message, status} = breedingList;
const dogNames = Object.keys(message);
dogNames.forEach(el => input.innerHTML +=`<option>${el}</option>`);
