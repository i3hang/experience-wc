//<app-hello></app-hello>

class AppHello extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Hello World</h1>`;
  }
}

window.customElements.define('app-hello', AppHello);