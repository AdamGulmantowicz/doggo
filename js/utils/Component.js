import uuid from "../helpers/uuid.js";

export default class Component {
  state = {};
  constructor({ root }) {
    this.root = root;
    this.id = uuid();
  }

  template({}) {
    return ``;
  }

  componentDidMount() {}

  collection(list = [], handler = () => {}, join = "") {
    return list.map(handler).join(join);
  }

  if(bool, tpl = "") {
    return bool ? tpl : "";
  }

  clear() {
    if (!this.el) return;

    this.el.remove();
  }

  render() {
    this.clear();
    this.root.insertAdjacentHTML("afterbegin", this.template(this.state));
    this.el = this.root.querySelector(`#${this.state.id}`);

    this.componentDidMount();
  }
}
