var premier_nombre;
var deuxieme_nombre;
function multiplication() {
 var premier_nombre = document.getElementById('premier_nombre').value;
 var deuxieme_nombre = document.getElementById('deuxieme_nombre').value;
 var number3 = Math.floor(premier_nombre);
 var result = (number3*deuxieme_nombre);
 alert(result);
}
