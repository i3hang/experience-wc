export class experienceWc extends HTMLElement {
  constructor() {
    super();
    this._slides = "";
    this.template();
    
  } 

  get dataJson() {
    const url = '../src/data.json';
    return new Promise((resolve, reject)=>{
      fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        resolve(data);
      })
      .catch(reject);
    });
  }

  get slideData() {
    return this.dataJson.then(res => {
      return res.data.sliderImageUrls.map(s=>{'<div class="item" style="background-image: url('+ s +')"></div>'});
    });
  }
  
  template() {
      //slideBackground="${res.data.sliderImageUrls}" dataJsonTest="${res.data.experiences}"
      //address="${res.data.address}" tel="${res.data.telephone}" email="${res.data.email}" websiteName="${res.data.websiteName}" websiteLink="${res.data.websiteLink}"
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