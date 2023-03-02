//Agregá caminos
let edad = 12;
function ifOdd(){
    if (edad % 2 == 1){
        console.log("Did you know your age is an odd number?");
    }
}

if (edad < 18 && edad >= 0){
    console.log("He can't come to the bar");
    ifOdd();
} else if (edad >= 18 && edad < 21){
    console.log("He can get inside, but he's not allowed to drink");
    ifOdd();
} else if(edad == 21){
    console.log("He can pass and drink alcohol");
    console.log("Congrats! You're now allowed to drink");
    ifOdd();
} else if(edad > 21){
    console.log("He can pass and drink alcohol");
    ifOdd();
} else if(edad < 0){
    console.log("Error, invalid age. Please enter a valid age");
}

//totalAPagar

function totalAPagar(vehiculo, litrosConsumidos){
    let total = 0;

    function ifLitrosConsumidos(){
        if(litrosConsumidos <= 25){
            total += 50
        } else {
            total += 25
        }
    }

    if (vehiculo == "coche"){
        total += (litrosConsumidos * 86);
        ifLitrosConsumidos();
        console.log("Fuel is $" + total)
    } else if (vehiculo == "moto"){
        total += (litrosConsumidos * 70);
        ifLitrosConsumidos();
        console.log("Fuel is $" + total)
    } else if (vehiculo == "autobus"){
        total += (litrosConsumidos * 55);
        ifLitrosConsumidos();
        console.log("Fuel is $" + total)
    }
}

totalAPagar("autobus", 1);

//Local de sandwiches
function sandwichMaker(type, bread, cheese, tomato, lettuce, onion, mayo, mustard){
    let total = 0;

    switch (type){
        case "pollo":
            total += 150
            break;
        case "carne":
            total += 200
            break;
        case "veggie":
            total += 100
            break;
    }

    if (bread == "blanco"){
        total += 50
    } else if (bread == "negro"){
        total += 60
    } else if (bread == "s/gluten"){
        total += 75
    }

    cheese == true ? total += 20 : "";
    tomato == true ? total += 15 : "";
    lettuce == true ? total += 10 : "";
    onion == true ? total += 15 : "";
    mayo == true ? total += 5 : "";
    mustard == true ? total += 5 : "";

    console.log("The final price is $" + total);
}

sandwichMaker("veggie", "s/gluten", true, true, false, false, true, false)

//Extra bonus
//¿Cuál es el número secreto?
function secretNumber (secret){
    if (secret < 1 || secret > 10){
        console.log("You've chosen an invalid number");
    } else if (secret >= 1 && secret <= 10){
        secret == (Math.floor((Math.random() * 10) + 1))? console.log("Congrats! You've guessed the secret number") : console.log("Keep trying, the secret still remain secret");
        /*if (secret == Math.floor((Math.random() * 10) + 1)){
            console.log("Congrats! You've guessed the secret number");
        } else {
            console.log("Keep trying, the secret still remain secret");
        }*/
    }
}
secretNumber(2)

//abrirParacaidas()
function abrirParacaidas(speed, height){
    if (speed < 1000 && height >= 2000 && height < 3000){
        console.log("You must open parachute now");
    } else {
        console.log("Don't shoot the parachute");
    }
}

abrirParacaidas(100, 3000)

//Estructura switch
//Traductor condicional
let usersInput = "pelota";

switch(usersInput){
    case "casa":
        console.log("House");
        break;
    case "perro":
        console.log("Dog");
        break;
    case "pelota":
        console.log("Ball");
        break;
    case "árbol":
        console.log("Tree");
        break;
    case "genio":
        console.log("Genius");
        break;
    default:
        console.log("Invalid word, please enter a valid word for translation");
}

//Valoración de Películas
let userOpinion = "Muy Buena";

switch (userOpinion){
    case "Muy Mala":
        console.log("You chose Muy Mala. We're so sorry" + '\n' + "Thank you for your visit!");
        break;
    case "Mala":
        console.log("You chose Mala. We're sorry" + '\n' + "Thank you for your visit!");
        break;
    case "Mediocre":
        console.log("You chose Mediocre. We hope next one can change your mind" + '\n' + "Thank you for your visit!");
        break;
    case "Buena":
        console.log("You chose Buena. We're glad" + '\n' + "Thank you for your visit!");
        break;
    case "Muy Buena":
        console.log("You chose Muy Buena. We're so glad" + '\n' + "Thank you for your visit!");
        break;
    default:
        console.log("You've chosen an invalid opinion, please enter a new one");
}