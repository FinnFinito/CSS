$(document).ready(function() {
    /* sticky nav */
    $('.js--features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '80px'
    });
    /* scroll on buttons */
    $('.js-scroll-plan').click(function() {
        $('html, body').animate({ scrollTop: $('.js-plans').offset().top }, 1000);
    });
    $('.js-scroll-down').click(function() {
        $('html, body').animate({ scrollTop: $('.js--features').offset().top }, 500);
    });
    /* scroll on menu */
    $('.js-about').click(function() {
        $('html, body').animate({ scrollTop: $('.js--features').offset().top }, 500);
    });
    $('.js-steps').click(function() {
        $('html, body').animate({ scrollTop: $('.js-steps-section').offset().top }, 1000);
    });
    $('.js-cities').click(function() {
        $('html, body').animate({ scrollTop: $('.js-cities-section').offset().top }, 1000);
    });
    $('.js-pricing').click(function() {
        $('html, body').animate({ scrollTop: $('.js-plans').offset().top }, 1000);
    });
    /* animation on scroll */
    $('.js-steps-section').waypoint(function(direction) {
        $('.js-phone').addClass('animated bounceInUp');
    }, {
        offset: '130px'
    });

    $('.js-plans').waypoint(function(direction) {
        $('.js-plan-box').addClass('animated tada');
    }, {
        offset: '200px'
    });
    $('.js-mobile-nav').click(function() {
        var nav = $('.js-nav-top');
        var icon = $('.js-mobile-open');
        nav.slideToggle(200);
        if (icon.attr('name') == ('menu')) {
            icon.attr('name', 'close-circle-outline');
        } else {
            icon.attr('name', 'menu');
        }
    });
});