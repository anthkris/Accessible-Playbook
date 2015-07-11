
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('#standards').hover(function() 
{ 	//mousein
    $('body').css("background", "url('./img/instructions.png') 50% 0% / cover fixed rgb(28,28,28)");
}, function(){
	//mouseout
	$('body').css("background", "rgb(28,28,28)");
}); 

$('#accessible-first').hover(function() 
{ 	//mousein
    $('body').css("background", "url('./img/accessible-first.png') 50% 0% / cover fixed rgb(28,28,28)");
}, function(){
	//mouseout
	$('body').css("background", "rgb(28,28,28)");
}); 

$('#accessible-design').hover(function() 
{ 	//mousein
    $('body').css("background", "url('./img/good-design.png') 50% 0% / cover fixed rgb(28,28,28)");
}, function(){
	//mouseout
	$('body').css("background", "rgb(28,28,28)");
}); 

$('#do-best').hover(function() 
{ 	//mousein
    $('body').css("background", "url('./img/do-best.png') 50% 0% / cover fixed rgb(28,28,28)");
}, function(){
	//mouseout
	$('body').css("background", "rgb(28,28,28)");
}); 

$('#escalators').hover(function() 
{ 	//mousein
    $('body').css("background", "url('./img/escalators.png') 50% 0% / cover fixed rgb(28,28,28)");
}, function(){
	//mouseout
	$('body').css("background", "rgb(28,28,28)");
}); 