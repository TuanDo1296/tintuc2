$(document).ready(function() {
    $('#bttop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#bttop').fadeIn();
        } else {
            $('#bttop').fadeOut();
        }
    });
    $(".headline-link").addClass('owl-carousel owl-theme').owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        touchDrag: true,
        animateIn: "slideInUp",
        animateOut: "slideOutUp",
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        lazyLoad: true,
        autoplayHoverPause: true,
        smartSpeed: 1500
    });
    $(".image-slide .group-image").addClass('owl-carousel owl-theme').owlCarousel({
        items: 1,
        loop: false,
        mouseDrag: false,
        touchDrag: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        autoplay: true,
        autoplayTimeout: 5000,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        lazyLoad: true,
        autoplayHoverPause: true,
        smartSpeed: 1500
    });
    $("#other-new").addClass('owl-carousel owl-theme').owlCarousel({
        items: 3,
        loop: false,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        lazyLoad: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            479: {
                items: 2,
                margin: 20
            },
            767: {
                items: 3,
                margin: 20
            },
            991: {
                items: 3,
                margin: 20
            },
            1199: {
                items: 3,
                margin: 20
            }
        }
    });
});

$(document).ready(function () {
    $("header .header-bottom nav").prepend("<a href='javascript:void(0)' class='header__icon' id='header__icon'><span></span></a>");
    $(".product-detail .size .item").click(function() {
        $(".product-detail .size .item").removeClass("active");
        $(this).addClass("active");
    });
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 44) {
            $('.header-bottom').addClass('fixed');
        } else {
            $('.header-bottom').removeClass('fixed');
        }
    });
    $( '#top-search a.search-click' ).on( 'click', function () {
        $( '.show-search' ).fadeToggle();
        $( '.show-search input.search-input' ).focus();
    });
    $("#header__icon").click(function () {
        $("#menu").slideToggle();
        $(this).toggleClass('active');
    });
    $("#overlay").click(function () {
        $("#menu").toggleClass("ac");
        $("#overlay").fadeToggle();
        $("#header__icon").toggleClass("active");

    });
    $(".openSub").click(function() {
        $(this).toggleClass("ac");
        $("#menu .dropdown-menu").slideToggle();
    });
});