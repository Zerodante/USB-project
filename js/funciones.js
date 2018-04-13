(function(){
    $("#enviar").click(function() {
 
        var nombre = $("#nombre").val();
            email = $("#email").val();
            validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
            mensaje = $("#mensaje").val();
            empresa = $("#empresa").val();
            telefono = $("#telefono").val();
 
        if (nombre == "") {
            $("#nombre").focus();
            alert("Ingrese su nombre");
            return false;
        }else if(email == "" || !validacion_email.test(email)){
            $("#email").focus();    
            alert("Ingrese su correo electr¨®nico");
            return false;
        }else if(mensaje == ""){
            $("#mensaje").focus();
            alert("Ingrese su mensaje y/o comentarios");
            return false;
        }else{
            $('.ajaxgif').removeClass('hide');
            var datos = 'nombre='+ nombre + '&email=' + email + '&mensaje=' + mensaje + '&empresa=' + empresa +'&telefono=' + telefono;
            $.ajax({
                type: "POST",
                url: "envio.php",
                data: datos,
                success: function() {
                $('#formid').each (function(){
                this.reset();
                 });
                    $('.ajaxgif').hide();
                    $('.msg').text('Gracias por contactarnos. Nos comunicaremos a la brevedad').addClass('msg_ok').animate({ 'right' : '130px' }, 300);  
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg').text('Error de envio, intenta nuevamente').addClass('msg_error').animate({ 'right' : '130px' }, 300);                 
                }
            });
            return false;
        }
 
    });
})();
var flagServicios=false;
var serviciosClick='';
var basepath='resourcesGIN/imgGIN/inicio/';
function toogleColorServicios(element){
	if(element.src!=basepath+serviciosClick+'-a.png'){
		if (flagServicios==false){
			var valor=element.src.substring(0, element.src.length - 4);
			element.setAttribute('src', valor+'-a.png');
			flagServicios=true;
		}else{
			var valor=element.src.substring(0, element.src.length - 6);
			element.setAttribute('src', valor+'.png');
			flagServicios=false;
		}	
	}else{
		if (flagServicios==false){
			flagServicios=true;
		}else{
			flagServicios=false;
		}	
	}
}
function toogleClickServicios(servSelect){
	var serviciosArray = ['seguros2','servicios2','beneficios2','descuentos2'];
	var serv;
	for (var i=0; i<serviciosArray.length;i++){
		if (serviciosArray[i]!=servSelect){
			serv = document.getElementById(serviciosArray[i]);
			serv.setAttribute('src',basepath+serviciosArray[i].substring(0,serviciosArray[i].length-1)+'.png')
		}else{
			if(serviciosClick!=servSelect.substring(0,servSelect.length-1)){
				document.getElementById(serviciosArray[i]).setAttribute('src',basepath+servSelect.substring(0,servSelect.length-1)+'-a.png' )
				serviciosClick=servSelect.substring(0,servSelect.length-1);
			}else{
				document.getElementById(serviciosArray[i]).setAttribute('src',basepath+servSelect.substring(0,servSelect.length-1)+'.png' )
				serviciosClick='';
				flagServicios=false;
				toogleColorServicios(document.getElementById(serviciosArray[i]))
			}
		}
	}
}

function tooglePromociones(promSelect){
	var prom;
	//var promocionesArray = ['restaurantes','bwigo','cuponeras','salud','spa','viajes','cancun'];
	var promocionesArray = ['restaurantes','spa','redes'];
	var baspath = 'resourcesGIN/imgGIN/promociones/';
	var extra='';
	for (var i=0; i<promocionesArray.length;i++){
		if (promocionesArray[i]!=promSelect){
			extra='.png';
		}else{
			extra='-01.png';
		}
		prom = document.getElementById(promocionesArray[i]);
		prom.setAttribute('src',baspath+promocionesArray[i]+extra);
	}
	var fondo = document.getElementById('promo');
	fondo.setAttribute('style',"background-image: url('resourcesGIN/imgGIN/promociones/fondo-"+promSelect+".jpg'); background-repeat: no-repeat; background-size: 100%;");
}
