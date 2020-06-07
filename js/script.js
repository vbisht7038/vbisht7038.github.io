var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
$(window).scroll(navbarCollapse);

$(document).ready(function(){
navbarCollapse();
})
