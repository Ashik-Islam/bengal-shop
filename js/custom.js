$('.best_sale_slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    items:4,
    autoplay:true,
    autoplayTimeout:3000,
    mouseDrag:false

    
});

$('.diff_brand').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    mouseDrag:false,
    dots:true,
    dotsEach:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
        }
    }
});

$(document).ready(function(){
    $("#scroll").click(function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });