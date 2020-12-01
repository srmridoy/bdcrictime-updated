(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();




        $('.menu-open').click(function () {

            $('.body-left-bar').toggleClass('activee');
            $('.menu-open').toggleClass('toggle');

        });

        $('.live-match-slider').slick({
            dots: false,
            centerMode: true,
            arrows: true,
            centerPadding: '50px',
            slidesToShow: 5,
            prevArrow: '<button className="prev"><img src="./assets/img/left.svg" alt="logo"></button>',
            nextArrow: '<button className="next"><img src="./assets/img/right.png" alt="logo"></button>',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                        centerPadding: '50px',
                        slidesToShow: 5
                    }
			},
                {
                    breakpoint: 1400,
                    settings: {
                        centerMode: true,
                        centerPadding: '50px',
                        slidesToShow: 3
                    }
			},
                {
                    breakpoint: 992,
                    settings: {
                        centerMode: true,
                        centerPadding: '50px',
                        slidesToShow: 2
                    }
			},
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: true,
                        centerPadding: '50px',
                        slidesToShow: 1
                    }
			}
		  ]
        });




        $(".post-slilder-main").owlCarousel({
            items: 3,
            nav: true,
            navText: ['<i className="fal fa-angle-left"></i>', '<i className="fal fa-angle-right"></i>'],
            dot: false,
            loop: true,
            margin: 40,
            autoplay: false,
            autoplayTimeout: 3000,
            smartSpeed: 1000,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,

                },
                768: {
                    items: 2,

                },
                1000: {
                    items: 3,

                }
            }


        });



    });



}(jQuery));
