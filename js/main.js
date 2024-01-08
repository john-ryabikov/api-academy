$(document).ready(function(){
  // Открытие-закрытие меню 
    $('.menu-btn, .close-menu, .link__text, .link__button').on('click', function() {
      $('.header').toggleClass('header-active');
      $('html').toggleClass('stop-scroll');
      $('.dark-fon').toggleClass('dark-fon-on');
      $('.container').toggleClass('container-margin');
    });

  // Открытие-закрытие спойлера
    $('.spoiler__question-box').on('click', function() {
      $(this).children('.spoiler__button').toggleClass('spoiler-active');
      $(this).next().slideToggle('600'); 
    });
  
  //Плавная прокрутка
    $(function(){
      $("a[href^='#']").on('click', function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
      });
    });

  // Тач-скрин
	  $('body').bind('touchstart', function () {
    });
  
  //Прогресс-бар 
    $(window).scroll(function(){
      var progress = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
      $('.progress__bar').width(progress + '%');
    });
  
  // Открытие модального окна №1
    $('.golden-btn').on('click', function() {
      $('#modal-1').fadeIn(600);
      $('.modal-overlay__window').addClass('show-modal');
      $('html').addClass('stop-scroll');
      $('.container').addClass('container-margin');
    });  

  // Закрытие модального окна №1
    $('.modal-overlay__close').on('click', function() {
      $('#modal-1').fadeOut(400);
      $('.modal-overlay__window').removeClass('show-modal');
      $('html').removeClass('stop-scroll');
      $('.container').removeClass('container-margin');
    });
  
  // Обработка окна №1
    $('#form1').submit(function() {
      if (document.form1.user_name.value === '' || document.form1.user_phone.value === '' ) {
        valid = false;
        return valid;
      }
      $.ajax({
        type: "POST",
        url: "php/form_1_mail.php",
        data: $(this).serialize()
      }).done(function() {
        $('.allert__sucses').fadeIn(400).delay(2000).fadeOut(400);
        $(this).find('input').val('');
        $('#form1').trigger('reset');
      });
      return false;
    });
  
  // Обработка окна №2
    $('#form2').submit(function() {
      if (document.form2.user_name.value === '' || document.form2.user_phone.value === '' ) {
        valid = false;
        return valid;
      }
      $.ajax({
        type: "POST",
        url: "php/form_2_mail.php",
        data: $(this).serialize()
      }).done(function() {
        $('.allert__sucses').fadeIn(400).delay(2000).fadeOut(400);
        $(this).find('input').val('');
        $('#form2').trigger('reset');
      });
      return false;
    });

  // Обновление страницы  
    $(window).on('beforeunload', function(){
      $(window).scrollTop(0);
    });

  //Swiper-слайдер для отзывов
    var swiper = new Swiper('.reviews__slider', {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        }
      }  
    });
});    