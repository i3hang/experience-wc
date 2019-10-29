import contact01 from '../assets/images/contact-01.png';
import contact02 from '../assets/images/contact-02.png';
import contact03 from '../assets/images/contact-03.png';
import contact04 from '../assets/images/contact-04.png';
import contact05 from '../assets/images/contact-05.png';
export class experienceContact extends HTMLElement {

  constructor() {
    super();
    this.template();
    this.addresData = this.querySelector(".address");
    this.telephoneData = this.querySelector(".tel");
    this.emailData = this.querySelector(".email");
    this.websiteData = this.querySelector(".websitelink");
    this.contact5Data = this.querySelector(".contact5");
  }

  set address(address) {
    this._address = address;
    if (address) {
      this.addresData.innerHTML = this._address;
    }
  }

  get address() {
    return this._address;
  }

  set telephone(tel) {
    this._telephone = tel;
    if (tel) {
      this.telephoneData.innerHTML = this._telephone;
    }
  }

  set email(email) {
    this._email = email;
    if (email) {
      this.emailData.innerHTML = this._email;
    }
  }

  set website(data) {
    this._website = data;
    if (data) {
      this.websiteData.innerHTML = `<a href="${data.link}">${data.name}</a>`;
    }
  }

  set socialIdentifiers(data) {
    this._contact5 = data;
    if (data) {
      this.contact5Data.innerHTML = data;
    }
  }

  template() {
    this.innerHTML = `
      <div class="exp-contact">
        <ul class="list-contact">
          <li>
            <div class="icon">
              <img src="${contact01}" alt="icon-contact">
            </div>
            <div class="post-contact address">${this.address}</div>
          </li>
          <li>
            <div class="icon"><img src="${contact02}" alt="icon-contact"></div>
            <div class="post-contact tel"></div>
          </li>
          <li>
            <div class="icon"><img src="${contact03}" alt="icon-contact"></div>
            <div class="post-contact email"></div>
          </li>
          <li>
            <div class="icon"><img src="${contact04}" alt="icon-contact"></div>
            <div class="post-contact websitelink"></div>
          </li>
          <li>
            <div class="icon"><img src="${contact05}" alt="icon-contact"></div>
            <div class="post-contact contact5"></div>
          </li>
        </ul>
      </div>
    `;
  }

}

