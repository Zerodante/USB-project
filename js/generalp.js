
//menu responsive
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
//fin


//Start of Zopim Live Chat Script

window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="//v2.zopim.com/?2SgL3hGXJH5u3LrwN4ptgntdfeLv6PDE";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");

//End of Zopim Live Chat Script


//owlCarousel
$(document).ready(function() {

  var owl = $("#owl-demo");

  owl.owlCarousel({

      itemsCustom : [
        [0, 4],
        [450, 8],
        [600, 8],
        [700, 8],
        [1000, 10],
        [1200, 10],
        [1400, 10],
        [1600, 10]
      ],
      navigation : true,
	   navigationText: "",
      pagination: false

  });

  // Custom Navigation Events
  $(".next").click(function(){
    owl.trigger('owl.goTo',12);
  })
  $(".prev").click(function(){
    owl.trigger('owl.goTo',0);
  })


});
//fin


//para cambiar a activo la clase
    $(document).ready(function() {
      $('#owl-demo.nav-tabs li a').click(function(){      //Click on a navigation item
        $('.nav-tabs li').removeClass('active'); //Remove Active style of item
        $('.tab-pane .tabcontent').removeClass('active');    //Hide the tab content
      });
  });
  //fin
  
  
//cambio de clase a activo en imagenes
function tooglepromocion(promSelect){
	var prom;

	var promocionArray = ['segurotra','seguroauto','serviciofun','serviciosalud','serviciodent','servicioopt','servicioani','serviciotel','miadelanto','asesohip','edu','viajes','red','c','call4'];

	var baspath = '../resourcesGIN/imgGIN/privada/<?php echo $cardtype?>/bot/';
	var extra='';
	for (var i=0; i<promocionArray.length;i++){
		if (promocionArray[i]!=promSelect){
			extra='.png';
		}else{
			extra='-01.png';
		}
		prom = document.getElementById(promocionArray[i]);
		prom.setAttribute('src',baspath+promocionArray[i]+extra);

	}

}
	
  function tooglebot(botselect){// esta funcion cambia las imagenes seleccionadas (en gris) y las no seleccionadas (en blanco) mediante el id de cada imagen.
    var bot;
    var botpath = '../resourcesGIN/imgGIN/privada/<?php echo $cardtype?>/ICONOS/';
    var extr='';
    var classList = document.getElementById(botselect).className.split(/\s+/); //consigue las clases de del elemento y las separa
    for (var i = 0; i < classList.length; i++){ //hace iteraciones de las clases obtenidas
      if (classList[i] !== 'img-responsive') { //separa las clases no deseadas de las que si
        var clase=classList[i]; //le da el valor a "clase de las clases deseadas"
      }
    }
    $('.'+clase).each(function(i, obj)  {
      var a=this.id.charAt(this.id.length - 1); //almacena en a el ultimo caracter del id
      var b=this.id.charAt(this.id.length - 2); //almacena en b el penultimo caracter del id
      var igm;
      if(!isNaN(a)){// si a es un numero
           if(!isNaN(b)){// si b es un numero
                igm=this.id.substr(0, this.id.length - 2);//igm guarda la cadena de characteres del id sin numeros al final.
           } else {
                igm=this.id.substr(0, this.id.length - 1);//igm guarda la cadena de characteres del id excepto el ultimo caracteres.
           }
      }else {
            igm=this.id;//si no tiene numero en los ultimos dos caracteres se le da a la variable igm el valor del id
      }
      if (this.id!=botselect){
        extr=igm+'.png'; //si no es la imagen seleccionada se le asigna la imagen sin seleccionar o en blanco
      }else{
        extr=igm+'-a.png';// si es la imagen seleccionada se le asigna la imagen  seleccionada o en gris
      }
      $(this).attr("src", botpath+extr); //se actualica el src de la imagen.
    });


      $('html, body').animate({
          scrollTop: $("#horba").offset().top
      }, 500);


  }
    //fin
	
//script para el token de mapfre
$('#linkMapfre').click(function(){
	$('#formMapfre').submit();
});
//fin



//Plug-in Initialisation



$(document).ready(function() {

//Vertical Tab

$('#parentVerticalTab').easyResponsiveTabs({

type: 'vertical', //Types: default, vertical, accordion

width: 'auto', //auto or any width like 600px

fit: true, // 100% fit in a container

closed: 'accordion', // Start closed if in accordion view

tabidentify: 'hor_1', // The tab groups identifier

activetab_bg: 'rgb(147,149,152)', // background color for active tabs in this group

inactive_bg: 'rgb(85,87,89)', // background color for inactive tabs in this group

active_content_border_color: 'rgb(147,149,152)' // border color for active tabs contect in this group so that it matches the tab head border

});

});


