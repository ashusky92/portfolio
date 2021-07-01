
// Adds/Removes acviated class to navigation, depending on scroll location
$(window).on('scroll', function(){
  var scrollPos = $(this).scrollTop();
  if(scrollPos > 885){
    $('nav').slideDown();
  } else {
    $('nav').slideUp();
  }
});

$('section.multi-section div.buttons-container button.multi-btn').on('click', function(){
	var sectTarget = $(this).attr('sect-target');
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().parent().find('div.content-container div#' + sectTarget).addClass('active').siblings().removeClass('active');
});
