// @ts-check
import Component from "./Component.js";

class Form extends Component {
  constructor({ fields = [], onSubmit, parent, ...rest }) {
    super({ parent, ...rest });

    this.state.fields = fields;
    this.state.onSubmit = onSubmit;

    this.render();
  }

  formData() {
    return new FormData(this.el);
  }

  componentDidMount() {
    this.el.addEventListener("submit", (event) => {
      event.preventDefault();
      this.state.onSubmit(this.formData());
    });
  }

  inputTemplate({ type = "text", placeholder = "", name = "" }) {
    return /* html */ `
      <input class="input" type="${type}" placeholder="${placeholder}" name="${name}">
    `;
  }

  selectTemplate({ options, name = "" }) {
    return /* html */ `
      <select class="input" name="${name}">
        ${options
          .map(
            (option) =>
              /* html */ `<option value="${option}">${option}</option>`
          )
          .join("")}
      </select>
    `;
  }

  findInputTemplate({ inputType = "text", ...rest }) {
    switch (inputType) {
      case "select":
        return this.selectTemplate(rest);
      default:
        return this.inputTemplate(rest);
    }
  }

  fieldTemplate({ label = "", ...rest }) {
    return /* html */ `
      <div class="field">
        <label>${label}</label>
        ${this.findInputTemplate(rest)}
      </div>
    `;
  }

  fieldsTemplate({ fields }) {
    return fields.map((field) => this.fieldTemplate(field)).join("");
  }

  formTemplate({ id, ...rest }) {
    return /* html */ `
      <form id="${id}">
        ${this.fieldsTemplate(rest)}
        <button class="btn" type="submit">Submit</button>
      </form>
    `;
  }

  template(params) {
    return /* html */ this.formTemplate(params);
  }
}

export default Form;

// class Form extends Component {
//   constructor({ fields = [], onSubmit, ...rest }) {
//     super(rest);

//     this.state = {
//       fields,
//       onSubmit,
//     };

//     this.render();
//   }

//   componentDidMount() {
//     this.formEl = this.root.querySelector(`form#${this.state.formId}`);
//     this.setupListeners();
//   }

//   setupListeners() {
//     this.formEl.addEventListener("submit", this.state.onSubmit);
//   }

//   formData() {
//     return new FormData(this.formEl);
//   }

//   inputTemplate({ name = "", id = "", inputType = "text" }) {
//     return /* html */ `
//       <input class="input" type="${inputType}" name="${name}" id="${id}">
//     `;
//   }

//   selectTemplate({ name = "", id = "", options = [] }) {
//     return /* html */ `
//       <select class="select" name="${name}" id="${id}">
//         ${this.collection(
//           options,
//           (option) => /* html */ `<option value="${option}">${option}</option>`
//         )}
//       </select>
//     `;
//   }

//   findInputTemplate({ type, ...rest }) {
//     switch (type) {
//       case "select":
//         return this.selectTemplate(rest);
//       default:
//         return this.inputTemplate(rest);
//     }
//   }

//   fieldTemplate({ label, ...rest }) {
//     return /* html */ `
//       <div class="field">
//         <label>${label}</label>
//         ${this.findInputTemplate(rest)}
//       </div>
//     `;
//   }

//   fieldsTemplate(fields) {
//     return this.collection(fields, (field) => this.fieldTemplate(field));
//   }

//   formTemplate({ fields, btnText = "Submit", id }) {
//     return /* html */ `
//       <form class="card" id="${id}">
//         ${this.fieldsTemplate(fields)}
//         <button type="submit" class="btn">${btnText}</button>
//       </form>
//     `;
//   }

//   template(state) {
//     return /* html */ this.formTemplate(state);
//   }
// }
