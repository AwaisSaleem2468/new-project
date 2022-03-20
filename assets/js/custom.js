$(document).ready(function () {

    $("a[href='#']").click(function (e) {
        e.preventDefault();
      });
    
      // remove auto P tags
    
      $("p:empty").remove();
    
    
    // Header Jquery
    
$(".navbar-toggler").click(function () {
    $(this).toggleClass("open-menu");
    $(".custom-menu").toggleClass("show");
  });


// $("#menu-main-menu li a").on("click", function (e) {
//     e.preventDefault();
//     var target = $(this).attr("href");
//     $("html, body").animate(
//       {
//         scrollTop: $(target).offset().top - 100,
//       },
//       1000
//     );
//     $(".custom-menu").removeClass("show");
//     $(".navbar-toggler").removeClass("open-menu");
//   });

  $(".toggle-filter").click(function(){
    $(".filter-form").fadeToggle("slow");
  });

  $('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "Read more") {
      $(this).text("Read less")
    } else {
      $(this).text("Read more")
    }
  });

  // About Us  Page 
  $.fn.timeline = function () {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img" };

    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css(
    "background-image",
    "url(" +
    selectors.item.
    first().
    find(selectors.img).
    attr("src") +
    ")");

    var itemLength = selectors.item.length;
    $(window).scroll(function () {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function (i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.id.css(
          "background-image",
          "url(" +
          selectors.item.
          last().
          find(selectors.img).
          attr("src") +
          ")");

          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.id.css(
          "background-image",
          "url(" +
          $(this).
          find(selectors.img).
          attr("src") +
          ")");

          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
  $("#timeline-1").timeline();
});