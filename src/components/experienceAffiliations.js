import experLogo01 from "../assets/images/exper-logo-01.png";
import experLogo02 from "../assets/images/exper-logo-02.png";
export class experienceAffiliations extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-affiliations">
        <div class="container">
          <p class="title">Affiliations</p>

          <div class="experience-logo">
            <ul class="list-logo">
              <li>
                <a href="#">
                  <img src="${experLogo01}" alt="exper-logo">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${experLogo02}" alt="exper-logo">
                </a>
              </li>
            </ul>
          </div>

          <div class="map-detail">
            <p class="address">Dali, Yunnan, China</p>
            <div class="map"></div>
          </div>
        </div>
      </div>
    `;
  }

}

