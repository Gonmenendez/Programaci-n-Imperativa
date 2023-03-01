//Level 1 - Addition, subtraction, multiplication and division
function suma(a,b){
    return a + b;
}

function resta(a,b){
    return a - b;
}

function multiplicacion(a,b){
    return a * b;
}

function division(a,b){
    return a / b;
}


//Level 2
console.log('-------------- Operating test / Calculator --------------');
console.log(suma(10, 5));
console.log(resta(10, 5));
console.log(multiplicacion(10, 5));
console.log(division(10, 5));
console.log(division(0, 5));
console.log(division(5, 0));

//Level 3
function cuadradoDeUnNumero(number){
    return multiplicacion(number, number)
}

function promedioDeTresNumeros(num1, num2, num3){
    return division((suma(suma(num1, num2), num3)), 3)
}

function calcularPorcentaje(total, porcentage){
    return multiplicacion(division(total, 100), porcentage)
}

function generadorDePorcentaje(number, total){
    return division(multiplicacion(number, 100), total)
}

console.log(cuadradoDeUnNumero(4));
console.log(promedioDeTresNumeros(9, 8, 10));
console.log(calcularPorcentaje(300, 15));
console.log(generadorDePorcentaje(2, 200));