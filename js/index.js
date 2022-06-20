import data from "../data/data.js";

const dogsList = JSON.parse(data.breedList);
const dogsImages = JSON.parse(data.breedImages);
const selectForm = document.querySelector(".mySelect");
const likeContainer = document.getElementById("liked__photos");
const photoList = document.getElementById("photos");

const findDogRase = function () {
  selectForm.innerHTML = Object.keys(dogsList.message).map(function (el) {
    return `<option value= "${el}" class="mySelect__rase"> ${el} </option>`;
  });
};
findDogRase();

function addingPhoto() {

  selectForm.addEventListener("change", (e) => {
    e.preventDefault();
    const selectValue = selectForm[selectForm.selectedIndex].value;
    const imagesList = dogsImages[selectValue];
    photoList.innerHTML = imagesList.map((img) => /* html */ `<li class = "list__item"><img  class="photo" src="${img}" alt="Dog rase"/><button type="click" class="liked">Like</button></li>`)
      .join(",");

    selectPhoto();

  });
}
addingPhoto()




function selectPhoto() {
  const buttonLiked = Array.from(document.querySelectorAll(".liked"));
  buttonLiked.forEach(element => {
    element.addEventListener("click", function () {

      const initialText = "Like";
      const removingText = "Dislike";
      if (element.textContent.includes(initialText)) {
        element.textContent = removingText;
        const copiedImg = element.parentElement.cloneNode(true);
        element.parentElement.classList.add("hide");
        const set = new Set()
        set.add(copiedImg);
        for (const item of set) {
          likeContainer.appendChild(item);
          const buttonDisliked = document.querySelector(".liked");

          buttonDisliked.addEventListener("click", function () {
            if (buttonDisliked.textContent.includes(removingText)) {
              set.remove();
              element.parentElement.classList.remove("hide");

            } else null
          })

        }
      } else null

    })

  })
}