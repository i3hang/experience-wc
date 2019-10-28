export class experienceAbout extends HTMLElement {

  constructor() {
    super();
    this.template();

    this.aboutDiv = this.querySelector('.text-about');
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
    if(this._text) {
      this.aboutDiv.innerHTML = text;
    }
  }

  template() {
    this.innerHTML = `
      <div class="exp-about">
        <div class="map-about">

        </div>
        <div class="about">
          <p class="title">About</p>
          <div class="text-about">
          </div>
        </div>
      </div>
    `;
  }

}