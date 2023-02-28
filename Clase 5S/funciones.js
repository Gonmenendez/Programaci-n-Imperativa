//1. Inches to cm function
function inchesToCm (inches){
    return inches * 2.54 + "cm";
}

console.log(inchesToCm(5));

//2. String tu URL function
function letsUrl (string){
    return "http://www." + string + ".com"
}

console.log(letsUrl('tryingJavascript'));

//3. Exclamation! function
function exclamation (string){
    return string + "!!!!!"
}

console.log(exclamation("I'm learning Javascript"));

//4. Let's get dog aged!!
function dogAged(age){
    return 'You would now be ' + age * 7 + ' if you were a dog';
}

console.log(dogAged(10));

//5. Working-hour worth
function workingHour (salary){
    return 'They pay you ' + salary / 40 + 'U$D for each hour of your work';
}

console.log(workingHour(40000));

//6. CalculadorIMC()
function calculadorIMC(height, weight){
    return 'Your IMC equals ' + weight / (height*height)
}

console.log(calculadorIMC(1.90, 92));

//1. Let's uppercase
function letsUpperCase (string){
    return string.toUpperCase();
}

console.log(letsUpperCase("this will be converted to uppercase"));

//2. Which type of data is it?
function typeOfData (data){
    return typeof data
}

console.log(typeOfData("Hola como andas?"));
console.log(typeOfData(55));
console.log(typeOfData(true));
console.log(typeOfData(null));
console.log(typeOfData(NaN));

//3. Circumference calculator
function circumference (radius){
    return 'The circumference for this radius equals ' + 2 * radius * Math.PI
}

console.log(circumference(7));