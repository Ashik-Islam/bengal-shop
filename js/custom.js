$(document).ready(function () {
  $(".cat_area").click(function () {
    $(".mega_menu").slideToggle();
  })
});

$(document).ready(function () {
  $(".hero_slider").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    dots: true,
    responsiveClass: true,
  });
});

//   search by cat slider
$(document).ready(function () {
  $(".search_cat_slider").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 5,
    rtl: true,
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        dots: false,
        items: 2,
        nav: false
      },
      600: {
        dots: false,
        items: 2,
        nav: false,
        margin: 10
      },
      1000: {
        items: 6,
      }
    }
  });
});
//   search by cat slider

//   deal of the week slider
$(document).ready(function () {
  $(".deal_cards").owlCarousel({
    autoplay: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        dots: false,
        items: 2,
        nav: false
      },
      600: {
        dots: false,
        items: 2,
        nav: false
      },
      1000: {
        items: 5,
      }
    }
  });
});
//   deal of the week slider

//   popular brands slider
$(document).ready(function () {
  $(".popular_brands_slider").owlCarousel({
    items: 6,
    autoplay: true,
    loop: true,
    margin: 10,
    rtl: true,
    responsiveClass: true,
    responsive: {
      // breakpoint from 0 up
      0: {
        dots: false,
        items: 2,
        nav: false
      },
      600: {
        dots: false,
        items: 2,
        nav: false
      },
      1000: {
        items: 6,
      }
    }

  });
});
//   popular brands slider


// mean menu
jQuery(document).ready(function () {
  jQuery('.m_menu nav').meanmenu({
    meanMenuOpen: '<i class="fa-solid fa-bars"></i>',
    meanScreenWidth: "767",
    meanNavPush: "100%",
    meanExpand: "+",
    meanContract: "-",
  });
});
// mean menu