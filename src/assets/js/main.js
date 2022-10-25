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

    // DOCUMENTS MASONRY.JS

    if ($('.docs').length) {
        $('.docs').masonry({
            // options
            itemSelector: '.docs__item',
            columnWidth: 1,
            gutter: 40
        });
    }

    function addYaMaps () {
        var myMap;
        ymaps.ready(init);

        function init () {
            myMap = new ymaps.Map('map', {
                center: [47.225609, 39.623367],
                zoom: 11,
                controls: []
            }),
            myPlacemark = new ymaps.Placemark([47.225609, 39.623367], {}, {
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
        }
    }

    if ($('#map').length != 0) {
        addYaMaps ();
    }

});