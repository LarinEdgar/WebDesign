$(function () {
    $('.toggles button').click(function () {
        var get_id = this.id;
        var get_current = $('.posts .' + get_id);

        $('.post').not(get_current).hide(500);
        get_current.show(500);
    });

    $('#showAll').click(function () {
        $('.post').show(500);
    });
});


$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        responsiveClass: true,
        responsive: {
            420: {
                items: 3,
                nav: false
            },
            768: {
                items: 5,
                nav: false
            },
            1280: {
                items: 8,
                nav: true
            },
            1920: {
                items: 8,
                nav: true
            }
        },
        navText: ['<i class="prev_icon">', '<i class="next_icon">']
    });
});



