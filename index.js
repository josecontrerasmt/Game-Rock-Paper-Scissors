import iniciarJuego from "./src/iniciarJuego.js";

const opcionesJuego1=['rock','paper','scissors'];
const jugadasGanadorasJuego1 =[['rock','scissors'],['scissors','paper'],['paper','rock']];

const opcionesJuego2=['rock','paper','scissors','lizard','spock'];
const jugadasGanadorasJuego2 =[
    ['scissors','paper'],['scissors','lizard'],
    ['paper','rock'],['paper','spock'],
    ['rock','scissors'],['rock','lizard'],
    ['lizard','spock'],['lizard','paper'],
    ['spock','scissors'],['spock','rock']
];

const elegirJuego = document.querySelector('.opcionesJuego');
const tablero1= document.querySelector('.tablero');
const tablero2= document.querySelector('.tablero2');

elegirJuego.addEventListener('click',(e)=>{
    e.preventDefault();
    const juego = e.target.closest('button');

    if(juego!=null){
        if(juego.classList.contains('juego1-btn')){
            const juego = document.querySelector('.juego1');
            document.querySelector('.hero .logo').src = 'images/logo.svg';
            iniciarJuego(tablero1,opcionesJuego1,jugadasGanadorasJuego1,'rules',juego);
        }else{
            const juego = document.querySelector('.juego2');
            document.querySelector('.hero .logo').src = 'images/logo-bonus.svg';
            iniciarJuego(tablero2,opcionesJuego2,jugadasGanadorasJuego2,'rules-bonus',juego)
        }
    }
});