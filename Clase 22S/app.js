//1
let fs = require('fs')
let functions = require('./functions')

let carArray = functions.readJson('autos.json')
//console.log(carArray);


//2
//3 A - B - C - D - E - F - G - H - I - J
let race = {
    cars : carArray,
    carsPerBatch : 6,
    listCars : function(){
        this.cars.forEach(car => {
            console.log("Piloto: " + car.piloto + ", patente: " + car.patente + ", estado: " + (car.sancionado ? "sancionado" : "habilitado"))
        });
    },
    enabledCars : function(){
        return this.cars.filter(car => car.sancionado === false)
    },
    findLicensePlate : function(licensePlate){
        return this.cars.find(car => car.patente === licensePlate)
    },
    filterCilinderCapacity : function(cilinderCapacity){
        const enabledCars = this.enabledCars()
        return enabledCars.filter(car => car.cilindrada <= cilinderCapacity)
    },
    orderedBySpeed : function(){
        return this.cars.sort((car1, car2) => car1.velocidad - car2.velocidad)
    },
    enableCar : function(licensePlate){
        let index;
        const found = this.cars.find((car, i) => {
            index = i
            return car.patente === licensePlate
        })
        found.sancionado = false
        this.cars.splice(index, 1, found)
        functions.rewriteJson('autos.json', this.cars)
        return found
    },
    generateBatch : function(cilinderCapacity, weight){
        let carsAvailable = this.filterCilinderCapacity(cilinderCapacity)
        carsAvailable = carsAvailable.filter(car => car.peso <= weight)
        carsAvailable = carsAvailable.filter(car => car.sancionado === false)
        return carsAvailable.slice(0, this.carsPerBatch)
    },
    averageWeight : function (cilinderCapacity, weight){
        let batch = this.generateBatch(cilinderCapacity, weight)
        let batchWeight = batch.reduce((acumulador, car) => acumulador + car.peso, 0)
        return batchWeight / batch.length
    },
    listPodium : function(cilinderCapacity, weight){
        let podium = this.generateBatch(cilinderCapacity, weight)
        podium = podium.sort((car1, car2) => car1.puntaje - car2.puntaje)
        podium.reverse()
        podium = podium.slice(0, 3)
        return 'El ganador es: ' + podium[0].piloto + ', con un puntaje de ' + podium[0].puntaje + '. \n' + 'El segundo puesto es para ' + podium[1].piloto + ', con un puntaje de ' + podium[1].puntaje + '. \n' + 'El tercer puesto es para ' + podium[2].piloto + ', con un puntaje de ' + podium[2].puntaje + '.'
    }
}

//console.log(race.cars);
//race.listCars();
//console.log(race.enabledCars());
//console.log(race.findLicensePlate('RGB159'));
//console.log(race.findLicensePlate('JHV223'));
//console.log(race.filterCilinderCapacity(1500));
//console.log(race.orderedBySpeed());
//console.log(race.enableCar('JHV223'));
//console.log(race.cars);
//console.log(race.generateBatch(1500, 1400));
//console.log(race.averageWeight(1500, 1400));
//console.log(race.listPodium(2500, 3400));