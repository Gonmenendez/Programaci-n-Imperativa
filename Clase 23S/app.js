let fs = require('fs')
let functions = require('./functions')

let race = {
    bikes : functions.readJson('bicicletas.json'),
    bikesPerBatch : 4,
    enabledBikers : function(){
        return this.bikes.filter(bike => bike.dopaje === false)
    },
    findById : function(id){
        return this.bikes.find(bike => bike.id === id)
    },
    filterByWeight : function(weight){
        let enabledBikers = this.enabledBikers()
        return enabledBikers.filter(bike => bike.peso <= weight)
    },
    orderByWheelBeering : function(){
        return this.bikes.sort((bike1, bike2) => bike1.rodado - bike2.rodado)
    },
    averageLength : function(){
        let totalLength = this.bikes.reduce((accumulator, bike) => accumulator + bike.largo, 0)
        return 'El largo promedio es de: ' + totalLength / this.bikes.length
    },
    riseWeight : function(weightRise, id){
        let index;
        let found = this.bikes.find((bike, i) => {
            index = i
            return bike.id === id
        })
        found = this.findById(id)
        found.peso += weightRise
        this.bikes.splice(index, 1, found)
        functions.writeJson('bicicletas.json', this.bikes)
    },
    generateBatch : function(weight, wheelBeering){
        let batchBikes = this.filterByWeight(weight)
        batchBikes = batchBikes.filter(bike => bike.rodado <= wheelBeering)
        return batchBikes.slice(0, this.bikesPerBatch)
    },
    podiumCalculator : function(weight, wheelBeering){
        let podium = this.generateBatch(weight, wheelBeering)
        podium = podium.sort((bike1, bike2) => bike2.puntaje - bike1.puntaje)
        return 'El ganador es: ' + podium[0].ciclista + ', con un puntaje de ' + podium[0].puntaje + '. \n' + 'El segundo puesto es para ' + podium[1].ciclista + ', con un puntaje de ' + podium[1].puntaje + '. \n' + 'El tercer puesto es para ' + podium[2].ciclista + ', con un puntaje de ' + podium[2].puntaje + '.'
    }
}

//console.log(race.bikes);
//console.log(race.enabledBikers());
//console.log(race.findById(5));
//console.log(race.filterByWeight(7.5));
//console.log(race.orderByWheelBeering());
//console.log(race.averageLength());
//race.riseWeight(10, 1);
//console.log(race.generateBatch(10, 28));
//console.log(race.podiumCalculator(10, 28));