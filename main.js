'use strict';


// Elementos del HTML

const moveUser = document.querySelector('.js-movimiento-jugador');
const btnPlay = document.querySelector('.js-btn-play');
const resultGame = document.querySelector('js-resultado');
const resultPlayer = document.querySelector('js-puntos-jugador');
const resultPc = document.querySelector('js-puntos-pc');

// Funcion aleatoria

function getRandomNumber(max) { 
    return Math.ceil(Math.random() *max); 
  }  

  // funcion pc

  function opcionPc(){
const randomNumber = getRandomNumber (9);
if (randomNumber<=3){
    return 'Piedra';
}else if (randonNumber >=7){
    return 'Papel';
}else {
    return 'Tijera';
}

}


//funcion comparadora

function result (moveUser, opcionPc) {
    if (moveUser.value === opcionPc){
        return 'Empate';
    }
    else if (
        (moveUser.value === 'Piedra' && opcionPc === 'Tijera')  
        (moveUser.value === 'Papel' && opcionPc === 'Piedra')  
        (moveUser.value === 'Tijera' && opcionPc === 'Papel')
        ){
        return '¡Has ganado!';
        }
    else {
        return "¡Has Perdido!";
      }
    }


//Evento click
    btnPlay.addEventListener('click', resultGame);
