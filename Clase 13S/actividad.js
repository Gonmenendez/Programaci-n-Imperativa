//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];

let banco = {
    clientes : arrayCuentas,

    consultarCliente : function (titular){
        let mensajeError = "No se han encontrado coincidencias con el nombre ingresado, por favor verifique los datos";
        let encontrado;
        for(let i = 0; i < this.clientes.length; i++){
            this.clientes[i].titularCuenta === titular ? encontrado = this.clientes[i] : ''
        }
        return encontrado ? encontrado : mensajeError;
    },

    deposito : function (titular, deposita){
        let mensajeError = "No se ha podido depositar ya que alguno de los datos ingresados es inválido, por favor verifique los datos ingresados"
        let encontrado;
        for(let i = 0; i < arrayCuentas.length; i++){
            if (this.clientes[i].titularCuenta === titular){
                this.clientes[i].saldoEnPesos += deposita
                encontrado = this.clientes[i];
            }
        }
        return encontrado ? 'Depósito realizado, su nuevo saldo es de: $' + encontrado.saldoEnPesos : mensajeError;
    },

    /*
    extraccion : function(titular, extrae){
        let mensajeError = "No se ha podido realizar la extracción ya que alguno de los datos ingresados es inválido, por favor verifique los datos ingresados"
        let encontrado;
        let saldoModificado; 
        for (let i = 0; i < this.clientes.length; i++){
            if (this.clientes[i].titularCuenta === titular && this.clientes[i].saldoEnPesos >= extrae){
                this.clientes[i].saldoEnPesos -= extrae;
                encontrado = this.clientes[i];
                saldoModificado = true;
            } else if (this.clientes[i].titularCuenta === titular && this.clientes[i].saldoEnPesos < extrae){
                encontrado = this.clientes[i];
                saldoModificado = false;
            }
        }

        if (encontrado != undefined && saldoModificado != false){
            return "Extracción realizada correctamente, su nuevo saldo es de: $" + encontrado.saldoEnPesos
        } else if (encontrado != false && saldoModificado == false){
            return "Fondos insuficientes"
        } else if (encontrado == undefined && saldoModificado != true){
            return mensajeError
        }
    }
    */
    extraccion : function (titular, extrae){
        let encontrado = this.consultarCliente(titular);
        let mensaje;
        if (typeof encontrado !== "string"){
            if(encontrado.saldoEnPesos >= extrae){
                encontrado.saldoEnPesos -= extrae;
                mensaje = "Extracción realizada correctamente, su nuevo saldo es de: $" + encontrado.saldoEnPesos
            } else {
                mensaje = "Fondos insuficientes"
            }
        } else {
            mensaje = "No se ha podido realizar la extracción ya que alguno de los datos ingresados es inválido, por favor verifique los datos ingresados"
        }
        return mensaje;
    }
}


console.log(banco.clientes);
console.log(banco.consultarCliente('Ramon Connell'));
console.log(banco.deposito('Ramon Connell', 1000));
console.log(banco.extraccion('Jacki Shurmer', 1000));


//Bonus extra
let array = [
    {
        nombre : "Lean",
        edad : 27,
    },
    {
        nombre : "Eze",
        edad : 49,
    }
]

function propiedadUnica(array, string){
    let nuevoArray =[];
    for(let i = 0; i < array.length; i++){
        let objeto ={
            [string] : array[i][string],
        };
        nuevoArray.push(objeto)
    }
    return nuevoArray
}
let objetoFiltrado = propiedadUnica(array, 'edad');
console.log(objetoFiltrado);

let alumno = {
    nombre : "Gonzalo",
    numeroDeLegajo : "12345",
    listaDeNotas : [10, 9, 8, 7, 10],
    promedio : function(){
        let sumando = 0;
        for(let i = 0; i < this.listaDeNotas.length; i++){
            sumando += this.listaDeNotas[i]
        }
        return sumando/this.listaDeNotas.length
    },
    aprobado : function(notaMinima){
        if(this.promedio() >= notaMinima){
            return this.nombre + ' ha aprobado la materia con un promedio de: ' + this.promedio()
        } else {
            return this.nombre + ' ha desaprobado la materia con un promedio de: '+ this.promedio()
        }
    }
}

let aprobado = alumno.aprobado(7)
console.log(aprobado);