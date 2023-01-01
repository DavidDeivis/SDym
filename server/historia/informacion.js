// Para texto: —
// Para acciones: -

//en sound: time, stop, mensaje:
// {tipo: "sound", time: 2000, stop: 4200, mensaje: "sounds/alarma.mp3"}

//En mensaje: time, mensaje
// {tipo: "mensaje", time: 1000, mensaje: "— Hola <br> <span> - saludas sonriendo</span>"},

//En imagen: time, mensaje
// {tipo: "imagen", time: 1000, mensaje: "img/portada.png"},

//En video: time, mensaje
// {tipo: "video", time: 1000, mensaje: "clips/video.mp4"},

// {tipo: "decision", time: 1000, opciones: "Dormir|Correr|Saltar"}
//En desición: time, opciones: "Dormir|Correr|Saltar"

export let etapas = 
[

{tipo: "sound", time: 500, stop: 4400, mensaje: "URLAlarma"}, //2000 4200
{tipo: "mensaje", time: 1000, mensaje: "Apagas la alarma<br><br>Capítulo 1: El comienzo del fin<br><br>Es hora de abrir los ojos. Una nueva aventura te espera<br><br>Te tapas la cara con una mano<br>— Me siento muy cansada como para ir de nuevo al Liceo (Educación secundaria)<br><span>- pero no tengo una mejor opción, ¿verdad?</span><br><br>Te levantas de la cama y te empiezas a vestir"},
{tipo: "imagen", time: 1000, mensaje: "img/img1.png"},
{tipo: "sound", time: 500, stop: 0, mensaje: "URLPiano"},
{tipo: "mensaje", time: 1000, mensaje: "— Bien, ya estoy preparada<br><br>Abres la puerta del cuarto y caminas por el pasillo del segundo piso de tu hogar<br><br><span>- Me pregunto si mi madre habra hecho el desayuno</span><br><br>Bajas a la cocina y al llegar te das cuenta que la cocina tiene la luz encendida, que no hay nadie y que la comida no está preparada<br><br>— No sé que estaba esperando realmente<br><br>En cabizbajo, te empiezas a entristecer y un muy ruidoso suspiro empieza a florecer de ti, animándote a seguir de pie. Levantas la cabeza y descongelas en el microonda un ramen que estaba guardado en la nevera en memoria de tu dieta<br><br>— ¡Perfecto! A comer"},
{tipo: "imagen", time: 1000, mensaje: "img/img2.png"},
{tipo: "mensaje", time: 1000, mensaje: "Al termina de comer finalmente, friegas el plato y te limpias la ropa que con encanto te pusiste con determinación y fulgor resplandiendo la habitación en tu honor<br><br>— En esta vida tan monótona prefiero dejar que la corriente me lleve a dónde sea..."},
{tipo: "decision", time: 1000, opciones: "Quedarte a ver la televisión|Ir al Liceo"}


]