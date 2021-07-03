/*
  Author: Alex Husky
*/

// Find scroll location of header navigation
var el = $('div.header-text');
var navLoc = el.position().top + el.offset().top + el.outerHeight(true);

console.log(`Navigation Location: ${navLoc}`);

// Adds functionality to elements through website, depending on scroll position
$(window).on('scroll', function(){
  var scrollPos = $(this).scrollTop();
  if($(window).width() > 992){
    if(scrollPos > (navLoc - 20)){
      $('nav').slideDown();
    } else {
      $('nav').slideUp();
    }
  }
});

$('section.multi-section div.buttons-container button.multi-btn').on('click', function(){
	var sectTarget = $(this).attr('sect-target');
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().parent().find('div.content-container div#' + sectTarget).addClass('active').siblings().removeClass('active');
});
