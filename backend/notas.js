/**
 ****************************************************************************************************************************
 * ALGORITMO PARA EL CARRO: PRIMER PUNTO
 ****************************************************************************************************************************
 */

/*
class Carro {
    constructor() {
        this.encendido = false;
        this.cambios = 0;
        this.frenoMano = false;
        this.direccionales = 0;
        this.direccion = 0;
        this.neutra = false;
    }

    encender() {

        if (this.varificarNeutra() === true && this.verificarFrenoMano() === true) {
            this.encendido = true;
            document.getElementById('data').value += "Auto encendido..";


        } else {

            document.getElementById('data').value += "No es posible encender el auto, verifique que el auto este en neutra y tenga puesto el freno de mano \n";
        }
    }

    ponerFrenoMano() {
        this.frenoMano = true

        document.getElementById('data').value += "Has puesto el freno de manos \n" + this.frenoMano + "\n";
    }
    verificarFrenoMano() {
        return this.frenoMano
    }

    ponerNeutra() {
        this.neutra = true

        document.getElementById('data').value += "Has puesto la neutra \n" + this.neutra;
    }
    varificarNeutra() {
        return this.neutra
    }

    ponerDireccion(escucha) {

        if (this.verificarDireccionales() === escucha) {

            this.direccion = escucha

            document.getElementById('data').value += "Dirección hacía la \n" + this.direccion + "\n";
        } else {
            document.getElementById('data').value += "No es posible girar, ponga la direccinal en \n" + escucha + "\n";
        }
    }

    verificarDireccion() {
        return this.direccion
    }

    ponerDireccionales(escucha) {
        if (this.encendido === true) {
            this.direccionales = escucha
            console.log("Direccional en", this.direccionales)
        } else {
            console.log("porfavor encienda el auto")
        }
    }
    verificarDireccionales() {
        return this.direccionales
    }
}
let miCarro = new Carro()

*/
/****************************************************************************************************************************
 * ALGORITMO PARA EL CARRO: SEGUNDO PUNTO
 ****************************************************************************************************************************
 */

/*
let paradas = Math.floor(Math.random() * 3 + 1);
let kilometros = Math.floor(Math.random() * (500 - 300 + 1) + 600);
let tiempo = Math.floor(Math.random() * (5 - 1) + 1);

let calculoDistancia = Math.floor(Math.round(kilometros / paradas));

console.log(calculoDistancia);





function addEvent(query, event, callback) {
    document.querySelectorAll(query)[0].addEventListener(event, callback);
}

addEvent("#btn-encender", 'click', function () {
    setTimeout
    console.log("Auto encendido...");
});

addEvent("#btn-estacionar", 'click', function () {
    console.log("Auto estacionado");
});

addEvent("#dir-left", 'click', function () {
    console.log("Direccional izquierda");
});

addEvent("#dir-rigth", 'click', function () {
    console.log("Direccional derecha");
});

addEvent('#giro-left', 'click', function () {
    console.log("Giro hacia la izquierda");
})


addEvent('#giro-rigth', 'click', function () {
    console.log("Giro hacia la derecha");
})
*/




/*

function cajaCambios(cambios) {
    let pintarText = document.getElementById('data');
    cambios = 1;
    if (cambios === 1) {
        setTimeout(function () {
            pintarText.value += 'Se ha metido primera \n';
        }, 1000);
    }
    cambios = 2;
    if (cambios === 2) {
        setTimeout(function () {
            pintarText.value += 'Se ha medito segunda \n';
        }, 3000);
    }
    cambios = 3;
    if (cambios === 3) {
        setTimeout(function () {
            pintarText.value += 'Se ha metido tercera \n';
        }, 5000);
    }
    cambios = 4;
    if (cambios === 4) {
        setTimeout(function () {
            pintarText.value += 'Se ha metido cuarta \n';
        }, 8000);
    }
    cambios = 5;
    if (cambios === 5) {
        setTimeout(function () {
            pintarText.value += 'Se ha metido quinta \n';
        }, 11000);
    }
    cambios = 6;
    if (cambios === 6) {
        setTimeout(function () {
            pintarText.value += 'Se ha metido sexta \n';
        }, 14000);
    }
}

*/


/**
 *
 *
 *
 *           document.getElementById('pedal-cluth').style.backgroundColor = 'green';
            document.getElementById('sexta').style.backgroundColor = 'green';
            document.getElementById('sexta').style.backgroundColor = 'gray';
            document.getElementById('quinta').style.backgroundColor = 'green';
            document.getElementById('quinta').style.backgroundColor = 'gray';
            document.getElementById('cuarta').style.backgroundColor = 'green';
            document.getElementById('cuarta').style.backgroundColor = 'gray';
            document.getElementById('tercera').style.backgroundColor = 'green';
            document.getElementById('tercera').style.backgroundColor = 'gray';
            document.getElementById('segunda').style.backgroundColor = 'green';
            document.getElementById('segunda').style.backgroundColor = 'gray';
            document.getElementById('primera').style.backgroundColor = 'green';
            document.getElementById('primera').style.backgroundColor = 'gray';
            document.getElementById('pedal-cluth').style.backgroundColor = 'yellow';
 */