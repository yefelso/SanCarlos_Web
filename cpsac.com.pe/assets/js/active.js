(function ($) {
    "use strict";
    $(document).ready(function () {

        // Main slider //
        $(".main-slider").owlCarousel({
            items:1,
            nav: true,
            autoplay: true,
            loop: true,
            autoplayTimeout:5000,
            autoplayHoverPause:false
        });
        
        $(".main-slider").on("translate.owl.carousel", function(){
            $(".slider-content h3, .slider-content h2, .slider-content a, .slider-content").removeClass("animated fadeInRight").css("opacity", "0");
        });        
        $(".main-slider").on("translated.owl.carousel", function(){
            $(".slider-content h3, .slider-content h2, .slider-content a, .slider-content").addClass("animated fadeInRight").css("opacity", "1");
        });
        // Main slider js End //

        // Blog slider //
        $(".blog-slider").owlCarousel({
            items:2,
            autoplay: true,
            dots: true,
            nav: false,
            loop: true,    
            autoplayTimeout:12000,        
            responsiveClass:true,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:2 }
            }
        });



        // Dropdown menu: cambiar click por hover y find por stop para que no sea popup
        $('ul.nav li.dropdown').click(function() {
          $(this).find('.dropdown-menu').find(true, true).delay(200).fadeIn(500);
        }, function() {
          $(this).find('.dropdown-menu').find(true, true).delay(200).fadeOut(500);
        });




        // Mobile menu: se cambio off por on para que no se cierre al dar click
        $("ul.nav.navbar-nav li a").off('click', function () {
            $(".navbar-collapse").removeClass("in");
        });
        


        // On scroll add class on menu items
        $('a.smooth-scroll').on('click', function(event) {
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-69
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});





        // Scrollspy
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 70
        });  



        // Mixitup for #Protfolio --si se agrega la seccion portfolio activar esto para que funcione el boton back-top--
        //var containerEl = document.querySelector('div.portfolio-wrapper');
        //var mixer = mixitup(containerEl);



        // Back to top 
        $(".back-top").hide();
        $('.back-top a').on('click', function(event) {
            $('body,html').animate({scrollTop:0},800);
            return false;
       });

        //Google map
        $(function () {
            var LocsA = [{
                lat: 23.810332,
                lon: 90.412518,
                zoom: 14,
                title: 'Dhaka,Bangladesh',
                html: ['<h3>Dhaka,Bangladesh</h3>', '<p>Lorem ipsum dolar amet</p>'].join('')
            }];

            new Maplace({
                locations: LocsA,
                controls_type: 'list',
                controls_on_map: false,
                styles: {
                        'Greyscale': [{
                            featureType: 'all',
                            stylers: [
                                { saturation: -100 },
                                { gamma: 0.50 }
                            ]
                        }]
                    },
                controls_title: 'Choose a location:',
                
            }).Load();
        });

    });

    // When Mouse Scroll, do
    $(window).on('scroll', function() {
        // jQuery to collapse the navbar on scroll
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }

        // Back to top 
        if($(this).scrollTop()>150){
            $('.back-top').fadeIn();
        }
        else{
            $('.back-top').fadeOut();
        }    
    });

    // When document is loading, do
    $(window).on('load', function() {
        // Preloader
        $("#loading").delay(100).fadeOut(500);
            $("#loading").click(function() {
            $("#loading").fadeOut(500);
        })
    });

})(jQuery);