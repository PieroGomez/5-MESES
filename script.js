// ==========================
// ELEMENTOS
// ==========================

const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcomeScreen");
const universe = document.getElementById("universe");

const bgMusic = document.getElementById("bgMusic");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeModal = document.getElementById("closeModal");

const progressText = document.getElementById("progressText");
const finalScreen = document.getElementById("finalScreen");
const finalMessage = document.getElementById("finalMessage");
const playVoiceBtn = document.getElementById("playVoiceBtn");
const endingText = document.getElementById("endingText");
const finalAudio = document.getElementById("finalAudio");
const stars = document.querySelectorAll(".star");

// ==========================
// DATOS DE LOS RECUERDOS
// ==========================

const memories = [

{
title:"✨ El Inicio de Todo",
image:"foto0.5.jpg",
text:"Esta foto representa el día en que nuestras almas se encontraron indirectamente. Fue nuestra primera salida, un momento que decidió mucho de nuestro futuro y que nos unió de una manera inimaginable. A veces los momentos más importantes llegan sin avisar. Nunca olvidaré el inicio de todo."
},

{
title:"🌊 Nuestra Primera Aventura",
image:"foto1.jpg",
text:"Fue nuestra primera salida a un lugar que ambos amamos mucho: la playa. Estuvimos acompañados de algunos amigos míos, pero aun así ese día quedó grabado para siempre en mi corazón. Fue una experiencia inolvidable porque representa uno de los recuerdos más importantes de nuestra historia. Fue el comienzo de nuestra relación."
},

{
title:"💖 Conociéndonos de Verdad",
image:"foto2.jpg",
text:"Esta fue nuestra segunda salida. Un día para divertirnos, conocernos más y descubrir nuevas cosas el uno del otro. También fue el inicio de tu forma más auténtica conmigo. Todo fueron risas, abrazos y momentos que todavía recuerdo con una sonrisa. Fue la primera vez que pude descansar sobre tu pecho sintiéndome completamente en paz."
},

{
title:"💋 Nuestro Reencuentro",
image:"foto3.jpg",
text:"No tenemos una foto de nuestro primer beso, pero ambos sabemos que jamás lo olvidaremos. Esta imagen tiene muchísimo significado para mí porque me permitiste verte de la forma más vulnerable posible. Además, nos reencontrábamos después de un mes de distancia. Fue un momento lleno de emociones."
},

{
title:"👨‍👩‍👧 Conociendo Mi Mundo",
image:"foto4.jpg",
text:"Esta fue nuestra primera fiesta familiar juntos por parte de mi familia. La pasamos muy bien. Tuvimos uno que otro percance y tampoco faltó la chinchosa de mi prima. Pero más allá de todo eso, fue un día especial porque pude presentarte a una parte importante de mi vida."
},

{
title:"🍽️ Nuestra Primera Cena",
image:"foto5.jpg",
text:"Nuestra primera salida a cenar. Puede parecer algo sencillo, pero para mí fue un momento único. Todo se sintió diferente, especial y hermoso. Esa noche me hizo entender que incluso las cosas más simples se vuelven extraordinarias cuando las comparto contigo."
},

{
title:"🏡 Ya Eres Parte de Mi Hogar",
image:"foto6.jpg",
text:"Esta foto fue tomada en mi casa. Hoy vienes con naturalidad, como si siempre hubieras pertenecido aquí. Mi familia te recibe con cariño y te aprecia muchísimo. Y si no me equivoco, ese día querías hacerme una limpieza facial. Todavía me río al recordarlo."
},

{
title:"❤️ Más Nuestros Que Nunca",
image:"foto7.jpg",
text:"Esta fue parte de nuestra penúltima salida. Fue un momento muy bonito. Un momento en el que sentí que cada uno era más del otro que de sí mismo. Hay recuerdos que no necesitan demasiadas palabras porque hablan por sí solos."
},

{
title:"🌟 Gracias Por Elegirme",
image:"foto8.jpg",
text:"Gracias por seguir eligiéndome incluso en los días complicados. Gracias por tu paciencia, tu cariño y cada momento compartido. Tú sabes cuánto te amo y todo lo que estoy dispuesto a hacer por ti. Gracias por estos cinco meses maravillosos."
}

];

// ==========================
// PROGRESO
// ==========================

let unlockedIndex = 0;
let visited = 0;

// ==========================
// INICIO
// ==========================

startBtn.addEventListener("click", () => {

welcomeScreen.classList.add("hidden");
universe.classList.remove("hidden");

bgMusic.volume = 0.4;

bgMusic.play().catch(() => {});

});

// ==========================
// ESTRELLAS
// ==========================

stars.forEach(star => {

star.addEventListener("click", () => {

const id = parseInt(star.dataset.id);

if(id > unlockedIndex){
return;
}

openMemory(id);

});

});

// ==========================
// ABRIR RECUERDO
// ==========================

function openMemory(id){

const memory = memories[id];

modalImage.src = "fotos/" + memory.image;
modalTitle.textContent = memory.title;
modalText.textContent = memory.text;

modal.style.display = "flex";

const star = document.querySelector(`[data-id="${id}"]`);

if(!star.classList.contains("visited")){

star.classList.add("visited");

visited++;

progressText.textContent =
`Recuerdos descubiertos: ${visited} / 9`;

unlockNext(id);

}

}

// ==========================
// DESBLOQUEAR SIGUIENTE
// ==========================

function unlockNext(current){

const next = current + 1;

if(next > 8){
return;
}

const nextStar = document.querySelector(
`[data-id="${next}"]`
);

if(nextStar){

nextStar.classList.remove("locked");

if(next === 8){
nextStar.innerHTML = "🌟";
}
else{
nextStar.innerHTML = "⭐";
}

nextStar.classList.add("unlocked");

unlockedIndex = next;

}

}

// ==========================
// CERRAR MODAL
// ==========================

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

    if(visited === 9){

        setTimeout(() => {

            showFinalScreen();

        },1000);

    }

});

window.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.style.display = "none";

        if(visited === 9){

            setTimeout(() => {

                showFinalScreen();

            },1000);

        }

    }

});
// ==========================
// FINAL CINEMATOGRÁFICO
// ==========================

const finalText = `
Si llegaste hasta aquí...

Significa que recorriste cada rincón de nuestro pequeño universo.

Y mientras preparaba esta sorpresa me di cuenta de algo.

Hemos vivido muchísimas cosas en muy poco tiempo.

Momentos felices.

Momentos difíciles.

Risas.

Abrazos.

Recuerdos inolvidables.

Y aun así siento que lo mejor de nuestra historia todavía está por comenzar.

Gracias por seguir eligiéndome incluso en los días complicados.

Gracias por tu paciencia.

Gracias por tu cariño.

Gracias por cada momento compartido.

Tú sabes cuánto te amo.

Y sabes también todo lo que estoy dispuesto a hacer por ti.

Gracias por estos cinco meses maravillosos.

Te amo hoy.

Te amaré mañana.

Y te amaré siempre.

❤️
`;

function showFinalScreen(){

    universe.classList.add("hidden");

    finalScreen.classList.remove("hidden");

    let index = 0;

    finalMessage.innerHTML = "";

    const interval = setInterval(() => {

        finalMessage.innerHTML += finalText.charAt(index);

        index++;

        if(index >= finalText.length){

            clearInterval(interval);

        }

    },40);

}

// ==========================
// AUDIO FINAL
// ==========================

playVoiceBtn.addEventListener("click", () => {

    playVoiceBtn.disabled = true;

    const fadeOut = setInterval(() => {

        if(bgMusic.volume > 0.15){

            bgMusic.volume -= 0.05;

        }else{

            clearInterval(fadeOut);

        }

    },150);

    finalAudio.play();

});

finalAudio.addEventListener("ended", () => {

    const fadeIn = setInterval(() => {

        if(bgMusic.volume < 0.4){

            bgMusic.volume += 0.05;

        }else{

            clearInterval(fadeIn);

        }

    },150);

    endingText.classList.remove("hidden");

});