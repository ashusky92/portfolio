/*
  Author: Alex Husky
*/

// Functions

// Check screen width
function checkScreenWidth(width, compare){
  switch (compare) {
    case "greater-equal":
      return $(window).width() >= width;
    case "greater":
      return $(window).width() > width;
    case "less-equal":
      return $(window).width() <= width;
    case "less":
      return $(window).width() < width;

  }
}


// Find scroll location of header navigation
var el = $('div.header-text');
var navLoc = el.position().top + el.offset().top + el.outerHeight(true);

// Adds functionality to elements through website, depending on scroll position
$(window).on('scroll', function(){
  var scrollPos = $(this).scrollTop();
  if($(window).width() >= 992){
    if(scrollPos > (navLoc - 20)){
      $('nav').slideDown();
    } else {
      $('nav').slideUp();
    }
  }
});

// Multi-section functionality
$('section.multi-section div.buttons-container button.multi-btn').on('click', function(){
	var sectTarget = $(this).attr('sect-target');
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().parent().find('div.content-container div#' + sectTarget).addClass('active').siblings().removeClass('active');
});


// console.log(`Width is greater than 992: ${checkScreenWidth(>=, 992)}`);

function checkScreenWidth(width, compare){
  switch (compare) {
    case "greater-equal":
      return $(window).width() >= width;
    case "greater":
      return $(window).width() > width;
    case "less-equal":
      return $(window).width() <= width;
    case "less":
      return $(window).width() < width;

  }

}


/*
=================================
        MOBILE MENU CODE
=================================
*/

// Mobile Menu Functionality
$('button.mobile-menu').click(function(){
  let navEl = $('nav div.nav-content');

  $(this).toggleClass('menu-open');

  if($(this).hasClass('menu-open')){
    $(this).text('CLOSE').css('background-color', 'black');
    navEl.css('display', 'flex');
  } else {
    $(this).text('MENU').css('background-color', '#415738');
    navEl.hide();
  }

});

// Navigation alterations based on screen width
if(checkScreenWidth(991, "less-equal")){
  $('nav div.nav-content a').click(function(){
    $(this).parent().hide();
    $('button.mobile-menu').text('MENU').css('background-color', '#415738').removeClass('menu-open');
  });
}

$(window).resize(function(){
  if(checkScreenWidth(991, "less-equal")){
    $('nav div.nav-content a').click(function(){
      $(this).parent().hide();
      $(this).text('MENU').css('background-color', '#415738');
    });
  } else {
    $('nav div.nav-content a').removeClass('mobile-menu');
  }
});

/*
=================================
      END - MOBILE MENU CODE
=================================
*/
