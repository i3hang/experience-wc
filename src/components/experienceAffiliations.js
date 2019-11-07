import experLogo01 from "../assets/images/exper-logo-01.png";
import experLogo02 from "../assets/images/exper-logo-02.png";
export class experienceAffiliations extends HTMLElement {

  constructor() {
    super();
    this.template();

    this.affiliationsData = this.querySelector(".affiliations");
  }

  set affiliations(data) {
    this._affiliations = data;
    if (data) {
      this.affiliationsData.innerHTML = data.map(affiliationsData => `
        <li>
          <a href="#">
            <img src="${affiliationsData.logoUrl}" alt="exper-logo">
          </a>
        </li>
      `).join('');
    }
  }

  template() {
    this.innerHTML = `
      <div class="exp-affiliations">
        <div class="container">
          <p class="title">Affiliations</p>

          <div class="experience-logo">
            <ul class="list-logo affiliations"></ul>
          </div>

          <div class="map-detail" style="display: none;">
            <p class="address">Dali, Yunnan, China</p>
            <div class="map"></div>
          </div>
        </div>
      </div>
    `;
  }

}