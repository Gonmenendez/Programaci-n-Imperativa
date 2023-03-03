//Undefined because the length is higher than index
let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

//Spiderman
let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

//"Un string cualquiera"
let str = "un string cualquiera";
let grupoDeAmigoss = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
console.log(grupoDeAmigoss[2][grupoDeAmigoss[2].length - 1])

//Colecciones de películas (y más...)
let movies = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"]
console.log(movies[3]);


function moviesToUpperCase(array){
    array.push(array[0].toUpperCase());
    array.push(array[1].toUpperCase());
    array.push(array[2].toUpperCase());
    array.push(array[3].toUpperCase());
    array.push(array[4].toUpperCase());
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    array.shift();
    console.log(movies);
}

moviesToUpperCase(movies)


let movies2 =["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let deleted;

function allMovies(array1, array2){
    array1.push(array2[0].toUpperCase())
    array1.push(array2[1].toUpperCase())
    array1.push(array2[2].toUpperCase())
    array1.push(array2[3].toUpperCase())
    //array1.push(array2[4].toUpperCase())
    deleted = array2.pop() 
    console.log(movies);
    console.log(deleted);
}

allMovies(movies, movies2)


const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compareScores (array1, array2){
    console.log(array1[0] == array2[0] ? "Scores for Star Wars were the same in Asia and Europe" : "Scores for Star Wars were different in Asia and Europe");
    console.log(array1[1] == array2[1] ? "Scores for Totoro were the same in Asia and Europe" : "Scores for Totoro were different in Asia and Europe");
    console.log(array1[2] == array2[2] ? "Scores for Rocky were the same in Asia and Europe" : "Scores for Rocky were different in Asia and Europe");
    console.log(array1[3] == array2[3] ? "Scores for Pulp Fiction were the same in Asia and Europe" : "Scores for Pulp Fiction were different in Asia and Europe");
    console.log(array1[4] == array2[4] ? "Scores for La Vida Es Bella were the same in Asia and Europe" : "Scores for La Vida Es Bella were different in Asia and Europe");
    console.log(array1[5] == array2[5] ? "Scores for Toy Story were the same in Asia and Europe" : "Scores for Toy Story were different in Asia and Europe");
    console.log(array1[6] == array2[6] ? "Scores for Finding Nemo were the same in Asia and Europe" : "Scores for Finding Nemo were different in Asia and Europe");
    console.log(array1[7] == array2[7] ? "Scores for Kung-Fu Panda were the same in Asia and Europe" : "Scores for Kung-Fu Panda were different in Asia and Europe");
    console.log(array1[8] == array2[8] ? "Scores for Wally were the same in Asia and Europe" : "Scores for Wally were different in Asia and Europe");
}

compareScores(asiaScores, euroScores);


//Extra bonus
//Array 
let straightArray = [1, 2, 3, 4, 5];
function imprimirInverso(array){
    let invertedArray =[];
    invertedArray.push(array[4])
    invertedArray.push(array[3])
    invertedArray.push(array[2])
    invertedArray.push(array[1])
    invertedArray.push(array[0])
    console.log("Inverted array but just printed " + invertedArray.join(", ") + ":");
    console.log(invertedArray);
}
imprimirInverso(straightArray)


function inversor(array){
    let inverter =[];
    inverter.push(array.pop());
    inverter.push(array.pop());
    inverter.push(array.pop());
    inverter.push(array.pop());
    inverter.push(array.pop());
    array.push(inverter.shift());
    array.push(inverter.shift());
    array.push(inverter.shift());
    array.push(inverter.shift());
    array.push(inverter.shift());
    console.log("Inverted array " + straightArray.join(", ") + ":");
    console.log(straightArray);
}

inversor(straightArray)


//sumaArray()
function sumaArray(array){
    console.log(array[0] + array[1] + array[2])
}

sumaArray([1, 2, 3])
sumaArray([10, 3, 10])
sumaArray([-5, 100, 19])

//Simulación Array.join()
function join(array){
    let string = array[0] + array[1] + array[2] + array[3]
    console.log(string);
}

join(["H", "o", "l", "a"])
join(["C", "h", "a", "u"])