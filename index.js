import colocarJugadores from "./src/colocarJugadores.js";

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

const tablero1= document.querySelector('.tablero');
const tablero2= document.querySelector('.tablero2');
const juego1Menu = document.querySelector('.juego1-btn');
const juego2Menu = document.querySelector('.juego2-btn');
let reglas;

juego1Menu.addEventListener('click',(e)=>{
    inicializar('images/logo.svg');
    reglas='rules';
    iniciarJuego(tablero1,opcionesJuego1,jugadasGanadorasJuego1);
});
juego2Menu.addEventListener('click',(e)=>{
    inicializar('images/logo-bonus.svg');
    reglas='rules-bonus';
    iniciarJuego(tablero2,opcionesJuego2,jugadasGanadorasJuego2);
});

const inicializar=(logo)=>{
    document.querySelector('.hero').classList.remove('ocultar');
    document.querySelector('.juegoReglas').classList.remove('ocultar');
    document.querySelector('.juegos').classList.add('ocultar');
    document.querySelector('.logo').src = logo;
}

const iniciarJuego=(tablero,opciones,jugadasGanadoras)=>{
    tablero.classList.remove('ocultar');
    tablero.classList.add('tablero--active');

    tablero.addEventListener('click',(e)=>{
        e.preventDefault();
        const boton = e.target.closest('button');
        if(boton!=null){
            tablero.classList.add('ocultar');
            juegoCompleto(boton,opciones,jugadasGanadoras);
            document.querySelector('.ganador').classList.remove('ocultar'); 
        }
    });
}
const juegoCompleto=(boton,opciones,jugadasGanadoras)=>{
    let contador1=parseInt(document.querySelector('.score-you').textContent);
    let contador2=parseInt(document.querySelector('.score-pc').textContent);

    const jugador1 = boton.id;
    const jugador2 = opciones[Math.floor(Math.random() * opciones.length)];
    const jugada =[jugador1,jugador2];
    let jugadorDosGana=false;
    let ganador;
    let jugadorUnoGana = jugadasGanadoras.some(subArray => JSON.stringify(subArray) === JSON.stringify(jugada));


    if(jugadorUnoGana===false){
        const jugada2 = jugada.reverse();
        jugadorDosGana = jugadasGanadoras.some(subArray => JSON.stringify(subArray) === JSON.stringify(jugada2));
    }

    colocarJugadores(jugador1,jugador2);

    let id;

    if(jugadorUnoGana===true && jugadorDosGana===false){
        contador1++;
        ganador='Ganaste';
        id=ganador;
        ganador='You win!';
    }else if(jugadorUnoGana===false && jugadorDosGana===true){
        contador2++;

        ganador='Perdiste';
        id=ganador;
        ganador='You lost :(';
    }else{
        ganador='Tie';
        id=ganador;
    }
    document.querySelector('.jugador-title').innerHTML=`
    <span class="jugador--ganador ${id}">${ganador}</span>
    `;

    document.querySelector('.score-you').textContent=contador1;
    document.querySelector('.score-pc').textContent=contador2;

};

document.querySelector('.juegoNuevo').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.tablero--active').classList.remove('ocultar');
    document.querySelector('.ganador').classList.add('ocultar');
});

document.querySelector('.otroJuego').addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.score-you').textContent='0';
    document.querySelector('.score-pc').textContent='0';


    document.querySelector('.tablero--active').classList.add('ocultar');
    document.querySelector('.tablero--active').classList.remove('tablero--active');

    document.querySelector('.hero').classList.add('ocultar');
    document.querySelector('.juegoReglas').classList.add('ocultar');
    document.querySelector('.juegos').classList.remove('ocultar');
    document.querySelector('.ganador').classList.add('ocultar');
});

document.querySelector('.reglas').addEventListener('click',(e)=>{
    document.querySelector('.mostrarReglas').classList.add('mostrarReglas--active');
    document.querySelector('.mostrarReglas figure img').src=`images/image-${reglas}.svg`;
});
document.querySelector('.cerrar').addEventListener('click',(e)=>{
    document.querySelector('.mostrarReglas').classList.remove('mostrarReglas--active');
});