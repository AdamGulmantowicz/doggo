// @ts-check
import uuid from "../helpers/uuid.js";

class Component {
  constructor({ parent, ...rest }) {
    this.parent = parent;
    this.id = `component-${uuid()}`;
    this.state = rest;
  }

  clear() {
    if (this.el) {
      this.el.remove();
    }
  }

  render() {
    this.clear();
    this.parent.insertAdjacentHTML(
      "beforeend",
      this.template({ ...this.state, id: this.id })
    );
    this.el = this.parent.querySelector(`#${this.id}`);

    this.componentDidMount();
  }

  componentDidMount() {}

  template({ id }) {
    return /* html */ ``;
  }
}

// class Component {
//   state = {};
//   constructor({ root }) {
//     this.root = root;
//     this.id = uuid();
//   }

//   template({}) {
//     return ``;
//   }

//   componentDidMount() {}

//   clear() {
//     if (!this.el) return;

//     this.el.remove();
//   }

//   render() {
//     this.clear();
//     this.root.insertAdjacentHTML("afterbegin", this.template(this.state));
//     this.el = this.root.querySelector(`#${this.state.id}`);

//     this.componentDidMount();
//   }

//   collection(list = [], handler = () => {}, join = "") {
//     return list.map(handler).join(join);
//   }

//   if(bool, tpl = "") {
//     return bool ? tpl : "";
//   }
// }

export default Component;
