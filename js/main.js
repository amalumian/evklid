// MENU

const menu = document.querySelector('.header__menu');
const menuIcon = document.querySelector('.header__icon-menu');
const menucloseIcon = document.querySelector('.header__close-icon-menu');

menuIcon.onclick = function() {
  menu.classList.add('header__menu-active');
}

menucloseIcon.onclick = function() {
  menu.classList.remove('header__menu-active');
}

// SEARCH

const search = document.querySelector('.header__search');
const searchIcon = document.querySelector('.search__icon');
const searchcloseIcon = document.querySelector('.search__icon-close')

searchIcon.onclick = function() {
  search.classList.add('search__active');
  searchcloseIcon.classList.add('search__icon-close_shown');
}

searchcloseIcon.onclick = function() {
  search.classList.remove('search__active');
  searchcloseIcon.classList.remove('search__icon-close_shown');
}

// SWIPER

new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  effect: 'fade',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// TABS

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.work__button').forEach(function(e) {
    e.addEventListener ('click', function (e) {
      const tab = e.currentTarget.dataset.path;
      document.querySelectorAll('.tab-content').forEach(function(e){
        e.classList.remove('tab-content_active')
        document.querySelector(`[data-target='${tab}']`).classList.add('tab-content_active');
      })
    })

    e.addEventListener ('click', function (e) {
      const tabActive = e.currentTarget.dataset.default;
      document.querySelectorAll('.work__button').forEach(function(e){
        e.classList.remove('work__button_active')
        document.querySelector(`[data-path='${tabActive}']`).classList.add('work__button_active');
      })
    })

  })
})

// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}