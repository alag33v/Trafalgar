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

    const elementClass = $(this).data('scroll');
    const elementOffset = $(elementClass).offset().top;

    $('html, body').animate(
      {
        scrollTop: elementOffset,
      },
      1000
    );
  });
  /* Burger menu */
  const wrapper = document.querySelector('.burger__button-wrapper');
  const burger = document.querySelector('.burger__button');
  const mobileNav = document.querySelector('.menu__mobile-nav');
  const mobileLink = document.querySelectorAll('.mobile-nav__link');
  const html = document.querySelector('html');
  const body = document.querySelector('body');

  wrapper.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('active');
    mobileNav.classList.toggle('menu__mobile-nav--active');
    html.classList.toggle('block');
    body.classList.toggle('block');
  });

  for (var i = 0; i < mobileLink.length; i++) {
    mobileLink[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      burger.classList.toggle('active');
      mobileNav.classList.remove('menu__mobile-nav--active');
      html.classList.remove('block');
      body.classList.remove('block');
    });
  }
});
