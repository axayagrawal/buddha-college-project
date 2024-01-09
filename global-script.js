$('.button').on('mouseenter', function() {
  $(this).addClass('on-hover');
  $(this).find('.button-icon-wrapper').addClass('on-hover');
  $(this).find('.button-icon').addClass('on-hover');
});

$('.button').on('mouseleave', function() {
  $(this).removeClass('on-hover');
  $(this).find('.button-icon-wrapper').removeClass('on-hover');
  $(this).find('.button-icon').removeClass('on-hover');
});

// Button Outlne

$('.button-outline').on('mouseenter', function() {
  $(this).addClass('on-hover');
  $(this).find('.button-outline-icon-wrapper').addClass('on-hover');
  $(this).find('.button-icon').addClass('on-hover');
});

$('.button-outline').on('mouseleave', function() {
  $(this).removeClass('on-hover');
  $(this).find('.button-outline-icon-wrapper').removeClass('on-hover');
  $(this).find('.button-icon').removeClass('on-hover');
});
