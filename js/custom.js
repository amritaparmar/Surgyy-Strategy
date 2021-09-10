
// variables
var $header_top = $('.header-top');
var $nav = $('nav');



// toggle menu 
$header_top.find('a').on('click', function () {
    $(this).parent().toggleClass('open-menu');
});



// fullpage customization
$('#fullpage').fullpage({
    sectionsColor: ['#B8AE9C', '#0C0F16', '#F2AE72', '#0C0F16', '#0C0F16'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    slidesNavigation: true,
    controlArrows: false,
    anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
    menu: '#menu',

    afterLoad: function (anchorLink, index) {
        //$header_top.css('background', 'rgba(0, 47, 77, .3)');
        $nav.css('background', 'rgba(0, 0, 0, 1)');
        if (index == 5) {
            $('#fp-nav').hide();
        }
    },

    onLeave: function (index, nextIndex, direction) {
        if (index == 5) {
            $('#fp-nav').show();
        }
    },

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(false, 'up');
            $header_top.css('background', 'transparent');
            $nav.css('background', 'transparent');
            $(this).css('background', '#374140');
            $(this).find('h2').css('color', 'white');
            $(this).find('h3').css('color', 'white');
            $(this).find('p').css(
                    {
                        'color': '#DC3522',
                        'opacity': 1,
                        'transform': 'translateY(0)'
                    }
            );
        }
    },

    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
        if (anchorLink == 'fifthSection' && slideIndex == 1) {
            $.fn.fullpage.setAllowScrolling(true, 'up');
            $header_top.css('background', 'rgba(0, 47, 77, .3)');
            $nav.css('background', 'rgba(0, 47, 77, .25)');
        }
    }
});


//no right click image
$('img').on('dragstart', function (event) {
    event.preventDefault();
});
$("body").on("contextmenu", "img", function (e) {
    return false;
});

//slick slider
$('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    arrows: true
});


//menu js
$(function () {
     var wind = $(window);

    function noScroll() {
        window.scrollTo(0, 0);
    }

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".topnav");

        if (bodyScroll > 300) {

            navbar.addClass("nav-scroll");

        } else {

            navbar.removeClass("nav-scroll");
        }
    });

    var open = false,
        navDark = $(".topnav.dark"),
        logoChan = $(".topnav.dark .logo img");

    $('.topnav .menu-icon').on('click', function () {
        open = !open;

        $('.hamenu').toggleClass("open");

        if (open) {

            $('.hamenu').animate({ left: 0 });

            $('.topnav .menu-icon .text').addClass('open');

            navDark.addClass("navlit");
            logoChan.attr('src', 'img/logo-light.png');

            window.addEventListener('scroll', noScroll);

        } else {

            $('.hamenu').delay(300).animate({ left: "-100%" });

            $('.topnav .menu-icon .text').removeClass('open');

            navDark.removeClass("navlit");
            logoChan.attr('src', 'img/logo-dark.png');

            window.removeEventListener('scroll', noScroll);
        }
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseenter', function () {
        $(this).css("opacity", "1").siblings().css("opacity", ".5");
    });

    $('.hamenu .menu-links .main-menu > li').on('mouseleave', function () {
        $(".hamenu .menu-links .main-menu > li").css("opacity", "1");
    });


    $('.main-menu > li .dmenu').on('click', function () {
        $(".main-menu").addClass("gosub");
        $(this).parent().parent().find(".sub-menu").addClass("sub-open");
    });

    $('.main-menu .sub-menu li .sub-link.back').on('click', function () {
        $(".main-menu").removeClass("gosub");
        $(".main-menu .sub-menu").removeClass("sub-open");
    });


});