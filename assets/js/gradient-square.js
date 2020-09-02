class GradientSquare extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["gradient", "active"];
  }

  get active() {
    if (
      !this.getAttribute("active") ||
      this.getAttribute("active") == "false"
    ) {
      return false;
    }
    return true;
  }

  get key() {
    return this.getAttribute("key");
  }

  get group() {
    return this.getAttribute("group");
  }

  classes() {
    const collection = this.data().classes;
    let html = "";

    for (const key in collection) {
      const data = collection[key];
      const class_html = key + this.toClass(data);

      html += " " + class_html;
    }
    return html;
  }

  toClass(obj) {
    let html = "";
    if (!this.isEmpty(obj["color"])) {
      html += `-${obj["color"]}`;
    }
    if (!this.isEmpty(obj["shade"])) {
      html += `-${obj["shade"]}`;
    }
    return html;
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  data() {
    return store.state[this.group][this.key];
  }

  renderRoot() {
    return `
    <div class="bg-gradient-to-${
      this.data().direction
    } flex items-center justify-center w-16 h-16 ${this.classes()} rounded" title="${
      this.title
    }">
      ${this.renderActive()}
    </div>
    `;
  }

  renderActive() {
    if (!this.active) return "";
    return `
    <div class="w-5 h-5 bg-gray-700 border-4 border-white rounded-full shadow"></div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.innerHTML = this.renderRoot();
    if (name == "active" && this.active) {
      store.setters.current(this);
    }
  }

  connectedCallback() {
    this.innerHTML = this.renderRoot();
    this.onClick();
  }

  onClick() {
    this.addEventListener("click", (e) => {
      const el = e.currentTarget;

      document.querySelectorAll("gradient-square").forEach((item) => {
        item.removeAttribute("active");
      });

      el.setAttribute("active", "true");
    });
  }
}

customElements.define("gradient-square", GradientSquare);