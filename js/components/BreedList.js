// @ts-check
import Component from "../utils/Component.js";

class BreedList extends Component {
  constructor({ breedImgs = [], parent, ...rest }) {
    super({ parent, ...rest });

    this.state.breedImgs = breedImgs;

    this.render();
  }

  template({ id, breedImgs }) {
    return /* html */ `
      <div class="gallery" id="${id}">
          ${
            breedImgs.length
              ? breedImgs
                  .map(
                    (img) => /* html */ `
                      <figure class="card">
                        <img class="card__img" src="${img}">
                        <button class="btn like">❤️</button>
                      </figure>
              `
                  )
                  .join("")
              : ""
          }
      </div>
    `;
  }
}

// class BreedList extends Component {
//   constructor({ breeds, favouriteHandler, root, ...rest }) {
//     super({ parent, ...rest });

//     this.favouriteHandler = favouriteHandler;
//     this.state.breeds = breeds;

//     this.render();
//   }

//   componentDidMount() {
//     [...this.el.querySelectorAll(".card .btn.like")].forEach((btn, id) =>
//       btn.addEventListener("click", (e) => {
//         e.preventDefault();
//         this.favouriteHandler(this.state.breeds[id]);
//       })
//     );
//   }

//   template({ breeds, id }) {
//     // console.log(id);
//     return /* html */ `
//       <div class="gallery" id="${id}">
//         ${this.if(
//           breeds.length,
//           this.collection(
//             breeds,
//             (img) => /* html */ `
//               <figure class="card">
//                 <img class="card__img" src="${img}">
//                 <button class="btn like">❤️</button>
//               </figure>
//             `
//           )
//         )}
//       </div>
//     `;
//   }
// }

export default BreedList;
