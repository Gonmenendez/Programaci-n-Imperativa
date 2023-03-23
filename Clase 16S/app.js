//Arrow functions
//1. Inches to cm
let inchesToCm = inches => inches * 2.54 + 'cm'
console.log(inchesToCm(7));

//2. String to URL
let stringUrl = string => 'http://www.' + string + '.com'
console.log(stringUrl('ArrowFunctions'));

//3. Admiration!
let admiration = string => string.toUpperCase() + '!'
console.log(admiration("I'm getting really excited"));

//4. Dogs age
let dogsAge = age => "Your dog's age equals " + age * 7 + ' years, in human years'
console.log(dogsAge(10));

//5. Hour-worth
let hourWorth = salary => 'Your working-hour is worth to: ' + salary / 40 + 'U$D'
console.log(hourWorth(2000));

//6 calculadorIMC()
let calculadorIMC = (meters, kilograms) => 'Your body mass index is: ' + kilograms / (meters * meters)
console.log(calculadorIMC(1.9, 92));
console.log(calculadorIMC(1.72, 65));

//7. String to uppercase
let upperCase = string => string.toUpperCase()
console.log(upperCase('This string gets uppercased'));

//8. Type of data
let type = data => 'Type of data: ' + typeof data
console.log(type('Hola'));
console.log(type(calculadorIMC));

//9. Circumference calculator
let circumference = radius => 'The circumference for this radius equals: ' + 2 * radius * Math.PI
console.log(circumference(7));


//Callbacks
//Name finder
const names = ['Martin', 'Homero', 'Cosme', 'Steven', 'Adam']
/*let nameFinder = name => {
    for (let i = 0; i < names.length; i++){
        if(names[i] == name){
            return '"' + name + '" found on this array'
        }
    }
}
console.log(nameFinder('Martin'));*/

//Show results
let showResult = (result) => {
    if (result == ''){
        console.log('Name not found')
    } else {
        console.log('Name found')
    }
}

//Name finder - second version
let nameFinder = (name, results) => {
    let found = ''
    for(let i = 0; i < names.length; i++){
        if(names[i] == name){
            found = name
        }
    }
    results(found)
}
nameFinder('Martin', showResult);
nameFinder('Gonzalo', showResult);