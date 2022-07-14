// @ts-check

import imgCard from "../components/card.js";
import { favouritesSet } from "../index.js";
const favourites = document.getElementById("galleryFavourites");

export default async function renderGallery(photos) {
  const storageArr = JSON.parse(localStorage.getItem("favouritesImgs"));
  const gallerySection = document.getElementById("gallery");

  if (storageArr) {
    storageArr.forEach((el) => {
      favouritesSet.add(el);
    });
  }

  gallerySection.innerHTML = photos.map((path) => imgCard(path)).join("");

  const like = Array.from(document.querySelectorAll(".like"));
  const renderFavs = function () {
    favourites.innerHTML =
      `<button id="clearBtn" class="btn mb-l" type="submit">Clear Favourites</button>` +
      Array.from(favouritesSet)
        .map((path) => imgCard(path, false))
        .join("");

    const clearBtn = document.getElementById("clearBtn");

    clearBtn.addEventListener("click", (e) => {
      localStorage.clear();
      Array.from(favouritesSet).forEach((el) => {
        favouritesSet.delete(`${el}`);
      });
      like.forEach((el) => {
        if (!el.classList.contains("btn--secondary")) {
          el.classList.toggle("btn--secondary");
        }
      });
      favourites.innerHTML = `<button id="clearBtn" class="btn mb-l" type="submit">Clear Favourites</button>`;
    });
  };
  renderFavs();

  like.forEach((element, i) => {
    element.addEventListener("click", function () {
      const currentImg = element.getAttribute("data-path");
      if (!favouritesSet.has(currentImg)) {
        element.classList.toggle("btn--secondary");
        favouritesSet.add(currentImg);
        localStorage.setItem(
          `favouritesImgs`,
          `${JSON.stringify(Array.from(favouritesSet))}`
        );
        renderFavs();
      } else {
        element.classList.toggle("btn--secondary");
        favouritesSet.delete(currentImg);
        localStorage.setItem(
          `favouritesImgs`,
          `${JSON.stringify(Array.from(favouritesSet))}`
        );
        renderFavs();
      }
    });
  });
}
