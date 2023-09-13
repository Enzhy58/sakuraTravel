$(function () {
  
    $(window).scroll(function () {
      var target = $(this).scrollTop();
      if (target == 0) {
        $('.header__top').removeClass('header__top--scroll');
      } else {
        $('.header__top').addClass('header__top--scroll');
      }
    });
  

  });