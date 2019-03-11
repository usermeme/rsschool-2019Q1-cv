import Scroll from './scroll/Scroll';
import Slider from './slider/Slider';
import Header from './header/Header';

export default class App {
  constructor() {
    this.slider = new Slider();
    this.header = new Header();
    this.scroll = new Scroll();
    this.scroller = document.documentElement.scrollTop;
    this.navigation = document.querySelector('.navigation');
    this.skillsImage = document.querySelector('.skills-img');
    this.dropdown = document.querySelector('.dropdown');
  }

  start() {
      
  }
}
