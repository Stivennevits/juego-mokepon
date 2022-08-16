let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

/*var temporizador = setInterval(function(){
    setColor();
}, 5000 );

function setColor (){ 
    let pagina = document.body;
    pagina.style.background = pagina.style.background == "aqua" ? "gold" : "aqua";
}
*/

function iniciarJuego(){

let setcionReiniciar = document.getElementById("Reiniciar")
setcionReiniciar.style.display = "none"    
    
let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
sectionSeleccionarAtaque.style.display = "none"
    
// configurar el primer boton 
let botonMascota = document.getElementById("boton-mascota" )
botonMascota.addEventListener("click", seleccionarMascotaJugador)

// configurar botones de ataque 

let botonFuego = document.getElementById("boton-Fuego")
botonFuego.addEventListener("click", ataqueFuego)

let botonAgua = document.getElementById("boton-Agua")
botonAgua.addEventListener("click", ataqueAgua)

let botonTierra = document.getElementById("boton-Tierra")
botonTierra.addEventListener("click", ataqueTierra)

let botonReiniciar = document.getElementById("boton-reiniciar")
botonReiniciar.addEventListener("click", reiniciarJuego )

}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "flex"

    let inputAgumon = document.getElementById("Agumon")
    let inputTierramon = document.getElementById("Tierramon")
    let inputFuegomon = document.getElementById("Fuegomon")
   
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputAgumon.checked){
        
        spanMascotaJugador.innerHTML = "Agumon"

    } else if (inputTierramon.checked){
       
        spanMascotaJugador.innerHTML = "Tierramon"

    } else if (inputFuegomon.checked){
        
        spanMascotaJugador.innerHTML = "Fuegomon"

   
    } else {
        alert ("Debes Seleccionar una mascota")
    }
    
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo (){
     let mascotaAleatorio = aleatorio2 (1,3)
     let spanMAscotaEnemigo = document.getElementById("mascota-enemigo")

     if (mascotaAleatorio == 1 ){
        // agumon
       
        spanMAscotaEnemigo.innerHTML = "Agumon"

     } else if (mascotaAleatorio == 2){
        // tierramon
        
        spanMAscotaEnemigo.innerHTML = "Tierramon"

     } else  {
        // fuegomon
        
        spanMAscotaEnemigo.innerHTML = "Fuegomon"

    

     } 
}

function ataqueFuego () {
    ataqueJugador = "FUEGO"
    ataqueAleatorioEnemigo()
    

} 

function ataqueAgua () {
    ataqueJugador = "AGUA"
    ataqueAleatorioEnemigo()
    
} 

function ataqueTierra () {
    ataqueJugador = "TIERRA"
    ataqueAleatorioEnemigo()
    
} 

function ataqueAleatorioEnemigo(){

    let ataquealeatorio = aleatorio2 (1,3)

    if (ataquealeatorio == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataquealeatorio == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }

    combate()

   
}

function combate (){
    
     
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo){
        crearMensaje("Empate")
    } else if ((ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA") 
    || 
    (ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO") 
    ||
    (ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA")){
        crearMensaje("Ganaste")
        vidasEnemigo -- 
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    } 

    revisarVidas()

}

function revisarVidas(){
    

    if (vidasJugador == 0){
    crearMensajeFinal("😭 LA SUERTE NO TE ACOMPAÑÓ, PERDISTE 😭")

    }else if (vidasEnemigo == 0){
    crearMensajeFinal("😱 FELICIDADES, GANASTE!!! 🎆🎈🎉")
    }
}

function crearMensaje (resultado){

    let sectionMensajes = document.getElementById("resultado")
    let sectionataqueDelJugador = document.getElementById("ataque-Del-Jugador")
    let sectionataqueDelEnemigo = document.getElementById("ataque-Del-Enemigo")
    
    let notificacion =document.createElement("p")
    notificacion.innerHTML = resultado

    let nuevoAtaqueDelJugador = document.createElement("p")
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador

    let nuevoAtaqueDelEnemigo = document.createElement("p")
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    //let parrafo = document.createElement("p")
    //parrafo.innerHTML = "Tu mascota atacó con" + " " + ataqueJugador + " " + ", la mascota del enemigo atacó con " + " " + ataqueEnemigo + " - " + resultado 

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFinal){
    let setcionReiniciar = document.getElementById("Reiniciar")
    setcionReiniciar.style.display = "block" 
    

    let sectionMensajes = document.getElementById("Mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-Fuego")
    botonFuego.disabled = true

    let botonAgua = document.getElementById("boton-Agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton-Tierra")
    botonTierra.disabled = true
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio2 (min, max){
    return Math.floor(Math.random() * (max - min + 1 ) + min)
 }

window.addEventListener("load", iniciarJuego)
