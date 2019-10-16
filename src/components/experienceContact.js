import contact01 from '../assets/images/contact-01.png';
import contact02 from '../assets/images/contact-02.png';
import contact03 from '../assets/images/contact-03.png';
import contact04 from '../assets/images/contact-04.png';
import contact05 from '../assets/images/contact-05.png';
export class experienceContact extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-contact">
        <ul class="list-contact">
          <li>
            <div class="icon">
              <img src="${contact01}" alt="icon-contact">
            </div>
            <div class="post-contact">
              #5 Cheng Bei village <br/>
              Xizhou Town, Dali City, <br/>
              Yunnan Province, China <br/>
            </div>
          </li>
          <li>
            <div class="icon"><img src="${contact02}" alt="icon-contact"></div>
            <div class="post-contact">(86)872-2452988</div>
          </li>
          <li>
            <div class="icon"><img src="${contact03}" alt="icon-contact"></div>
            <div class="post-contact">reservations@linden-centre.com</div>
          </li>
          <li>
            <div class="icon"><img src="${contact04}" alt="icon-contact"></div>
            <div class="post-contact">www.linden-centre.com</div>
          </li>
          <li>
            <div class="icon"><img src="${contact05}" alt="icon-contact"></div>
            <div class="post-contact">Operated.planning.rated</div>
          </li>
        </ul>
      </div>
    `;
  }

}

