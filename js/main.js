(function($) {
    "use strict";

    /*--------------------------
         supplier form modal logic
    ---------------------------- */
    $("select.business").change(function(){
        $(this).find("option:selected").each(function(){
            var userType = $(this).attr("value");
            if(userType){
                $(".custom-fields").not("." + userType).hide();
                $("." + userType).show();
            } else{
                $(".custom-fields").hide();
            }
        });
    }).change();

    setTimeout(function() {
        if($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
      }
    }, 1);

      $(".btn-comment").click(function(){
        $(".form-widget").slideToggle(0);
        $(".form-button").toggleClass("button-up");
        $(".btn-comment").toggleClass("big-button");
      });

    $('#lightgallery').lightGallery({
      // width: '500px',
      // height: '600px',
      mode: 'lg-fade',
      // addClass: 'fixed-size',
      counter: false,
      download: false,
      startClass: '',
      enableSwipe: false,
      enableDrag: false,
      speed: 500,
      thumbnail: false
    });

    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });

    /*--
    One Page Nav
    -----------------------------------*/
    var top_offset = $('.header-area').height() - -60;
    $('.hamburger-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });


    /*--- clickable menu active ----*/
    const slinky = $('#menu').slinky()
    /*====== sidebarmenu ======*/
    function sidebarMainmenu() {
        var menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();


    /* slider active */
    $('.banner-slider').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        item: 1,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /* testimonials active */
    $('.testimonials-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })

    /* testimonials active */
    $('.product-fruit-slider').owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        item: 5,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: true,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 5
            }
        }
    })


    /*--
    menu-toggle
    ------------------------*/
    $('.menu-toggle').on('click', function() {
        if ($('.menu-toggle').hasClass('is-active')) {
            $('.hamburger-menu nav').removeClass('menu-open');
        } else {
            $('.hamburger-menu nav').addClass('menu-open');
        }
    });


    /*--
        Hamburger js
    -----------------------------------*/
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }

    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ti-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 0,
        animation: 'fade'
    });


    /*--
    Header Search Toggle
    -----------------------------------*/
    var searchToggle = $('.search-toggle');
    searchToggle.on('click', function(){
        if($(this).hasClass('open')){
           $(this).removeClass('open');
           $(this).siblings('.handicraft-content').removeClass('open');
        }else{
           $(this).addClass('open');
           $(this).siblings('.handicraft-content').addClass('open');
        }
    })

        $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 55) {
          $(".header-sticky-3").addClass("scrolled-navbar");
          $(".ul").addClass("scrolled-ul");
          $(".pisum-logo").addClass("scrolled-pisum-logo");
        }
        else {
          $(".header-sticky-3").removeClass("scrolled-navbar");
          $(".ul").removeClass("scrolled-ul");
          $(".pisum-logo").removeClass("scrolled-pisum-logo");
        }
      });

})(jQuery);





