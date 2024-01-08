$(document).ready(function(){
    
  // Открытие модального окна №2
    $('#course-2').on('click', function() {
      $('#modal-2').fadeIn(600);
      $('.modal-overlay__window').addClass('show-modal');
      $('html').addClass('stop-scroll');
      $('.container').addClass('container-margin');
    });

  // Закрытие модального окна №2
    $('.modal-overlay__close').on('click', function() {
      $('#modal-2').fadeOut(400);
      $('.modal-overlay__window').removeClass('show-modal');
      $('html').removeClass('stop-scroll');
      $('.container').removeClass('container-margin');
    });      
});    