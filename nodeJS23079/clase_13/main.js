let numero1 = 20;
let numero2 = 8;

var suma = parseInt(numero1) + parseInt(numero2);
var resta = parseInt(numero1) - parseInt(numero2);
var multiplicar = parseInt(numero1) * parseInt(numero2);
var division = parseInt(numero1) / parseInt(numero2);
var resto = parseInt(numero1) % parseInt(numero2);

document.getElementById('num-1').innerHTML = numero1;
document.getElementById('num-2').innerHTML = numero2;

console.log(suma, resta, multiplicar, division);

document.getElementById('oper-suma-num1').innerHTML = numero1;
document.getElementById('oper-suma-num2').innerHTML = numero2;

document.getElementById('resul-suma').innerHTML = suma;