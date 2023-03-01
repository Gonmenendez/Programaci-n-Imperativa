//Part 1
/*
1. false
2. true
3. false
4. true
5. false
6. true
7. true
8. false
9. false
10.a. false - b. true - c. true
*/
console.log("1. " + !true);
console.log("2. " + !false);
console.log("3. " + !!false);
console.log("4. " + !!true);
console.log("5. " + !1);
console.log("6. " + !!1);
console.log("7. " + !0);
console.log("8. " + !!0);
console.log("9. " + !!"");
let x = 5;
let y = 9;
console.log("10. a. " + (x < 10 && x !== 5));
console.log("10. b. " + (x > 9 || x === 5));
console.log("10. c. " + !(x === y));

//Part 2
/*
1. true
2. false
3. false
*/
x = 10;
y = "a";
console.log(y === "b" || x >= 10);

x = 3;
y = 8;
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y));

let str = ""
let msj = "jaja!"
let esGracioso = "false"
console.log(!((str || msj) && esGracioso))

//Code
//Height over 1.30mts and height over 12yo
function montañaRusa(age, height){
    return age >= 12 && height >= 1.30
}
console.log("Meets the requirements? " + montañaRusa( 11, 1.50));

//Either if the lights are low or the object moving too quick, you'll need to activate flash
function flashRequired(lowLight, tooQuick){
    return lowLight || tooQuick
}

console.log("Is the flash required? " + flashRequired(false, false));

//If someone approves two partial exams with average grade equals or higher than 7 OR the final exam with grade 4 or higher passes the year
function nextLevel(firstExam, secondExam, finalExam){
    return (firstExam >= 7 && secondExam >= 7) || finalExam >= 4
}

console.log("Will Matt pass this year? " + nextLevel(7, 7, 3));
console.log("Will Theo pass this year? " + nextLevel(6, 7, 3));
console.log("Will Nick pass this year? " + nextLevel(5, 5, 4));

//If our son made his homework and alredy practiced piano but only using his memory, he can wath TV
function watchTv(homeworkDone, playedPiano, scoreUsed){
    return homeworkDone && playedPiano && scoreUsed
}

console.log("Can my son watch TV? " + watchTv(true, true, false));