import colocarJugadores from "./colocarJugadores.js";

const iniciarJuego=(tablero,opciones,jugadasGanadoras,reglas,juego)=>{
    juego.classList.remove('ocultar');
    document.querySelector('.hero').classList.remove('ocultar');
    document.querySelector('.juegos').classList.add('ocultar');
    document.querySelector('.reglas').classList.remove('ocultar');
    document.querySelector('.otroJuego').classList.remove('ocultar');
    
    tablero.addEventListener('click',(e)=>{
        const boton = e.target.closest('button');
        juegoCompleto(boton,opciones,jugadasGanadoras,tablero);
    });
    
    document.querySelector('.juegoNuevo').addEventListener('click',(e)=>{
        e.preventDefault();
        tablero.classList.remove('ocultar');
        document.querySelector('.ganador').classList.add('ocultar');

    });
    document.querySelector('.reglas').addEventListener('click',(e)=>{
        document.querySelector('.mostrarReglas').classList.add('mostrarReglas--active');
        document.querySelector('.mostrarReglas figure img').src=`images/image-${reglas}.svg`;
    });
    document.querySelector('.cerrar').addEventListener('click',(e)=>{
        document.querySelector('.mostrarReglas').classList.remove('mostrarReglas--active');
    });

    document.querySelector('.otroJuego').addEventListener('click',(e)=>{
        document.querySelector('.hero__score .score-you').textContent='0';
        document.querySelector('.hero__score .score-pc').textContent='0';

        document.querySelector('.reglas').classList.add('ocultar');
        document.querySelector('.otroJuego').classList.add('ocultar');
        document.querySelector('.hero').classList.add('ocultar');
        document.querySelector('.juegos').classList.remove('ocultar');
        juego.classList.add('ocultar');
        tablero.classList.remove('ocultar');
        document.querySelector('.ganador').classList.add('ocultar');
    });
}
const juegoCompleto=(boton,opciones,jugadasGanadoras,tablero)=>{
    let contador1=parseInt(document.querySelector('.hero__score .score-you').textContent);
    let contador2=parseInt(document.querySelector('.hero__score .score-pc').textContent);
    if(boton!=null){
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

        tablero.classList.add('ocultar');
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
        setTimeout(() => {
            document.querySelector('.hero__score .score-you').textContent=contador1;
            document.querySelector('.hero__score .score-pc').textContent=contador2;
            document.querySelector('.ganador').classList.remove('ocultar'); 
        }, 300);
        
    }
}

export default iniciarJuego;