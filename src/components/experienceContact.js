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

  get address() {
    return this.getAttribute('address') || '';
  }

  get tel() {
    return this.getAttribute('tel') || '';
  }

  get email() {
    return this.getAttribute('email') || '';
  }

  get websiteName() {
    return this.getAttribute('websiteName') || '';
  }

  get websiteLink() {
    return this.getAttribute('websiteLink') || '';
  }

  get contact5() {
    return this.getAttribute('contact5') || '';
  }

  template() {
    this.innerHTML = `
      <div class="exp-contact">
        <ul class="list-contact">
          <li style="display:${(this.address)?'flex':'none'}">
            <div class="icon">
              <img src="${contact01}" alt="icon-contact">
            </div>
            <div class="post-contact">
              ${this.address}
            </div>
          </li>
          <li style="display:${(this.tel)?'flex':'none'}">
            <div class="icon"><img src="${contact02}" alt="icon-contact"></div>
            <div class="post-contact">${this.tel}</div>
          </li>
          <li style="display:${(this.email)?'flex':'none'}">
            <div class="icon"><img src="${contact03}" alt="icon-contact"></div>
            <div class="post-contact">${this.email}</div>
          </li>
          <li style="display:${(this.websiteLink)?'flex':'none'}">
            <div class="icon"><img src="${contact04}" alt="icon-contact"></div>
            <div class="post-contact"><a href="${this.websiteLink}">${this.websiteName}</a></div>
          </li>
          <li style="display:${(this.contact5)?'flex':'none'}">
            <div class="icon"><img src="${contact05}" alt="icon-contact"></div>
            <div class="post-contact">${this.contact5}</div>
          </li>
        </ul>
      </div>
    `;
  }

}

