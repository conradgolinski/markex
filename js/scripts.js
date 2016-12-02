$(function() {

window.onscroll = function () { 
		    var doc = document.body;
		    var scrollPosition = doc.scrollTop;
			var slider = $("#slider").offset();
 if(scrollPosition >= slider.top){
		    	$('#top-one').stop().fadeIn(200);
		    }
		    else {
				$('#top-one').stop().fadeOut(200);
		    }
};

$(window).on('touchmove',function(){
		    var doc = document.body;
		    var scrollPosition = doc.scrollTop;
			var slider = $("#slider").offset();
			 if(scrollPosition >= slider.top){
		    	$('#top-one').stop().fadeIn(200);
		    }
		    else {
				$('#top-one').stop().fadeOut(200);
		    }

});

   function width() {
	if ( $(window).width() >= 768 &&  $(window).width() < 960) {
		$('.navi').hide();
		  window.onscroll = function () { 
		    var doc = document.body;
		    var scrollPosition = doc.scrollTop;
			var slider = $("#slider").offset();

			
		    if(scrollPosition >= slider.top){
		    	$('#top-one').stop().fadeIn(200);
		    }
		    else {
				$('#top-one').stop().fadeOut(200);
		    }

		    if(scrollPosition >= slider.top+20){
		    	$('nav section#menu ol#menu').css({'position':'fixed','top':'0','margin-top':'0'});
		    }
		    else {
		    	$('nav section#menu ol#menu').css({'position':'relative','left':'0','left':'0','margin-top':'40px'});
		    }
		   }; 
	}
	else if($(window).width() >= 960){
			$('.navi').hide();
		  window.onscroll = function () { 
		    var doc = document.body;
		    var scrollPosition = doc.scrollTop;
			var slider = $("#slider").offset();

			
		    if(scrollPosition >= slider.top){
		    	$('#top-one').stop().fadeIn(200);
		    }
		    else {
				$('#top-one').stop().fadeOut(200);
		    }

		      if(scrollPosition >= 197){
		    	$('nav section#menu ol').css({'position':'fixed','top':'0','left':'50%','transform':'translate(-50%,-50%)','margin-top':'40px'});
		    }
		    else {
		    	$('nav section#menu ol').css({'position':'relative','left':'0','transform':'translate(0%,0%)','margin-top':'40px'});
		    }
		   }; 

	}
	else if ($(window).width() < 768) {}
	
   }
$(window).resize(width);

if($(window).width() < 768) {
	$('.navi').show();
        $('.navi').addClass('left');
}

	$('.navi i.fa.fa-bars').on('click',function(){

		$('nav section#menu ol').toggleClass("left");
		});


if($(window).width() >= 960) {
  window.onscroll = function () { 
		    var doc = document.body;
		    var scrollPosition = doc.scrollTop;
			var slider = $("#slider").offset();

			
		    if(scrollPosition >= slider.top){
		    	$('#top-one').stop().fadeIn(200);
		    }
		    else {
				$('#top-one').stop().fadeOut(200);
		    }

		    if(scrollPosition >= 197){
		    	$('nav section#menu ol').css({'position':'fixed','top':'0','left':'50%','transform':'translate(-50%,-50%)','margin-top':'40px'});
		    }
		    else {
		    	$('nav section#menu ol').css({'position':'relative','left':'0','transform':'translate(0%,0%)','margin-top':'40px'});
		    }
		  };

}

$('.circle').on("click",function(e){
	$('.circle').removeClass("active");
	$(e.target).addClass("active");

	
	$('section h2').stop().css("display","none").stop();
	$('section p').stop().css("display","none").stop();

	if($(e.target).hasClass("t1")) {
		
		$('section#slider').css("background-image","url(images/slide_1.jpg)");
	
		$('section h2.t1').stop().css("display","block").stop();
		$('section p.t1').stop().css("display","block").stop();
	}
	else if($(e.target).hasClass("t2"))
	{
		
		$('section#slider').css("background-image","url(images/slide_2.jpg) ");
	
		$('section h2.t2').stop().css("display","block").stop();
		$('section p.t2').stop().css("display","block").stop();
	}
	else if($(e.target).hasClass("t3"))
	{

		$('section#slider').css("background-image","url(images/slide_3.jpg)");
		
		$('section h2.t3').stop().css("display","block").stop();
		$('section p.t3').stop().css("display","block").stop();
	}

});
$('a#u').on("mouseover",function(){
	var i = $(this).parent().parent().parent();
	$(i).css("background","#00A1D9");
});
$('a#u').on("mouseout",function(){
	var i = $(this).parent().parent().parent();
	$(i).css("background","#43464C");
});



});
	

