const button = document.getElementById("startButton");
const title = document.getElementById("title");
const text = document.getElementById("text");
const music = document.getElementById("music");
const hearts = document.getElementById("hearts");
const huellas = document.getElementById("huellas");
const imagenHistoria = document.getElementById("imagenHistoria");
const buttons = document.getElementById("buttons");

music.volume = 0.15;

let pagina = 0;
let escribiendo = false;
let intentosNo = 0;

/* =====================================
            HISTORIA
===================================== */

const historia = [

{
titulo:"Creo que a llegado el momento... 💜",
texto:"Quería hacer algo diferente para ti.\nAlgo hecho con cariño, solo para sacarte una sonrisa.",
imagen:""
},

{
titulo:"🐱 Tú",
texto:"Poco a poco fui descubriendo esas pequeñas cosas que te hacen especial.",
imagen:"assets/gatito1.png"
},

{
titulo:"🍹 Piña Colada",
texto:"Descubrí que una de tus bebidas favoritas es la piña colada... solo falta que yo sea la comida raw.",
imagen:"assets/pinacolada.png"
},

{
titulo:"🦐 Comer rico",
texto:"Mariscos, salir a comer y probar sitios nuevos.\nCreo que sería un plan perfecto contigo.",
imagen:"assets/mariscos.png"
},

{
titulo:"🛍️ Un plan contigo",
texto:"Ir de compras contigo suena mucho mejor que ir solo.\nAunque seguramente acabes haciéndome entrar en más tiendas de las previstas y acabe hasta la polla.",
imagen:"assets/compras.png"
},

{
titulo:"🍳 Cocinar",
texto:"También me gusta imaginar un día cualquiera cocinando juntos mientras suena música de fondo.",
imagen:"assets/cocinar.png"
},

{
titulo:"🥤 Tu placer culpable",
texto:"Sé que la Coca-Cola te encanta... aunque luego tu estómago no esté muy de acuerdo, asi que me la bebere yo jeje digooo....",
imagen:"assets/cocacola.png"
},

{
titulo:"🎵 Una bachata",
texto:"Seguro que en algún momento terminaríamos escuchando una bachata de Aventura, por eso te dedico la que esta sonando.",
imagen:"assets/bachata.png"
},

{
titulo:"🗽 Un sueño",
texto:"Algún día me gustaría verte sonriendo mientras paseamos por Nueva York.\nSé que es un lugar que te hace ilusión vivir allí.",
imagen:"assets/newyork.png"
},

{
titulo:"🎮 Nosotros",
texto:"Y quién iba a decir que Roblox terminaría regalándome algunos de mis momentos favoritos contigo.",
imagen:"assets/roblox.png"
}

];

/* =====================================
        BOTÓN PRINCIPAL
===================================== */

button.onclick = () => {

    if(escribiendo) return;

    music.play().catch(()=>{});

    if(pagina < historia.length){

        title.innerHTML = historia[pagina].titulo;

        escribirTexto(historia[pagina].texto);

        imagenHistoria.src = historia[pagina].imagen;

        pagina++;

    }else{

        pregunta();

    }

};

/* =====================================
        EFECTO ESCRITURA
===================================== */

function escribirTexto(frase){

    escribiendo = true;

    button.disabled = true;

    text.innerHTML = "";

    let i = 0;

    const intervalo = setInterval(()=>{

        text.innerHTML += frase[i];

        i++;

        if(i >= frase.length){

            clearInterval(intervalo);

            escribiendo = false;

            button.disabled = false;

        }

    },40);

}

/* =====================================
        PREGUNTA
===================================== */

function pregunta(){

    title.innerHTML="💜 Tengo una pregunta";

    text.innerHTML="¿Te gustaría salir conmigo?";

    imagenHistoria.src="assets/gatito_ojitos.png";

    buttons.innerHTML=`

        <button onclick="aceptar()">
            💜 Sí
        </button>

        <button onclick="rechazar()">
            No 😶
        </button>

    `;

}

/* =====================================
        BOTÓN NO
===================================== */

function rechazar(){

const mensajes=[

{
texto:"¿Segura...? 🥺",
imagen:"assets/triste.png"
},

{
texto:"Pero piensalo un momento mamasota",
imagen:"assets/bebe.png"
},

{
texto:"El gatito dice que vuelvas a mirar 👀",
imagen:"assets/gatoojitos.png"
},

{
texto:"Nueva York aún nos espera... 🗽",
imagen:"assets/negro.png"
},

{
texto:"¿Y la piña colada? 🍹",
imagen:"assets/perrosonriendo.png"
},

{
texto:"El botón no parece tener dudas",
imagen:"assets/gato.png"
},

{
texto:"Ultimo intento segura que no?👀",
imagen:"assets/perro.png"
},

{
texto:"Error 404: opción no encontrada.",
imagen:"assets/tejodes.png"
}

];

text.innerHTML=mensajes[intentosNo%mensajes.length].texto;

imagenHistoria.src=mensajes[intentosNo%mensajes.length].imagen;

intentosNo++;

}

/* =====================================
        BOTÓN SÍ
===================================== */

function aceptar(){

title.innerHTML="🥹💜";

text.innerHTML=`

Sabía que tenía que intentarlo.

Ahora solo espero que podamos vivir muchos momentos juntos.

🍹 Compartir una piña colada.

🦐 Salir a comer mariscos.

🛍️ Perdernos de compras.

🍳 Cocinar juntos.

🎵 Escuchar una buena bachata.

🗽 Soñar con Nueva York.

🐱 Saludar a todos los gatos que encontremos.

❤️ Y crear muchísimos recuerdos.

`;

imagenHistoria.src="assets/gatito2.png";

buttons.style.display="none";

lluvia();

}

/* =====================================
        CORAZONES
===================================== */

function crearCorazon(){

const emojis=["💜","🩷","🤍"];

const corazon=document.createElement("div");

corazon.className="heart";

corazon.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

corazon.style.left=Math.random()*100+"%";

corazon.style.animationDuration=(Math.random()*3+3)+"s";

corazon.style.fontSize=(20+Math.random()*18)+"px";

hearts.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},6000);

}

/* =====================================
        LLUVIA FINAL
===================================== */

function lluvia(){

for(let i=0;i<150;i++){

setTimeout(()=>{

crearCorazon();

},i*35);

}

}

/* =====================================
        HUELLAS
===================================== */

function crearHuella(){

const huella=document.createElement("div");

huella.className="huella";

huella.innerHTML="🐾";

huella.style.left=Math.random()*100+"%";

huella.style.animationDuration=(Math.random()*5+6)+"s";

huella.style.fontSize=(18+Math.random()*15)+"px";

huellas.appendChild(huella);

setTimeout(()=>{

huella.remove();

},11000);

}

setInterval(crearHuella,350);