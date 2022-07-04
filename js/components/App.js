// @ts-check
import Component from "../utils/Component.js";
import Form from "../utils/Form.js";
import data from "./../../data/data.js";
import BreedList from "./BreedList.js";

const { breedList: unparsedData, breedImages: unparsedImages } = data;

const breedList = Object.keys(JSON.parse(unparsedData).message);
const breedImages = JSON.parse(unparsedImages);

class App extends Component {
  constructor(params) {
    super(params);

    this.state.favouritesList = new Set();

    this.render();
  }

  onBreedsSubmit(formData) {
    const breed = formData.get("breed");

    if (!breed) return;

    this.state.breedsList.state.breedImgs = breedImages[breed];
    this.state.breedsList.render();
  }

  componentDidMount() {
    const headerEl = this.el.querySelector("#header");
    const mainEl = this.el.querySelector("#main");

    this.state.breedsForm = new Form({
      parent: headerEl,
      fields: [
        {
          inputType: "select",
          options: breedList,
          label: "Breed",
          name: "breed",
        },
      ],
      onSubmit: this.onBreedsSubmit.bind(this),
    });

    this.state.breedsList = new BreedList({
      parent: mainEl,
      breedImgs: [],
    });
  }

  template({ id }) {
    return /* html */ `
      <div id="${id}">
        <header id="header" class="header">To mój header</header>
        <main id="main" class="main">To mój main</main>
      </div>
    `;
  }
}

// class App extends Component {
//   constructor(rest) {
//     super(rest);

//     this.state.favouritesList = new Set();
//     this.render();
//   }

//   componentDidMount() {
//     const header = this.parent.querySelector("#header");
//     const main = this.parent.querySelector("#main");
//     this.form = new Form({
//       fields: [
//         { label: "Breed", type: "select", options: breedList, name: "breed" },
//       ],
//       onSubmit: this.submitBreedForm.bind(this),
//       parent: header,
//     });

//     this.breedsList = new BreedList({
//       parent: main,
//       breeds: [],
//       favouriteHandler: this.favouriteHandler.bind(this),
//     });

//     this.favouriteList = new BreedList({
//       parent: main,
//       breeds: [],
//       favouriteHandler: this.favouriteHandler.bind(this),
//     });
//   }

//   submitBreedForm(e) {
//     e.preventDefault();

//     const formData = this.form?.formData();

//     if (!formData) return;

//     const selectedBreed = formData.get("breed")?.toString();

//     if (!this.breedsList || !selectedBreed) return;
//     this.breedsList.state.breeds = breedImages[selectedBreed];
//     this.breedsList.render();
//   }

//   favouriteHandler(breed) {
//     if (this.state.favouritesList.has(breed)) {
//       this.state.favouritesList.add(breed);
//     } else {
//       this.state.favouritesList.delete(breed);
//     }
//     // console.log(breed);

//     if (!this.favouriteList) return;
//     this.favouriteList.state.breeds = Array.from(this.state.favouritesList);
//     this.favouriteList.render();
//   }

//   template = (state) => /* html */ `
//     <header id="header" class="header"></header>
//     <main id="main" class="main"></main>
//   `;
// }

export default App;
