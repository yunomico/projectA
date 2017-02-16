$(document).ready(function(){
    var displaySlides = function(data) {
        
        var slide = $('#' + data.id);
        var carousel = $('<div>', {'id': data.id + '-carousel', 'class': 'owl-carousel owl-theme'});
        
        slide.append(carousel);

        //show image tiles and set tiles hover (show title) and onclick (show dropdown)
        $(data.manga).each(function(index, manga) {
            var img = $('<img>', {'class': 'tile', 'src': manga.src, 'alt': manga.title , 'data-id' : index});
            // var span = $('<span>').text(manga.title);
            // var a = $('<a>', {'class': 'title text-center remove-this' , 'href' : 'javascript:void(0);'}).append(span);
            
            // // TODO fix hover title flickering with on click
            // img.mouseenter(function() {

            //     // if( !img.parent().find('.remove-this').length ){
            //     //     carousel.closest('.tiles-container').find('.remove-this').remove();
            //     //     img.after(a);
            //     // }
            // });
            // img.mouseleave(function() {
            //   // img.parent().find('.remove-this').remove();
            // });

            // img
            //     .mousedown (function() {
            //         img.removeClass('drag');
            //     })
            //     .mousemove (function() {
            //         img.addClass('drag');
            //     })
            //     .mouseup (function() {

            //         //simulates on click
            //         if (!img.hasClass('drag')) {
            //             //show drop down

            //             //Moves slide that was clicked
            //             //TODO fix weird behavior
            //             carousel.trigger('to.owl.carousel', [index]);

            //             //scroll page
            //             $('html, body').animate({
            //                 scrollTop: $(carousel).offset().top - 50
            //             }, 500);

            //             if(!$(this).parent().hasClass('overview-active')){
            //                 $('.owl-item').removeClass('overview-active');
            //                 $(this).parent().addClass('overview-active');

            //                 $(".owl-item").find('.remove-this').remove();
            //             }

            //             if(!$(this).parent().find('.arrow').length){
            //                 // var small = $('<small>').text(title);
            //                 var arrow = $('<span>', {'class': 'arrow remove-this'});

            //                 // var img = $(this).parent().find('img');
            //                 // img.after(arrow).after(a);
            //                 // img.after(a);
            //                 img.after(arrow);

            //                 var mlen = img.width() / 2;

            //                 arrow.css("margin-left" , (mlen - 10)+"px");

            //                 //appends dropdown?
            //                 append_overview( $(this) , img.data('id') );
            //             }
            //         }
            //         img.removeClass('drag');

            // });

            //MESSAGE : please use " on click " if you want to simulate click trigger since jquery is included in the webpage we might as well use it. it will make our life easier trust me :) 

            carousel.append(img);
        })
        .promise()
        .done(function() {
            var owl = $('#' + data.id + '-carousel');
            owl.owlCarousel({
            margin:-5,
            //loop: true,   //breaks events
            nav: true,
            navText: ['<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'], // need to replace with actual nav buttons
            // slideBy: 'page', //doesn't work?
            dots: false,
            lazyLoad:true,
            mouseDrag: true,
            responsiveClass:true,
            responsive : {
                0:{
                    items:1
                },
                1000:{
                    autoWidth:true
                }
            }
            //TODO: Set responsive based on # items? breaks width sizing..
            //MESSAGE : Setting autoWidth on desktop mode will fixed the width sizing on mobile
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
            //$('#' + data.id + '-carousel .owl-stage-outer .owl-stage').css('width', data.manga.length * 204 + "px", 'important')
        });
    };

    //populate fake data
    var array = [];
    for (var i = 0; i < 15; i++) {
        array.push({'title': 'Death Marching to the Parallel World Rhapsody ' + i, 'src': 'https://placehold.it/200x250&text=' + i, 'id': 'some id'});
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

    $(document).on('click' , '.tile-close' , function(){
       $(this).closest('.drop-container').fadeOut().remove();
       $('.owl-item').removeClass('overview-active oActive').find('.remove-this').remove();
    });

});
//need to reset the hover effect when the mouse outside the carousel div
$(document).on('mouseleave' , '.owl-carousel' , function(){
    $('.owl-item').removeClass('overview-active');
    $(".owl-item").not('.oActive').find('.title').remove();
});
//on desktop view you need to hover the tiles to display the title . when clicked it will display the dropdown view
$(document).on('mouseover' , ".tile" , open_tile);
//on the mobile view you just need to click the tile to display the dropdown view
$(document).on('click' , ".tile" , open_tile);

function open_tile(){
    var title = $(this).attr('alt');
    var img = $(this);

    if(!img.parent().hasClass('overview-active') && !img.parent().hasClass('oActive')){
        $('.owl-item').removeClass('overview-active');
        img.parent().addClass('overview-active');

        $(".owl-item").not('.oActive').find('.title').remove();
    }


    if(!img.parent().find('.arrow').length){
        var small = $('<small>').text(title);
        var arrow = $('<span>', {'class': 'arrow remove-this'});
        var span = $('<span>').text(title);
        var a = $('<a>', {'class': 'title text-center remove-this' , 'href' : 'javascript:void(0);'}).append(span);
        
        if(!img.parent().find('.title').length){
            img.after(a);
        }

        a.on('click',function(){

            $('.tile').parent().removeClass('oActive');
            $('.arrow').remove();

            img.parent().addClass('oActive');

            a.after(arrow);

            var mlen = img.width() / 2;

            arrow.css("margin-left" , (mlen - 15)+"px");

            var carousel = img.closest('.owl-carousel');

            carousel.trigger('to.owl.carousel', carousel.find('.tile').index(img));

            $('html, body').animate({
                scrollTop: $(carousel).offset().top - 90
            }, 500);

            append_overview( $(this) , img.data('id') );

            $('.owl-item').not('.oActive').removeClass('overview-active');
            $(".owl-item").not('.oActive').find('.title').remove();
        });
        
        var windowWidth = window.screen.width < window.outerWidth ? window.screen.width : window.outerWidth;
        var mobile = windowWidth < 500;

        if(mobile){
            //automatically trigger when its on mobile view since you need to click the title to display the dropdown view
            a.trigger('click');
        }    
    }


}

function append_overview(a , id){
    var html = build_overview_window();
 
    if( !a.closest('.app-wrap').next().hasClass('drop-container') ){
        $('.drop-container').remove();
        a.closest('.app-wrap').after(html);
        $('.drop-container').hide().fadeIn();
    }

    //fake data
    var arr = [];

    for (var i = 0; i < 6; i++) {
       arr.push({
            image : "images/manga-chapter.jpg" ,
            other_name : "デスマーチからはじまる異世界狂想曲 , DeathMa",
            author : "Ainana Hiro",
            title : "Death Marching to the Parallel World Rhapsody" ,
            genre : "Action , Cooking , Fantasy" ,
            summary : "Suzuki, an adult programmer, suddenly noticed that he's thrown into another world wearing a casual clothes at level 1. He gained high levels and treasures after using the 3-time-use disposable magic, Meteor Shower, once. After that he intends to do another world sightseeing tours? Meeting three beast girls, beautiful purple and black-haired sisters, and an eccentric blond-haired elf girl, along with various people during his trip. Although occasionally fighting demons and demon lord, this is a heartwarming fantasy story at heart",
            chapter : [ 
                    { chapter : "Chapter 20" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 19" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 18" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 17" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 16" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 15" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 14" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 13" , link : "javascript:void(0);" } ,
             ]
        });
        arr.push({
            image : "images/manga-chapter1.jpg" ,
            other_name : "食戟のソーマ , Food Wars! Shokugeki no Soma",
            title : "Shokugeki no Soma" ,
            author : "Shun Saeki",
            genre : "Action , Cooking , Fantasy , Drama" ,
            summary : "From Dan of Population GO: Yukihira Souma's dream is to become a full-time chef in his father's restaurant and surpass his father's culinary skill. But just as Yukihira graduates from middle schools his father, Yukihira Jouichirou, closes down the restaurant to cook in Europe. Although downtrodden, Souma's fighting spirit is rekindled by a challenge from Jouichirou which is to survive in an elite culinary school where only 10% of the students graduate. Can Souma survive?",
            chapter : [ 
                    { chapter : "Chapter 20" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 19" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 18" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 17" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 16" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 15" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 14" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 13" , link : "javascript:void(0);" } ,
             ]
        });
        arr.push({
            image : "images/manga-chapter2.jpg" ,
            other_name : "アカメが斬る！ , Akame ga Kiru! , Akame ga Kill!",
            author : "tetsuya Tashiro",
            title : "Akame ga Kiru!" ,
            genre : "Action , Cooking , Fantasy , Drama , Tragedy , Romance" ,
            summary : "From Yen Press: Teenage country bumpkin Tatsumi dreams of earning enough money for his impoverished village by working in the Capital - but his short-lived plans go awry when he’s robbed by a buxom beauty upon arrival! Penniless, Tatsumi is taken in by the lovely Lady Aria, but just when his Capital dreams seem in reach yet again, Lady Aria's mansion is besieged by Night Raid - a team of ruthless assassins who targets high-ranking members of the upper class! As Tatsumi is quick to learn, appearances can be deceiving in the Capital, and this team of assassins just might be… the good guys?!",
            chapter : [ 
                    { chapter : "Chapter 20" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 19" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 18" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 17" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 16" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 15" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 14" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 13" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 12" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 11" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 10" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 9" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 8" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 7" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 6" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 5" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 4" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 3" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 2" , link : "javascript:void(0);" } ,
                    { chapter : "Chapter 1" , link : "javascript:void(0);" } ,
             ]
        });
    }

    


    var overviewData = arr[id];
    var dropContainer = $('.drop-container');

    dropContainer.find('#image').attr('src' , overviewData.image);
    dropContainer.find('#other_name').html(overviewData.other_name);
    dropContainer.find('#author').html(overviewData.author);
    dropContainer.find('#title').html(overviewData.title);
    dropContainer.find('#genre').html(overviewData.genre);
    dropContainer.find('#summary').html(overviewData.summary);

    var chapter = "";

    $.each(overviewData.chapter , function(k , v){
            chapter += "<li>";
                chapter += '<a href="'+v.link+'">'+v.chapter+'</a>';
            chapter += "</li>";
    });

    dropContainer.find('.chapter_list > ul').html(chapter);   
}


function build_overview_window(){
    var html = '<div class="drop-container">';
            html += '<div class="drop-list">';
                html += '<div class="container-fluid">';
                    html += '<div class="col-lg-2 col-xs-12">';
                        html += '<img src="#" class="img-reponsive" id="image">';
                    html += '</div>';
                    html += '<div class="col-lg-6 col-xs-12">';
                        html += '<dl class="dl-horizontal">';
                            html += '<dt></dt>';
                            html += '<dd><a href="javascript:void(0);" style="text-decoration:none;"><h3 id="title"></h3></a></dd>';
                            html += '<dt>Other Names</dt>';
                            html += '<dd id="other_name"></dd>';
                            html += '<dt>Genre</dt>';
                            html += '<dd id="genre"></dd>';
                            html += '<dt>Author</dt>';
                            html += '<dd id="author">Tetsuya</dd>';
                            html += '<dt>Summary</dt>';
                            html += '<dd><p class="text-justify" id="summary"></p></dd>';
                        html += '</dl>';
                    html += '</div>';
                    html += '<div class="col-lg-4 col-xs-12">';
                        html += '<div>';
                            html += '<h3>Chapter List</h3>';
                            html += '<a href="JavaScript:void(0);" class="tile-close pull-right"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></a>';
                        html += '</div>';
                        html += '<div>';
                            html += '<nav class="chapter_list">';
                                html += '<ul>';

                                html += '</ul>';
                            html += '</nav>';
                        html += '</div>';
                    html += '</div>';    
                html += '</div>';
            html += '</div>';
        html += "</div>";

    return html;
};