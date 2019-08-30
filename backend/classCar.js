let encendiendo = false;
let encendido = false;
let direccionales = 0;
let neutra = false;
let cambios = 0;
let frenoMano = false;
let freno = false;
let cinturon = false;
let recorrido = false;
let clutch = false;
let acelerar = false;
let destino = false;

let scrroll = document.getElementById('data');
scrroll.scrollTop = scrroll.height + 2
var cursorFocus = function (elem) {
    var x = window.scrollX, y = window.scrollY;
    elem.focus();
    window.scrollTo(x, y);

}

cursorFocus(document.getElementById('data'));

var pintarText = document.getElementById('data');
function carro(encendiendo) {

    encendiendo = true;
    if (encendiendo === true) {
        setTimeout(function () {
            document.getElementById('btn-encender').style.backgroundColor = 'green';
            pintarText.value += 'Preparando auto para encender....... \n';
        }, 1000)

    } frenoMano = true;
    if (frenoMano === true) {
        setTimeout(function () {
            document.getElementById('btn-frenoManos').style.backgroundColor = 'green';
            pintarText.value += 'Freno de mano activado \n';
        }, 3000)
    } neutra = true;
    if (neutra === true) {
        setTimeout(function () {
            document.getElementById('neutra').style.backgroundColor = 'green';
            pintarText.value += 'Neutra activada \n';
        }, 5000)
    } encendido = true;
    if (encendido === true) {
        setTimeout(function () {
            pintarText.value += 'Auto encendido \n';
        }, 7000)
    } cinturon = true;
    if (cinturon === true) {
        setTimeout(function () {
            document.getElementById('cinturon').style.backgroundColor = 'green';
            pintarText.value += 'Por favor abróchese el cinturon \n';
        }, 8000)
    } recorrido = true;
    if (recorrido === true) {
        setTimeout(function () {
            pintarText.value += 'Iniciando recorrido \n';
        }, 11000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 12000)
    } freno = true;
    if (freno === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando el freno \n';
            document.getElementById('pedal-frenar').style.backgroundColor = 'green';
        }, 13000)
    } frenoMano = true;
    if (frenoMano === true) {
        setTimeout(function () {
            pintarText.value += 'Quitando freno de mano \n';
            document.getElementById('pedal-frenar').style.backgroundColor = 'yellow';
            document.getElementById('btn-frenoManos').style.backgroundColor = 'gray';
        }, 14000)
    } cambios = 1;
    if (cambios === 1) {
        setTimeout(function () {
            pintarText.value += 'Metiendo Primera \n';
            document.getElementById('neutra').style.backgroundColor = 'gray';
            document.getElementById('primera').style.backgroundColor = 'green';
        }, 15000);
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'gray';
        }, 16000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 17000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 21000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 22000)
    } cambios = 2;
    if (cambios === 2) {
        setTimeout(function () {
            pintarText.value += 'Metiendo segunda \n';
            document.getElementById('primera').style.backgroundColor = 'gray';
            document.getElementById('segunda').style.backgroundColor = 'green';

        }, 23000);
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'gray';
        }, 24000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 25000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 30000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 31000)
    } cambios = 3;
    if (cambios === 3) {
        setTimeout(function () {
            pintarText.value += 'Metiendo tercera \n';
            document.getElementById('segunda').style.backgroundColor = 'gray';
            document.getElementById('tercera').style.backgroundColor = 'green';
        }, 32000);
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n'
            document.getElementById('pedal-cluth').style.backgroundColor = 'gray';
        }, 33000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 34000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 39000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 40000)
    } cambios = 4;
    if (cambios === 4) {
        setTimeout(function () {
            pintarText.value += 'Metiendo cuarta \n';
            document.getElementById('tercera').style.backgroundColor = 'gray';
            document.getElementById('cuarta').style.backgroundColor = 'green';
        }, 41000);
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'gray';
        }, 42000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 43000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 500000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 51000)
    } cambios = 5;
    if (cambios === 5) {
        setTimeout(function () {
            pintarText.value += 'Metiendo quinta \n';
            document.getElementById('cuarta').style.backgroundColor = 'gray';
            document.getElementById('quinta').style.backgroundColor = 'green';
        }, 52000);
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n'
            document.getElementById('pedal-cluth').style.backgroundColor = 'yellow';
        }, 53000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 54000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 64000)
    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Pisando clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'green';
        }, 65000)
    } cambios = 6;
    if (cambios === 6) {
        setTimeout(function () {
            pintarText.value += 'Metiendo sexta \n';
            document.getElementById('quinta').style.backgroundColor = 'gray';
            document.getElementById('sexta').style.backgroundColor = 'green';
        }, 66000);

    } clutch = true;
    if (clutch === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando el clutch \n';
            document.getElementById('pedal-cluth').style.backgroundColor = 'yellow';
        }, 67000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Acelerando \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'green';
        }, 68000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Soltando acelerador \n';
            document.getElementById('pedal-acelerar').style.backgroundColor = 'yellow';
        }, 70000)
    } acelerar = true;
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('sexta').style.background = 'yellow';
        }, 73000)
    }
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('quinta').style.background = 'yellow';
        }, 73000)
    }
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('cuarta').style.background = 'yellow';
        }, 74000)
    }
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('tercera').style.background = 'yellow';
        }, 75000)
    }
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('segunda').style.background = 'yellow';
        }, 76000)
    }
    if (acelerar === true) {
        setTimeout(function () {
            pintarText.value += 'Disminuyendo la velocidad y bajando cambios \n';
            document.getElementById('primera').style.background = 'yellow';
        }, 77000)
    } recorrido = true;
    if (recorrido === true) {
        setTimeout(function () {
            pintarText.value += 'Finalizando recorrido \n';
        }, 85000)
    } frenoMano = true;
    if (frenoMano === true) {
        setTimeout(function () {
            pintarText.value += 'Freno de mano activado \n';
            document.getElementById('btn-frenoManos').style.backgroundColor = 'green';
        }, 86000)
    } destino = true;
    if (destino === true) {
        setTimeout(function () {
            pintarText.value += 'Has llegado a tu destino \n';
        }, 87000)
    } encendido = true;
    if (encendido === true) {
        setTimeout(function () {
            pintarText.value += 'Apagando el auto \n';
            document.getElementById('btn-encender').style.backgroundColor = 'red';
        }, 88000)
    }
}





