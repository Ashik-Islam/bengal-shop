$(document).ready(function(){
    $(".cat_area").click(function(){
        $(".mega_menu").slideToggle();
    })
});

$(document).ready(function(){
    $(".hero_slider").owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        dots:true,
        responsiveClass:true,
        responsive : {
          // breakpoint from 0 up
          0 : {
            dots:false
          },
          575: {

          }
      }
    });
  });

//   search by cat slider
$(document).ready(function(){
    $(".search_cat_slider").owlCarousel({
        autoplay:true,
        loop:true,
        nav:true,
        margin:5,
        rtl:true,
        responsiveClass:true,
        responsive : {
          // breakpoint from 0 up
          0 : {
            dots:false,
            items:2,
            nav:false
          },
          575: {
            items:2
          }
      }
    });
  });
//   search by cat slider

//   deal of the week slider
$(document).ready(function(){
    $(".deal_cards").owlCarousel({
        items:5,
        autoplay:true,
        loop:true,
        nav:true,
    });
  });
//   deal of the week slider

//   popular brands slider
$(document).ready(function(){
    $(".popular_brands_slider").owlCarousel({
        items:6,
        autoplay:true,
        loop:true,
        nav:true,
        margin:10,
        rtl:true

    });
  });
//   popular brands slider
