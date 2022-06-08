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
    });
    $('.slider-min').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        centerMode: true,
        asNavFor: '.slider-big,.slider-text',
        autoplay: false,
        autoplaySpeed: 1500,
        variableWidth: true,
    });
})