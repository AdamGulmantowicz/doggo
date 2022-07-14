import { favouritesSet } from "../index.js";

export default function imgCard(path, hasBtn = true) {
  return /* html */ `
    <div class="card mb-m">
        <figure class="card__img"><img src="${path}" alt=""></figure>
        ${
          hasBtn
            ? /* html */ `<button class="btn like ${
                favouritesSet.has(`${path}`) ? "" : "btn--secondary"
              }" data-path="${path}">❤️</button>`
            : ""
        }
    </div>`;
}
