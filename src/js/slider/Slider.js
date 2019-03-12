import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

export default class Slider {
  constructor() {
    this.aboutText = [
      {
        name: 'C++',
        text: 'I studied C++ at university and in a course by EPAM. Also in the course I studied the principles of OOP.',
      },
      {
        name: 'Qt',
        text: 'I studied Qt during one year. Also I have a coursework that is written using this framework.',
      },
      {
        name: 'JS',
        text: 'I started studying this language when I took a course by Rolling Scopes. In this course I read a book of learn.javascript.ru. I also performed tasks on <a href="https://www.codewars.com/users/usermeme">codewars</a> and on Rolling Scopes School.',
      },
      {
        name: 'HTML',
        text: 'I studied HTML on youtube and on <a href="https://www.codecademy.com/users/romanyankovich/achievements">codecademy</a>. I use semantic layout.',
      },
      {
        name: 'CSS',
        text: 'I studied CSS by books. Last book when I read was David McFarland\'s "The Missing Manual". I use flex and grid (responsive web-disign).',
      },
    ];
    this.infoSlider = document.querySelector('.info-slider');
    this.swiperContainer = document.querySelector('.swiper-container');
    this.swiperWrapper = document.querySelector('.swiper-wrapper');
    this.skillsImg = document.querySelectorAll('.skills-img img');
    this.swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      spaceBetween: 100,
      on: {
        slideChange: () => {
          this.selected = this.swiper.activeIndex;
          this.selectImg();
        },
      },
    });
    this.selected = this.swiper.activeIndex;
  }

  draw() {
    for (let i = 0; i < this.aboutText.length; i += 1) {
      const headline = document.createElement('h3');
      const paragraph = document.createElement('p');
      const swiperSlide = document.createElement('div');

      swiperSlide.classList.add('swiper-slide');

      headline.innerHTML = this.aboutText[i].name;
      headline.innerHTML += '<span>.<span>';
      paragraph.innerHTML = this.aboutText[i].text;

      swiperSlide.appendChild(headline);
      swiperSlide.appendChild(paragraph);

      this.swiperWrapper.appendChild(swiperSlide);
    }

    this.selectImg();
    this.swiper.update();
  }

  selectSlide(target) {
    if (target.tagName !== 'IMG') {
      return;
    }

    this.clearSelectedClasses();
    target.classList.add('selected');
    this.selected = this.identifySelectNumber();
    this.swiper.slideTo(this.selected);
  }

  selectImg() {
    this.clearSelectedClasses();
    this.skillsImg[this.selected].classList.add('selected');
  }

  identifySelectNumber() {
    let number = 0;
    this.skillsImg.forEach((item, i) => {
      if (item.classList.contains('selected')) {
        number = i;
      }
    });
    return number;
  }

  clearSelectedClasses() {
    this.skillsImg.forEach((item) => {
      item.classList.remove('selected');
    });
  }

  changeWidth(width) {
    this.swiperContainer.style = `width: ${width - 20}px`;
    this.swiper.update();
  }
}
