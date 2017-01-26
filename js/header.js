$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var height = ($(window).height()) / 2;
    // Do something
    if(scroll > height){
    	$('header').addClass('withbackground');
    }else{
    	$('header').removeClass('withbackground');
    }
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
    	margin:10,
    	lazyLoad:true,
    	items:6,
	});
});

$(document).on('click' , '.tile-close' , function(){
    $(this).closest('.drop-container').fadeOut();
    $('.owl-lazy').parent().removeClass('drop-active').find('.arrow').remove();
});