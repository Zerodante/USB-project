function validaPassword(pass){
	//Al menos un número, una miníscula y una mayúscula
	//No espacios Mínimo 8 caracteres,
	var re = /^(?=.*\d)(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])\S{8,}$/;
    if(!re.test(pass)){
		alert('La contraseña debe tener al menos 8 caracteres e incluir al menos una mayúscula, una minúscula y un número.');
		return false; 
	}
	return true;
}
//*********************************************************************************
//Validacion de campos de texto No Vacios
//*********************************************************************************
function vacio(q)
{	for ( i = 0; i < q.length; i++ )
	{	if ( q.charAt(i) != " " )
		{	return true	}
    }
    return false
}

function validarEmail(valor) {
if (/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(valor))
	{return (true)}
else
	{return (false);}
}

//Valida que El Campo No Esté Vacio y No Tenga Solo Espacios en Blanco
function validar(formulario, flag) {
	 if(formulario.correo.value == ''){
		alert('Inserta tu correo electrónico.'); formulario.correo.focus(); return false; }
	else if ( !validarEmail(formulario.correo.value))
	{	alert("La dirección del Correo Electrónico es incorrecta !");formulario.correo.focus(); return false; }
	//else if(formulario.usuario.value == ''){
	//	alert('Inserta tu nombre de usuario.'); formulario.usuario.focus(); return false; }
	else if(formulario.tel_casa.value == ''){
		alert('Inserta tu teléfono de casa.'); formulario.tel_casa.focus(); return false; }
	else if(formulario.tel_cel.value == ''){
		alert('Inserta tu número de celular.'); formulario.tel_cel.focus(); return false; }
	else if(formulario.fec_nac.value == ''){
		alert('Inserta tu fecha de nacimiento.'); formulario.fec_nac.focus(); return false; }
	else if(formulario.estado.value == ''){
		alert('Inserta tu estado.'); formulario.estado.focus(); return false; }
	else if(formulario.ciudad.value == ''){
		alert('Inserta tu ciudad.'); formulario.ciudad.focus(); return false; }
	else if(formulario.dele_muni.value == ''){
		alert('Inserta tu delegación o municipio.'); formulario.dele_muni.focus(); return false; }
	else if(!formulario.terminos.checked){
		alert('Debes aceptar los términos y condiciones.'); formulario.terminos.focus(); return false; }
	else if(formulario.estado.value==''){
		alert('Debes seleccionar un estado.'); formulario.estado.focus(); return false; }
	else if(formulario.pass1.value != '' || formulario.pass2.value != ''){
		if(formulario.pass1.value == ''){
			alert('Inserta tu contraseña de usuario.'); formulario.pass1.focus(); return false; }
		else if(formulario.pass2.value == ''){
			alert('Inserta tu contraseña de usuario nuevamente.'); formulario.pass2.focus(); return false; }
		else if(/\s/.test(formulario.pass1.value)){
			alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
		else if(/\s/.test(formulario.pass2.value)){
			alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
		else if(!validaPassword(formulario.pass1.value)||!validaPassword(formulario.pass2.value)){
			alert('La contraseña debe tener al menos 8 caracteres e incluir al menos una mayúscula, una minúscula y un número.'); formulario.pass1.focus(); return false; }
		else if(formulario.pass1.value!=formulario.pass2.value){
			alert('Las contraseñas no coinciden.'); formulario.pass1.focus(); return false; }
	}else if (flag==0){
		if(formulario.pass1.value == ''){
			alert('Inserta tu contraseña de usuario.'); formulario.pass1.focus(); return false; }
		else if(formulario.pass2.value == ''){
			alert('Inserta tu contraseña de usuario nuevamente.'); formulario.pass2.focus(); return false; }
		else if(/\s/.test(formulario.pass1.value)){
			alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
		else if(/\s/.test(formulario.pass2.value)){
			alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
		else if(!validaPassword(formulario.pass1.value)||!validaPassword(formulario.pass2.value)){
			alert('La contraseña debe tener al menos 6 caracteres e incluir al menos una mayúscula, una minúscula y un número.'); formulario.pass1.focus(); return false; }
		else if(formulario.pass1.value!=formulario.pass2.value){
			alert('Las contraseñas no coinciden.'); formulario.pass1.focus(); return false; }
	}
	else {return true; }
  }
  
  //Valida que El Campo No Esté Vacio y No Tenga Solo Espacios en Blanco
function validar2(formulario) {
	 if(formulario.correo.value == ''){
		alert('Inserta tu correo electrónico.'); formulario.correo.focus(); return false; }
	else if ( !validarEmail(formulario.correo.value))
	{	alert("La dirección del Correo Electrónico es incorrecta !");formulario.correo.focus(); return false; }
	else if(formulario.usuario.value == ''){
		alert('Inserta tu nombre de usuario.'); formulario.usuario.focus(); return false; }
	else if(/\s/.test(formulario.pass1.value)){
		alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
	else if(/\s/.test(formulario.pass2.value)){
		alert('La contraseña no puede incluir espacios, inténtelo nuevamente.'); formulario.pass2.focus(); return false; }
	else if(formulario.tel_casa.value == ''){
		alert('Inserta tu teléfono de casa.'); formulario.tel_casa.focus(); return false; }
	else if(formulario.tel_cel.value == ''){
		alert('Inserta tu número de celular.'); formulario.tel_cel.focus(); return false; }
	else if(formulario.fec_nac.value == ''){
		alert('Inserta tu fecha de nacimiento.'); formulario.fec_nac.focus(); return false; }
	else if(formulario.ciudad.value == ''){
		alert('Inserta tu ciudad/estado.'); formulario.ciudad.focus(); return false; }
	else if(formulario.dele_muni.value == ''){
		alert('Inserta tu delegación o municipio.'); formulario.dele_muni.focus(); return false; }
	else if(!formulario.terminos.checked){
		alert('Debes aceptar los términos y condiciones.'); formulario.terminos.focus(); return false; }
	else if(formulario.estado.value==''){
		alert('Debes seleccionar un estado.'); formulario.estado.focus(); return false; }
	else if((!validaPassword(formulario.pass1.value) && formulario.pass1.value!="")||(!validaPassword(formulario.pass2.value)&& formulario.pass2.value!="")){
		formulario.pass1.focus(); return false; }
	else if(formulario.pass1.value!=formulario.pass2.value){
		alert('Las contraseñas no coinciden.'); formulario.pass1.focus(); return false; }
	else {return true; }
  }
  
 function numerico(e)
{	var key; 
	var keychar;
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	if ((key==null) || (key==0) || (key==8) || (key==9) || (key==27) )
	   return true;
	else if ((("1234567890.").indexOf(keychar) > -1))
	   return true;
	else
	   return false;
}

function alfanumerico(e)
{
	var key;
	var keychar;
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	// control keys
	if ((key==null) || (key==0) || (key==8) ||
		(key==9) || (key==27) )
	   return true;

	// alphas and numbers
	else if ((("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890áéíóúÁÉÍÓÚ@.,/-_").indexOf(keychar) > -1))
	   return true;
	else
	   return false;
}




function alfabetico(e)
{
	var key;
	var keychar;
	if (window.event)
	   key = window.event.keyCode;
	else if (e)
	   key = e.which;
	else
	   return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	// control keys
	if ((key==null) || (key==0) || (key==8) ||
		(key==9) || (key==27) )
	   return true;

	// alphas and numbers
	else if ((("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáéíóú .,").indexOf(keychar) > -1))
	   return true;
	else
	   return false;
}
