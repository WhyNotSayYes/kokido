$(document).ready(function(){
    $('.slider-big').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        draggable: false,
        swipe: false,
    });
    $('.slider-text').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        draggable: false,
        swipe: false,
        // variableWidth: true,
    });
    
    $('.slider-min').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        asNavFor: '.slider-big,.slider-text',
        variableWidth: true,
        draggable: true,
        swipe: true,
        responsive: [
            {
              breakpoint: 470,
              settings: {
                arrows: false,
              },
            },
          ],
    });
    $('.slider-rev').slick({
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 6000,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1050,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
    $('.faq-spollers-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $('.partners__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    })
});

