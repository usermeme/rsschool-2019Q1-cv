export default class Srcoll {
  constructor() {
    this.headerHight = document.querySelector('header').offsetHeight;
  }

  scrolling(target) {
    if (target.tagName !== 'A') {
      return;
    }

    let coord = document.querySelector(target.getAttribute('href')).offsetTop;
    coord -= this.headerHight;
    if (coord < this.headerHight) {
      coord = 0;
    }

    window.scrollTo({
      top: coord,
      behavior: 'smooth',
    });
  }
}
