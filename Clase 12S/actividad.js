let alicia = [23, 82, 46]
let bob = [45, 8, 32]

let participantA = 0;
let participantB = 0;

function roundWinner(arrayScoreA, arrayScoreB){
    for(let i = 0; i < arrayScoreA.length || i <arrayScoreB.length; i++){
        if (arrayScoreA[i] > arrayScoreB[i]){
            participantA += 1;
        } else if (arrayScoreA[i] < arrayScoreB[i]){
            participantB += 1;
        } else if (arrayScoreA[i] == arrayScoreB[i]){
            ''
        }
    }
}

function getWinner (totalAScore, totalBScore){
    if (totalAScore > totalBScore){
        console.log('Alicia is the winner');
    } else if (totalAScore < totalBScore){
        console.log('Bob is the winner');
    } else if (totalAScore == totalBScore){
        console.log('There is no winner, it is a draw');
    }
}

roundWinner(alicia, bob)
getWinner(participantA, participantB)


//Extra bonus
function printOneToHoundred (numberA, numberB){
    for (let i = 1; i <= 100; i++){
        if(i % numberA != 0 && i % numberB != 0){
            console.log(i);
        } else if (i % numberA == 0 && i % numberB != 0){
            console.log("Digital");
        } else if (i % numberA != 0 && i % numberB == 0){
            console.log("House");
        } else {
            console.log("Digital House");
        }
    }
}

printOneToHoundred(3, 5)

//sumArray()... Reloaded
function sumaArray(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    console.log(total);
}

sumaArray(alicia)

//Joinable
let arrayToString = ['I', ' ','am', ' ', 'trying']

function stringsJoin (array){
    let string = '';
    for(let i = 0; i < array.length; i++){
        string += array[i]
    }
    console.log(string);
}

stringsJoin(arrayToString)