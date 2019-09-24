class experienceBanner extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  get banner() {
    return this.getAttribute('banner');
  }

  get link() {
    return this.getAttribute('link') || '#';
  }

  template() {
    this.innerHTML = `
      <div class="exp-banner">
        <a href="${this.link}" target="_blank">
          <img src="${this.banner}">
        </a>
      </div>
    `;
  }

}

customElements.define('exp-banner', experienceBanner);