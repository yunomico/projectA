$(document).ready(function(){
    var displaySlides = function(data) {
        var slide = $('#' + data.id);
        var carousel = $('<div>', {'id': data.id + '-carousel', 'class': 'owl-carousel owl-theme'});
        slide.append(carousel);

        $(data.manga).each(function(index, manga) {
            var img = $('<img>', {'class': 'tile', 'src': manga.src, 'alt': manga.title});
            var span = $('<span>', {'class': 'title'}).text(manga.title);

            img
                .mousedown (function() {
                    img.removeClass('drag');
                })
                .mousemove (function() {
                    img.addClass('drag');
                })
                .mouseup (function() {
                    //simulates on click
                    if (!img.hasClass('drag')) {
                        //show drop down
                    }
                    img.removeClass('drag');
                });

            // need to fix image sizing issues
            img.hover(function() {
                img.closest('div').append(span);
            }, function() {
                span.remove();
            });

            carousel.append(img);
        })
            .promise()
            .done(function() {
                var owl = $('#' + data.id + '-carousel');
                owl.owlCarousel({
                    margin:4,
                    // loop: true,   //breaks title on hover sometimes
                    autoWidth: true,
                    nav: true,
                    navText: ["<",">"], // need to replace with actual nav buttons
                    // slideBy: 'page', //doesn't work?
                    dots: false
                });

                // autoplay on hover over buttons doesn't work well
                // $('#' + data.id + '-carousel .owl-nav .owl-prev').hover (function(){
                //     owl.trigger('play.owl.autoplay', [0, 100]);
                // }, function() {
                //     owl.trigger('stop.owl.autoplay');
                // });
                //
                // $('#' + data.id + '-carousel .owl-nav .owl-next').hover (function(){
                //     owl.trigger('play.owl.autoplay', [0, 100]);
                // }, function() {
                //     owl.trigger('stop.owl.autoplay');
                // });

                //fixes carousel autoWidth bug for incorrect width on initial load
                $('#' + data.id + '-carousel .owl-stage-outer .owl-stage').css('width', data.manga.length * 204 + "px", 'important')
        });
    };

    //populate fake data
    var array = [];
    for (var i = 0; i < 15; i++) {
        array.push({'title': 'super duper awesome long title here ' + i, 'src': 'https://placehold.it/650x250&text=' + i, 'id': 'some id'});
    }
    var newData = {"id": "new" , "manga": array};
    var trendingData = {"id": "trending" , "manga": array};
    var readAgainData = {"id": "read-again" , "manga": array};

    var display = function() {
        displaySlides(newData);
        displaySlides(trendingData);
        displaySlides(readAgainData);
    };
    display();

    //$(document).on('click' , '.tile-close' , function(){
    //    $(this).closest('.drop-container').fadeOut();
    //    $('.owl-lazy').parent().removeClass('drop-active').find('.arrow').remove();
    //});
});