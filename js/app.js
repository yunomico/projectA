$(document).ready(function(){
    var displaySlides = function(data) {
        
        var slide = $('#' + data.id);
        var carousel = $('<div>', {'id': data.id + '-carousel', 'class': 'owl-carousel owl-theme'});
        
        slide.append(carousel);

        $(data.manga).each(function(index, manga) {
            var img = $('<img>', {'class': 'tile', 'src': manga.src, 'alt': manga.title , 'data-id' : index});
            carousel.append(img);
        })
        .promise()
        .done(function() {
            var owl = $('#' + data.id + '-carousel');
            owl.owlCarousel({
            margin:-5,
            loop: false,   //breaks title on hover sometimes
        
            nav: true,
            navText: ['<span class="glyphicon glyphicon-menu-left" aria-hidden="true"></span>','<span class="glyphicon glyphicon-menu-right" aria-hidden="true"></span>'], // need to replace with actual nav buttons
            // slideBy: 'page', //doesn't work?
            dots: false ,
            lazyLoad:true ,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:8,
                    nav:true,
                    loop:false
                }
            }
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
        array.push({'title': 'super duper awesome long title here ' + i, 'src': 'https://placehold.it/250x250&text=' + i, 'id': 'some id'});
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
       $('.owl-item').removeClass('overview-active').find('.remove-this').remove();
    });

});

$(document).on('mouseover' , ".tile" , function(){
    var title = $(this).attr('alt');

    if(!$(this).parent().hasClass('overview-active')){
        $('.owl-item').removeClass('overview-active');
        $(this).addClass('overview-active');

        $(".owl-item").find('.remove-this').remove();
    }


    if(!$(this).parent().find('.arrow').length){
        var small = $('<small>').text(title);
        var arrow = $('<span>', {'class': 'arrow remove-this'});

        var img = $(this).parent().find('img');
        img.after(arrow);

        var mlen = img.width() / 2;
 
        arrow.css("margin-left" , (mlen - 10)+"px");

        append_overview( $(this) , img.data('id') );
    }
    
});

function append_overview(a , id){
    var html = build_overview_window();
 
    if( !a.closest('.app-wrap').next().hasClass('drop-container') ){
        $('.drop-container').remove();
        a.closest('.app-wrap').after(html);
        $('.drop-container').hide().fadeIn();
    }

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