
const colocarJugadores=(jugador1,jugador2)=>{
    document.querySelector('.jugadores').innerHTML=`
    <div class="jugador1">
        <button class="jugador--boton ${jugador1}" id="${jugador1}"><img src="images/icon-${jugador1}.svg" alt=""></button>
        <span>Elegiste</span>
    </div>
    <div class="jugador1">
        <button class="jugador--boton ${jugador2}" id="${jugador2}"><img src="images/icon-${jugador2}.svg" alt=""></button>
        <span>La casa eligio</span>
    </div>
    `;
}

export default colocarJugadores;