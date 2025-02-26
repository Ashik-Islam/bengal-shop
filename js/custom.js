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
        dots:true
    });
  });

//   search by cat
$(document).ready(function(){
    $(".search_cat_slider").owlCarousel({
        items:6,
        autoplay:true,
        loop:true,
        nav:true
    });
  });
//   search by cat