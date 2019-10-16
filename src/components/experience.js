export class experienceWc extends HTMLElement {
  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML =`
      <exp-header></exp-header>
      <exp-navbar></exp-navbar>
      <exp-images-board></exp-images-board>
      <exp-banner></exp-banner>
      <exp-traval></exp-traval>
      <exp-affiliations></exp-affiliations>
      <exp-nearby></exp-nearby>
      <exp-offers></exp-offers>
      <exp-about></exp-about>
      <exp-contact></exp-contact>
      <exp-featured></exp-featured>
      <exp-footer></exp-footer>
    `;
  }
}