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
        slidesToShow: 3,
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
        autoplay: true,
        autoplaySpeed: 6000,
        centerMode: true,
    })
})