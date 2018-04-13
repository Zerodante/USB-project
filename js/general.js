
/* script para el menu responsive*/
	$(document).ready(function(){
    $(".one-btn").click(function(){
        $("#seguros").collapse('toggle');
        $("#servicios").collapse('hide');
        $("#beneficios").collapse('hide');
        $("#descuentos").collapse('hide');
    });
    $(".two-btn").click(function(){
        $("#seguros").collapse('hide');
	$("#servicios").collapse('toggle');
        $("#beneficios").collapse('hide');
        $("#descuentos").collapse('hide');
    });
    $(".tree-btn").click(function(){
        $("#seguros").collapse('hide');
	$("#servicios").collapse('hide');
        $("#beneficios").collapse('toggle');
        $("#descuentos").collapse('hide');
    });
    $(".four-btn").click(function(){
        $("#seguros").collapse('hide');
	$("#servicios").collapse('hide');
        $("#beneficios").collapse('hide');
        $("#descuentos").collapse('toggle');
    });

});


	$(document).ready(function(e) {
        $('.res-nav_click').click(function(){
		$('ul.toggle').slideToggle(600)
			});

	$(document).ready(function() {
$(window).bind('scroll', function() {
         if ($(window).scrollTop() > 0) {
             $('#header_outer').addClass('fixed');
         }
         else {
             $('#header_outer').removeClass('fixed');
         }
    });

	  });

		    });
function resizeText() {
	var preferredWidth = 767;
	var displayWidth = window.innerWidth;
	var percentage = displayWidth / preferredWidth;
	var fontsizetitle = 25;
	var newFontSizeTitle = Math.floor(fontsizetitle * percentage);
	$(".divclass").css("font-size", newFontSizeTitle)
}
/*fin del menu responsive*/


//Start of Zopim Live Chat Script

window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?2SgL3hGXJH5u3LrwN4ptgntdfeLv6PDE";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

//End of Zopim Live Chat Script



//script de ajax para revisar si usuario y contraseña con correctos


//fin del script de revision


//inicio de script para la animacion WOW
    wow = new WOW(
      {
        animateClass: 'animated',
        offset:       80
      }
    );
    wow.init();
    document.getElementById('').onclick = function() {
      var section = document.createElement('section');
      section.className = 'wow fadeInDown';
	  section.className = 'wow shake';
	  section.className = 'wow zoomIn';
	  section.className = 'wow lightSpeedIn';
	  section.className = 'wow fadeinLeft';
      this.parentNode.insertBefore(section, this);
    };
 

  
	$(window).load(function(){

		$('a').bind('click',function(event){
			var $anchor = $(this);

			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 91
			}, 1500,'easeInOutExpo');
			/*
			if you don't want to use the easing effects:
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000);
			*/
			event.preventDefault();
		});
	})
//fin del script de animacion


//inicio del script ??
$(document).ready(function() {
	$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: true,
		width		: '40%',
		height		: '50%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'fade',
		closeEffect	: 'elastic'
	});
});
//fin del script??

