$(window).on('scroll', function(){
  var scrollPos = $(this).scrollTop();
  if(scrollPos > 520){
    $('nav').addClass('activated');
    $('nav div.nav-content h2.nav-title').slideDown();
  } else {
    $('nav').removeClass('activated');
    $('nav div.nav-content h2.nav-title').slideUp();
  }
});
