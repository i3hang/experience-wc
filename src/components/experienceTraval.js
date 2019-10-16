import logoTravel01 from '../assets/images/logo-traval-01.png';
import logoTravel02 from '../assets/images/logo-traval-02.png';
import logoTravel03 from '../assets/images/logo-traval-03.png';
import logoTravel04 from '../assets/images/logo-traval-04.png';
import logoTravel05 from '../assets/images/logo-traval-05.png';

export class experienceTraval extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-traval">
        <ul>
          <li>
            <a href="#">
              <img src="${logoTravel01}">
              <p>Booking.com</p>
            </a>
            <button class="late">
              4.5
            </button>
            <div class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_328" data-name="Path 328" d="M379.274,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-373.371 -294.654)" fill="#676767"/>
              </svg>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="${logoTravel02}">
              <p>Tripadvisor</p>
            </a>
            <button class="late">
              4.8
            </button>
            <div class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="${logoTravel03}">
              <p>Expedia</p>
            </a>
            <button class="late">
              4.5
            </button>
            <div class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_328" data-name="Path 328" d="M379.274,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-373.371 -294.654)" fill="#676767"/>
              </svg>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="${logoTravel04}">
              <p>CTrip</p>
            </a>
            <button class="late">
              4.5
            </button>
            <div class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_328" data-name="Path 328" d="M379.274,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-373.371 -294.654)" fill="#676767"/>
              </svg>
            </div>
          </li>
          <li>
            <a href="#">
              <img src="${logoTravel05}">
              <p>Agoda</p>
            </a>
            <button class="late">
              4.5
            </button>
            <div class="star">
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_324" data-name="Path 324" d="M276.885,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-270.983 -294.654)" fill="#00db65"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="11.806" height="11.228" viewBox="0 0 11.806 11.228">
                <path id="Path_328" data-name="Path 328" d="M379.274,294.654l1.393,4.289h4.509l-3.648,2.65,1.393,4.289-3.648-2.65-3.648,2.65,1.393-4.289-3.648-2.65h4.509Z" transform="translate(-373.371 -294.654)" fill="#676767"/>
              </svg>
            </div>
          </li>
        </ul>
      </div>
    `;
  }

}