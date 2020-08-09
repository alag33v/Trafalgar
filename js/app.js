$(document).ready(function () {
  // SLICK SLIDER
  $('.testimonials__slider').slick({
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  /* Smooth scroll */
  $('[data-scroll]').on('click', function (evt) {
    evt.preventDefault();

    let elementClass = $(this).data('scroll');
    let elementOffset = $(elementClass).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    );
  });
  /* Burger menu */
  let wrapper = document.querySelector('.burger__button-wrapper');
  let burger = document.querySelector('.burger__button');
  let mobileNav = document.querySelector('.menu__mobile-nav');
  let mobileLink = document.querySelectorAll('.mobile-nav__link');
  let body = document.querySelector('body');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('menu__mobile-nav--active');
    body.classList.toggle('block');
  });

  for (var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      burger.classList.toggle('active');
      mobileNav.classList.remove('menu__mobile-nav--active');
      body.classList.remove('block');
    });
  }
});
