var numero1 = prompt('Ingresa el primer número');
var numero2 = prompt('Ingresa el segundo número'); 

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

document.getElementById('oper-resta-num1').innerHTML = numero1;
document.getElementById('oper-resta-num2').innerHTML = numero2;

document.getElementById('resul-resta').innerHTML = resta;

document.getElementById('oper-multi-num1').innerHTML = numero1;
document.getElementById('oper-multi-num2').innerHTML = numero2;

document.getElementById('resul-multi').innerHTML = multiplicar;

document.getElementById('oper-dividir-num1').innerHTML = numero1;
document.getElementById('oper-dividir-num2').innerHTML = numero2;

document.getElementById('resul-dividir').innerHTML = division;

document.getElementById('oper-resto-num1').innerHTML = numero1;
document.getElementById('oper-resto-num2').innerHTML = numero2;

document.getElementById('resul-resto').innerHTML = resto;