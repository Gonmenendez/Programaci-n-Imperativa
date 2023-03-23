//5
let fs = require('fs')
let functions = require('./functions')

/*let carArray = functions.readJson('AUTOS.json')
console.log(carArray);*/

//6 - 7 - 8
let carLot = {
    cars : functions.readJson('AUTOS.json'),
    addCar: function(brand, model, year, price, licensePlate){
        let newCar = function(brand, model, year, price, licensePlate){
            this.marca = brand
            this.modelo = model
            this.anio = year
            this.precio = price
            this.patente = licensePlate
            this.vendido = false
        }
        let carToAdd = new newCar(brand, model, year, price, licensePlate)
        this.cars.push(carToAdd)
        functions.rewriteJson('AUTOS.json', this.cars)
        console.log('Vehículo agregado correctamente')
    },
    sellCar : function(licensePlate){
        let selected;
        for(let i = 0; i < this.cars.length; i++){
            if (this.cars[i].patente == licensePlate){
                this.cars[i].vendido = true
                selected = this.cars[i]
            } else {
                selected = false
            }
        }
        functions.rewriteJson('AUTOS.json', this.cars)
        return selected ? 'El vehículo: ' + selected.marca + ' ' + selected.modelo + ' ha sido vendido' : 'No se ha encontrado ningún vehículo con la patente ingresada'
    },
    totalSellsEarned : function(){
        let total = 0;
        for (let i = 0; i < this.cars.length; i++){
            if(this.cars[i].vendido == true){
                total += this.cars[i].precio
            }
        }
        return total > 0 ? 'El total por vehículos vendidos suma un total de: ' + total : 'No se han registrado ventas de vehículos'
    },
    deleteCar : function(licensePlate){
        let found;
        for(let i = 0; i < this.cars.length; i++){
            if(licensePlate == this.cars[i].patente){
                this.cars.splice(i, 1)
                found = true
            }
        }
        functions.rewriteJson('AUTOS.json', this.cars)
        return found ? 'Se ha eliminado el vehículo con patente: "' + licensePlate + '" de la base de datos' : 'No se ha encontrado ningún vehículo con la patente ingresada'
    },
}

console.log(carLot.cars);
//console.log(carLot.addCar('Hyundai', 'Tucson', 2023, 8000000, 'AD653X1'));
//console.log(carLot.cars);
//console.log(carLot.sellCar('WAV703'));
//carLot.totalSellsEarned()
//console.log(carLot.deleteCar('JTH240'));