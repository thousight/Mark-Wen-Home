/* ======================================== Main Body Stuff ========================================*/

// Page scroll animation function
var pageScroll = function(element){
  $('html,body').animate({
    scrollTop: $(element).offset().top
  }, 1500, 'easeInOutQuart');
}

// The button can scroll to next page
$('.NextPageBtn').click(function(e){
  e.preventDefault();
  pageScroll('#' + $(this).parent().parent().next().attr('id'));
})

/* ======================================== Navigation Bar =========================================*/

// Select navbar items so that when clicked it scrolls the page to destination
$('.navbar-items, .brand').click(function(e){
  e.preventDefault();
  pageScroll($(this).attr('href'));
})

// Active state not working fix
$(".navbar-items[href='#HomePage']").parent().addClass("active");
$('.nav a').click(function(){
  $('.nav').find('.active').removeClass('active');
});

// Navbar item can become active when the page is at its corresponding page
// Variables
var lastId,
NavMenu = $("#navbar-menu"),
NavMenuHeight = NavMenu.outerHeight()+15,
// All list items
menuItems = NavMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
});
// Bind to scroll
$(window).scroll(function(){
  // Get container scroll position
  var fromTop = $(this).scrollTop()+NavMenuHeight;
  // Get id of current scroll item
  var cur = scrollItems.map(function(){
    if ($(this).offset().top < fromTop)
    return this;
  });
  // Get the id of the current element
  cur = cur[cur.length-1];
  var id = cur && cur.length ? cur[0].id : "";
  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
    .parent().removeClass("active")
    .end().filter("[href='#"+id+"']").parent().addClass("active");
  }
});


/* =========================================== HomePage ============================================*/

// Code here...


/* ========================================== Education ============================================*/

// Code here...

/* ========================================== Experience ===========================================*/

// Biding checkScroll() to scroll
$(document).ready(function(){
  $('div').bind('scroll', checkScroll);
});

// Check if it is scrolled to the top or bottom of the div
function checkScroll(e) {
   $('.expTimeline').scroll(function () {
    if ( $('.expTimeline').scrollTop() == 0) {
      console.log('Scrolled to Page Top');
      $(window).scroll();
    }
    else if ( $(e.currentTarget)[0].scrollHeight - $(e.currentTarget).scrollTop() == $(e.currentTarget).outerHeight()) {
      console.log('Scrolled to Page Bottom');
      pageScroll(window);
    }
  });
}


/* ============================================ Skills =============================================*/

// Code here...


/* ========================================== Contact Me ===========================================*/

// Code here...
