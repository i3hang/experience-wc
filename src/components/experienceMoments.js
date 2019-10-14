export class experienceMoments extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({mode:'open'});
  }

  get text() {
    return this.getAttribute('text') || '';
  }

  get className() {
    return this.getAttribute('className') || '';
  }

  template() {
    this.root.innerHTML = `
      <h2 class="${this.className || ''}">${this.text || ''}</h2>
    `
  }

}

customElements.define('exp-moments', experienceMoments);