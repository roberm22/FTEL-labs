function vaciar() {
  document.getElementById("n1").value = "";
}

function cuadrado() {
  var num = document.getElementById("n1"); 
  num.value = num.value * num.value;
}

function inverso() {
  var num = document.getElementById("n1"); 
  num.value = 1/num.value;
}

function raiz() {
  var num = document.getElementById("n1"); 
  num.value = Math.sqrt(num.value);
}

function factorial() {
  var num = document.getElementById("n1"); 
  var resultado = 1;
  for (var i=1; i<=num.value; i++) {
           resultado = resultado * i;
           }
  num.value = resultado;
}

function cubo() {
	var num = document.getElementById("n1"); 
        num.value = num.value * num.value * num.value;
}

function sen() {
	var num = document.getElementById("n1"); 
        num.value = Math.sin(num.value);
}





