$(document).ready(function(){
    $(".my_clients").owlCarousel({
        items:5,
        loop:true,
        autoplay:true,
        mouseDrag:false,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:2,
            },
            400:{
                items:2,
                autoWidth:true,
                margin:10,
                merge:true
            },
            600:{
                items:3,
            },
            767:{
                items:4,
                autoWidth:true,
                margin:10,
            },
            1200:{
                items:5,
            }
        }
    });
  });

//   recent work area

  $('.re_slider').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            autoplay:true
        },
        600:{
            items:1,
            autoplay:true
        },
        768:{
            items:2,
            autoplay:true,
            nav:false
        },
        1000:{
            items:2,
            autoplay:true,
            nav:false
        },
        1200:{
            nav:true,
            items:2,
            autoplay:true,
            dots:true
        }
    }
})
// recent work area

  const btn = document.querySelector(".open");
        const x = document.querySelector(".close");
        const nav = document.querySelector(".nav_item")
        btn.addEventListener("click", () => {
            nav.classList.toggle("nav_show")
        });
        x.addEventListener("click", (e) => {
            nav.classList.remove("nav_show")
        });
        document.addEventListener("click", function (e) {
            if (!btn.contains(e.target) && !x.contains(e.target)) {
                nav.classList.remove("nav_show");
            }
        });


// skill chart


(function ($) {
    "use strict";

    function isInViewport(element) {
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    function animateProgressBars() {
        $("[progress-bar]").each(function () {
            if ($(this).hasClass("animated")) return; // Prevents re-animation
            if (isInViewport(this)) {
                $(this).addClass("animated"); // Mark as animated
                
                $(this).find(".progress-fill").animate(
                    { width: $(this).attr("data-percentage") },
                    2000
                );

                $(this).find(".progress-number-mark").animate(
                    { left: $(this).attr("data-percentage") },
                    {
                        duration: 2000,
                        step: function (now, fx) {
                            var data = Math.round(now);
                            $(this).find(".percent").html(data + "%");
                        },
                    }
                );
            }
        });
    }

    $(window).on("scroll", animateProgressBars);
    $(document).ready(animateProgressBars); // Run on page load in case it's already in view

})(jQuery);

// skill chart