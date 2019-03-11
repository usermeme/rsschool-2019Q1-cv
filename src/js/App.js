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
    if (this.scroller !== 0) {
      this.header.showShadow();
    } else {
      this.header.increaseHeight();
    }

    this.slider.draw();
    this.slider.changeWidth(window.screen.width);

    document.addEventListener('scroll', () => {
      this.scroller = document.documentElement.scrollTop;
      if (this.scroller === 0) {
        this.header.removeShadow();
        this.header.increaseHeight();
      } else {
        this.header.showShadow();
        this.header.reduceHeight();
      }
    });

    window.addEventListener('resize', () => {
      this.slider.changeWidth(window.screen.width);
    });

    document.addEventListener('click', (e) => {
      this.header.removeDropdownContent(e.target);
    });

    this.navigation.addEventListener('click', (e) => {
      e.preventDefault();
      this.scroll.scrolling(e.target);
    });

    this.skillsImage.addEventListener('click', (e) => {
      this.slider.selectSlide(e.target);
    });

    this.dropdown.addEventListener('click', (e) => {
      this.header.showContent(e.target);
    });
  }
}
