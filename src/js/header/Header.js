export default class Header {
  constructor() {
    this.headerElement = document.querySelector('header');
    this.navigation = document.querySelector('.navigation');
    this.dropdownContent = document.querySelector('.dropdown-content');
  }

  showShadow() {
    this.headerElement.classList.add('shadow');
  }

  removeShadow() {
    this.headerElement.classList.remove('shadow');
  }

  reduceHeight() {
    this.navigation.style = 'padding: 0;';
    this.dropdownContent.style = 'top: 1.9em;';
  }

  increaseHeight() {
    this.navigation.style = 'padding: 0.4em 0;';
    this.dropdownContent.style = 'top: 2.1em;';
  }

  showContent(target) {
    if (target.tagName !== 'BUTTON') {
      return;
    }

    this.dropdownContent.classList.toggle('none');
  }

  removeDropdownContent(target) {
    if (target.tagName === 'BUTTON') {
      return;
    }

    if (!this.dropdownContent.classList.contains('none')) {
      this.dropdownContent.classList.add('none');
    }
  }
}
