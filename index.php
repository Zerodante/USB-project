<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="Sistema de Gestión Universitaria Luna">
	<title>Universidad Simón Bolívar / Profesores</title>
	<link rel="icon" href="favicon.ico" type="image/x-icon" >
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" >
	<link rel="stylesheet" href="css/bootstrap.min.css"  media="screen">
	<link rel="stylesheet" href="css/facebox.css" type="text/css" media="screen" >
	<link rel="stylesheet" href="css/font-awesome.min.css" media="screen" >
	<link rel="stylesheet" href="css/styles.css">
	<link rel="stylesheet" href="css/usb.css">
	<link rel="stylesheet" href="css/mant.css">

	<script src="js/jquery-2.1.4.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/facebox.js"></script>
	<script src="js/main.js"></script>
	<script>
		$(document).ready(function()
		{
			$('a[rel*=facebox]').facebox();
		})
	</script>

</head>
	
<body>
	<div class="preloader" name="preloader"><img src="images/loading.gif"></div>
	<header class="navbar navbar-bright navbar-fixed-top" role="banner">
		<div class="container">
			<div class="navbar-header">
				<a href="index.php" class="navbar-brand" style="padding:0;"><img src="images/logo_blanco.png" alt="Universidad Simón Bolivar" height="50"></a>
			</div>
			<nav class="collapse navbar-collapse" role="navigation">
			
			
			</nav>
		</div>
	</header>

	
	<section>
		<article class="container">
		
				<form class="form-signin" method="post" action="" autocomplete="off" style="margin-top:3em;">
					<div class="row">
						<div class="col-sm-4"></div>
						<div class="col-sm-4">
							<h4 class="form-signin-heading">Por favor ingrese su matrícula y contraseña.</h4>
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4"></div>
						<div class="col-sm-4">
							<label for="matricula" class="sr-only" >Matrícula</label>
							<input type="text" name="matricula" id="matricula" class="form-control" placeholder="Matrícula" required autofocus value="">
						</div>
					</div>
					<div class="row" style="margin-top:2em;">
						<div class="col-sm-4"></div>
						<div class="col-sm-4">
							<label for="passwd" class="sr-only" >Contraseña</label>
							<input type="password" name="passwd" id="passwd" class="form-control" placeholder="Contraseña" required value="">
						</div>
					</div>
					<div class="row">
						<div class="col-sm-4"></div>
						<div class="col-sm-4">
							<div class="checkbox">
								<label>
								 <a href="recupera.php"> ¿Olvido su contraseña?</a>
								</label>
							</div>
						</div>
					</div>
					<div class="row" >
						<div class="col-sm-4"></div>
						<div class="col-sm-4">
							<input type="hidden" name="w" id="w" value=""><input type="hidden" name="h" id="h" value="">
							<button class="btn btn-lg btn-primary btn-block" type="submit">Aceptar</button>
						</div>
					</div>

				</form>
				<script>
					document.getElementById('w').value = screen.width;
					document.getElementById('h').value = screen.height;
				</script>
			</div>
			
		</article>
	</section>

	<div class="prefooter">&nbsp;</div>
	<footer class="footer visible-md visible-lg">
		<div class="container">
			<div style="float:left;">Per Scientiam ad Veritatem</div>
			<div style="float:right;">viernes 13 de abril de 2018</div>
		</div>
	</footer>
</body>
</html>