import uuid from "../helpers/uuid.js";
import Component from "./Component.js";

class Form extends Component {
  constructor({ fields = [], onSubmit, ...rest }) {
    super(rest);

    this.state = {
      fields,
      onSubmit,
    };

    this.render();
  }

  componentDidMount() {
    this.formEl = this.root.querySelector(`form#${this.state.formId}`);
    this.setupListeners();
  }

  setupListeners() {
    this.formEl.addEventListener("submit", this.state.onSubmit);
  }

  formData() {
    return new FormData(this.formEl);
  }

  inputTemplate({ name = "", id = "", inputType = "text" }) {
    return /* html */ `
      <input class="input" type="${inputType}" name="${name}" id="${id}">
    `;
  }

  selectTemplate({ name = "", id = "", options = [] }) {
    return /* html */ `
      <select class="select" name="${name}" id="${id}">
        ${this.collection(
          options,
          (option) => /* html */ `<option value="${option}">${option}</option>`
        )}
      </select>
    `;
  }

  findInputTemplate({ type, ...rest }) {
    switch (type) {
      case "select":
        return this.selectTemplate(rest);
      default:
        return this.inputTemplate(rest);
    }
  }

  fieldTemplate({ label, ...rest }) {
    return /* html */ `
      <div class="field">
        <label>${label}</label>
        ${this.findInputTemplate(rest)}
      </div>
    `;
  }

  fieldsTemplate(fields) {
    return this.collection(fields, (field) => this.fieldTemplate(field));
  }

  formTemplate({ fields, btnText = "Submit", id }) {
    return /* html */ `
      <form class="card" id="${id}">
        ${this.fieldsTemplate(fields)}
        <button type="submit" class="btn">${btnText}</button>
      </form>
    `;
  }

  template(state) {
    return /* html */ this.formTemplate(state);
  }
}

export default Form;
