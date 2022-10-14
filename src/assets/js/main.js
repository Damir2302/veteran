$(document).ready(function() {

    // MOBILE MENU
    $('.header-burger').on('click', function() {
        $('.nav').addClass('open')
        $('body').addClass('overflow-hidden')
        $('#page').addClass('bg-overlay')
    })

    $('.close-menu').on('click', function() {
        $('.nav').removeClass('open')
        $('body').removeClass('overflow-hidden')
        $('#page').removeClass('bg-overlay')
    })

    $('html').on('click', function(e) {
        if (!$(e.target).closest('.nav').length &&
            !$(e.target).closest('.header-burger').length) {
            $('.nav').removeClass('open')
            $('body').removeClass('overflow-hidden')
            $('#page').removeClass('bg-overlay')
        }
    })

});