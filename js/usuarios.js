function validaUsuarios(){

	var valor = document.getElementById("usuario").value; 
	var contra = document.getElementById("contraseña").value
	if((valor == "usuario1" && contra == "diseño") || (valor == "usuario2" && contra == "deinterfaces") || (valor == "usuario3" && contra == "deusuario")){
 		document.getElementById("form_login").submit();

 		/*<---- Esto!!!!*/
	}else{
		window.alert("los datos son incorrectos");
	}
	
	
}
