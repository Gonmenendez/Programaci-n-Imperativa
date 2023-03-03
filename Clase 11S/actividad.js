let movies = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

function toUpperCase(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toUpperCase()
    }
}

toUpperCase(movies)
console.log(movies);


let movies2 =["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];

//This function adds movies from movies2 in movies. But movies2 still having it's items
/*
function allMovies(array1, array2){
    for(let i = 0; i < array2.length; i++){
        array1.push(array2[i].toUpperCase())
    }
}
console.log(movies2);
*/

//This function transfers movies from movies2 to movies
let deleted;
function allMovies (array1, array2){
    deleted = array2.pop();
    let arrayLength = array2.length;
    for (let i = 0; i < arrayLength; i++) {
        array1.push(array2.shift().toUpperCase())
    }
}

allMovies(movies, movies2)
console.log(movies);
console.log(deleted);


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScores(array1, array2){
    for (let i = 0; i < array1.length; i++){
        console.log(array1[i] == array2[i] ? "Scores for " + movies[i] + " were the same in Asia and Europe": "Scores for " + movies[i] + " were different in Asia and Europe");
    }
}

compareScores(asiaScores, euroScores);


//Extra bonus
//Concurso de clavados
//1
let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];
let participantes = [participanteA, participanteB, participanteC]

//2
function averageScore (participant){
    let totalScore = 0;
    for(i = 0; i < participant.length; i++){
        totalScore += participant[i]
    }
    let average = totalScore / participant.length
    return average
}

averageScore(participanteA)

//3
function highestScore(participant){
    let highest = 0;
    for(let i = 0; i < participant.length; i++){
        participant[i] >= highest ? highest = participant[i] : '';
    }
    return highest;
}

highestScore(participanteA)

//4
function competence (participant1, participant2, participant3){
    let averageScoreWinner = '';
    let highestScoreWinner = '';
    if (averageScore(participant1) > averageScore(participant2) && averageScore(participant1) > averageScore(participant3)){
        averageScoreWinner = "Participant 1 is the winner"
    } else if (averageScore(participant2) > averageScore(participant1) && averageScore(participant2) > averageScore(participant3)){
        averageScoreWinner = "Participant 2 is the winner"
    } else if (averageScore(participant3) > averageScore(participant1) && averageScore(participant3) > averageScore(participant2)){
        averageScoreWinner = "Participant 3 is the winner"
    } else if (averageScore(participant1) == averageScore(participant2) && averageScore(participant1) > averageScore(participant3)){
        averageScoreWinner = "There's a draw between participant 1 and 2"
    } else if (averageScore(participant2) == averageScore(participant3) && averageScore(participant2) > averageScore(participant1)){
        averageScoreWinner = "There's a draw between participant 2 and 3"
    } else if (averageScore(participant3) == averageScore(participant1) && averageScore(participant3) > averageScore(participant2)){
        averageScoreWinner = "There's a draw betweem participant 1 and 3"
    } else if (averageScore(participant1) == averageScore(participant2) && averageScore(participant1) == averageScore(participant3)){
        averageScoreWinner = "Triple draw!"
    }

    if (highestScore(participant1) > highestScore(participant2) && highestScore(participant1) > highestScore(participant3)){
        highestScoreWinner = "Participant 1 is the winner"
    } else if (highestScore(participant2) > highestScore(participant1) && highestScore(participant2) > highestScore(participant3)){
        highestScoreWinner = "Participant 2 is the winner"
    } else if (highestScore(participant3) > highestScore(participant1) && highestScore(participant3) > highestScore(participant2)){
        highestScoreWinner = "Participant 3 is the winner"
    } else if (highestScore(participant1) == highestScore(participant2) && highestScore(participant1) > highestScore(participant3)){
        highestScoreWinner = "There's a draw between participant 1 and 2"
    } else if (highestScore(participant2) == highestScore(participant3) && highestScore(participant2) > highestScore(participant1)){
        highestScoreWinner = "There's a draw between participant 2 and 3"
    } else if (highestScore(participant3) == highestScore(participant1) && highestScore(participant3) > highestScore(participant2)){
        highestScoreWinner = "There's a draw betweem participant 1 and 3"
    } else if (highestScore(participant1) == highestScore(participant2) && highestScore(participant1) == highestScore(participant3)){
        highestScoreWinner = "Triple draw!"
    }

    console.log(averageScoreWinner + " based on average score");
    console.log(highestScoreWinner + " based on highest score");
}

competence(participanteA, participanteB, participanteC)