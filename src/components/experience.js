export class experienceWc extends HTMLElement {

  constructor() {
    super();
    this._data = null;
    this._slides = "";
    this.template();

    // อ้างถึง Element ตัวต่างๆ ใน Component นี้ เอาไว้เขียนโปรแกรมจัดการในภายหลัง
    this.elements = {
      header: this.querySelector('exp-header'),
      navbar: this.querySelector('exp-navbar'),
      imagesBoard: this.querySelector('exp-images-board'),
      banner: this.querySelector('exp-banner'),
      travel: this.querySelector('exp-traval'),
      affiliations: this.querySelector('exp-affiliations'),
      nearby: this.querySelector('exp-nearby'),
      offers: this.querySelector('exp-offers'),
      about: this.querySelector('exp-about'),
      contact: this.querySelector('exp-contact'),
      featured: this.querySelector('exp-featured'),
      footer: this.querySelector('exp-footer')
    };
  }

  /**
   * รายการ Attributes ที่สังเกตุการเปลี่ยนแปลง
   * ข้อมูลเพิ่มเติม: https://alligator.io/web-components/attributes-properties/
   */
  static get observedAttributes() {
    return ['src'];
  }

  /**
   * Callback ที่จะถูกเรียกเมื่อ Attributes ที่เราลิสไว้ มีการเปลี่ยนแปลงค่่า
   * @param {String} name ชื่อ Attribute
   * @param {String} oldValue ค่าเดิม
   * @param {String} newValue ค่าใหม่ที่เพิ่งกำหนดเข้ามา
   */
  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'src':
        this._loadFromSrc(newValue)
        break;
    }
  }

  /**
   * โหลดข้อมูลจาก URL ที่ระบุ
   * @param {String} url URL ที่ระบุ
   */
  _loadFromSrc(url) {
    fetch(url)
      .then((res) => res.json())
      .then((returnObject) => {
        // ยัดค่าลง this.data สังเกตุว่าไม่ใช่ this._data เพราะเราต้องการให้เรียกผ่าน setter ชื่อ data ครับ จะได้เขียนลอจิกการอัพเดตอะไรผ่านในนั้น
        this.data = returnObject.data;
      })
      .catch(console.error);
  }

  /**
   * รองรับ Property "data" กรณีนักพัฒนาอย่างกำหนดค่าให้โดยตรง
   */
  set data(data) {
    this._data = data;

    // Assign ให้กับ Property "data" ของแต่ละ elements
    if (this._data) {
      this.elements.header.images = this._data.sliderImageUrls;
      this.elements.about.text = this._data.content;
    }
  }

  /**
   * รองรับ Getter สำหรับ Property "data"
   */
  get data() {
    return this._data;
  }

  // get slideData() {
  //   return this.dataJson ? this.dataJson.then(res => {
  //     return res.data.sliderImageUrls.map(s => { '<div class="item" style="background-image: url(' + s + ')"></div>' });
  //   }) : null;
  // }

  template() {
    //slideBackground="${res.data.sliderImageUrls}" dataJsonTest="${res.data.experiences}"
    //address="${res.data.address}" tel="${res.data.telephone}" email="${res.data.email}" websiteName="${res.data.websiteName}" websiteLink="${res.data.websiteLink}"
    this.innerHTML = `
        <exp-header header></exp-header>
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