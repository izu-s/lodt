const cartas = document.querySelectorAll(".card");
var uno = null;
var colores = ["var(--rojo)","var(--azul)","var(--verde)","var(--amarillo)","#bf80ff","#ff9933"];
var contador = 0;
var bien = 0;
var actuales = [];





cartas.forEach((element)=>{
    element.addEventListener("click", juntar)
    element.value = 0;
})

function juntar(e) {
	if( this.value == 0 ){
		
		if( uno == null ){
			var audio1 = new Audio("../../../audio/click1.wav")
        	audio1.play()
			uno = this;
			this.style.backgroundColor = colores[contador];
			this.value = 1;
		}
		else{
			var audio2 = new Audio("../../../audio/click2.wav")
			audio2.play()
			this.style.backgroundColor = colores[contador];
			this.value = 1;
			contador = contador + 1;
			if( contador >= 6 ){
				contador = 0;
			}
			if( this.classList.contains(uno.classList.item(0)) ){
				bien = bien + 1;
			}
			uno = null;
		}
	}

}

function revisar(){
	document.getElementById("actividad").innerHTML = "<h2 id='act-title'>Relación de columnas</h2> <div id='resultado'>Tuviste bien "+ bien +" aciertos de 6.</div>";
}

function reset() {
	bien = 0;
	actuales = [];
	contador = 0;
	uno = null;
	var one = document.querySelectorAll(".uno");
	var two = document.querySelectorAll(".dos");
	one.forEach((element)=>{
	    element.style.backgroundColor = "var(--gris-claro)";
	})
	two.forEach((element)=>{
	    element.style.backgroundColor = "var(--gris-oscuro)";
	})
	cartas.forEach((element)=>{
	    element.addEventListener("click", juntar)
	    element.value = 0;
	})
}
