export class experienceFooter extends HTMLElement {

  constructor() {
    super();
    this.template();
  }

  template() {
    this.innerHTML = `
      <div class="exp-footer">
        <div class="container">
          <div class="detail-footer">
            <div class="reserved">
              <p>© 2019 Chameleon Strategies. All rights reserved.</p>
            </div>
            <div class="footer-link">
              <ul class="links">
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }

}