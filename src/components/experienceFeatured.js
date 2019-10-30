import featured01 from '../assets/images/featured-01.png';
import featured02 from '../assets/images/featured-02.png';
import banner from '../assets/images/banner-03.png'
export class experienceFeatured extends HTMLElement {

  constructor() {
    super();
    this.template();
    this.featuresList = this.querySelector('.row-featured');
    this.expFeatured = this.querySelectorAll('.exp-featured');
  }

  get features() {
    
  }

  set features(features) {
    this._features = features;
    if (features.length > 0) {
      this.featuresList.innerHTML = features.map(f => `
                                      <div class="list-featured">
                                        <div class="box-featured">
                                          <a href="#">
                                            <img src="${f}" alt="img-featured" style="width: 100%">
                                          </a>
                                        </div>
                                      </div>
                                    `).join('');
    }
  }

  template() {
    this.innerHTML = `
      <div class="exp-featured">
        <div class="container">
          <p class="title">
            <svg xmlns="http://www.w3.org/2000/svg" width="51.323" height="42.651" viewBox="0 0 51.323 42.651">
              <path id="Path_62" data-name="Path 62" d="M294.353,262.874a6.08,6.08,0,0,0-5.445,3.413l-5.325-1.164c.021-.262.041-.523.041-.791a10.448,10.448,0,0,0-3.19-7.515l1.06-1.447a7.014,7.014,0,1,0-2.343-1.736l-1.065,1.458a10.456,10.456,0,0,0-13.765,3.584L261.2,257.24a6.183,6.183,0,1,0-1.238,2.641l3.138,1.44a10.415,10.415,0,0,0,2.149,9.893l-1.842,2.128a6.019,6.019,0,0,0-2.754-.688,6.131,6.131,0,1,0,4.966,2.586l1.831-2.114a10.453,10.453,0,0,0,15.511-5.157l5.316,1.161a6.087,6.087,0,1,0,6.078-6.258Zm-10.068-17.766a3.974,3.974,0,1,1-3.973,3.973A3.978,3.978,0,0,1,284.285,245.107Zm-29.066,14.17A3.179,3.179,0,1,1,258.4,256.1,3.184,3.184,0,0,1,255.22,259.277Zm5.431,22.65a3.179,3.179,0,1,1,3.179-3.178A3.181,3.181,0,0,1,260.651,281.928ZM273.139,271.9a7.57,7.57,0,1,1,7.569-7.571A7.581,7.581,0,0,1,273.139,271.9Zm21.215.243a3.179,3.179,0,1,1,3.179-3.178A3.181,3.181,0,0,1,294.353,272.146Z" transform="translate(-249.125 -242.192)" fill="#89c966"/>
            </svg> &nbsp;
            Featured on
          </p>

          <div class="img-featured">
            <div class="row-featured"></div>
          </div>

          <exp-banner banner="${banner}"></exp-banner>
        </div>
      </div>
    `;
  }

}