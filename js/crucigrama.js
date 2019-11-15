var palabras1 = ["handheld", "graphics", "console", "release", "joystick"];
var palabras2 = ["ancestor", "skeleton", "tombstone", "custom", "soul"];

function revisar1(){
  revisar(palabras1);
}

function revisar2() {
  revisar(palabras2);
}

function revisar(palabras){
  var respuestas = []
  var temp = [];
  var c = "";
  var v = [];
  for (var i = 0; i < palabras.length; i++) {
    for (var j = 0; j < palabras[i].length; j++) {
      c = (i+1) + "-" + (j+1);
      v = document.getElementsByClassName(c);
      temp.push(v[0].value);
    }
    respuestas.push(temp.join(""));
    temp = [];
  }
      console.log(respuestas);

  var bien = 0;

  for (var i = 0; i < palabras.length; i++) {
    if( palabras[i] === respuestas[i] )
      bien = bien + 1;
  }

  alert("Tuviste bien "+ bien + " palabras de " + palabras.length+".");
}

