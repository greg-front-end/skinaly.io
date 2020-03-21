$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали', // Set a custom before label
    after_label: 'Со скинали' // Set a custom after label
  });
  $('.before-slider').slick({
    draggable: false,
    dots: true,
    dotsClass: '.before',
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right')
  });

  /* Нвстройка для отзывов */
  $('.reviews-slider-after').slick({
    slidesToShow: 3,
    slidesToScroll: 0,
    responsive: [{
        infinite: false,
        speed: 300,
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          draggable: false,
          dotsClass: 'before',
          prevArrow: $('.arrow__left'),
          nextArrow: $('.arrow__right')
        }
      },

      {
        breakpoint: 967,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
          draggable: false,
          dotsClass: 'before',
          prevArrow: $('.arrow__left'),
          nextArrow: $('.arrow__right')
        }
      }
    ],
  });


  /* Настройка select */
  $('.select').on('click', function () {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function () {
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select-checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(_href).offset().top - 250 + "px"
    });
    return false;
  });
  $('input[type="tel"]').mask("+7 (999) 999-99-99");

  /* Показывать карты после прокрутки до него */
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Afbf2952e17016592cb6c0bdd5fd0c20872c3cf3b794809a1cb05a428e9028dec&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
      $(window).unbind('scroll')
    }
  });
});