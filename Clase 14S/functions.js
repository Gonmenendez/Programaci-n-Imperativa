//1
const { log } = require('console');
let fs = require('fs')

//2
/*
let carArray = [];

function readJson(fileName){
    return JSON.parse(fs.readFileSync(fileName, {enconding: 'utf-8'}))
}

carArray = readJson('AUTOS.json')

console.log(carArray);
*/

//3
/*
function rewriteJson(fileName, data){
    fs.writeFileSync(fileName, JSON.stringify(data))
}

rewriteJson('AUTOS.json', carArray)
*/

//4
let jsonExport ={
    readJson : function (fileName){
        return JSON.parse(fs.readFileSync(fileName, {enconding: 'utf-8'}))
    },

    rewriteJson : function (fileName, data){
        fs.writeFileSync(fileName, JSON.stringify(data))
    },
}

module.exports = jsonExport
