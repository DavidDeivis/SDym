const container = document.querySelector(".game");
const resolucion = document.querySelector(".resolucion");
const containerEnd = document.getElementById("container-end");
const button = document.getElementById("play");
const soundInicial = document.querySelector(".audio")
var desitionB = false;
const https = "http://192.168.193.63:7535";
// http://localhost:7535
// https://staymlawter.onrender.com
// http://192.168.193.63:7535


// let headers = {
// 	method: "GET",
// 	body: `{"nombre": "david", "apellido": "doble"}`,
// 	headers: {"Content-type": "application/json"}
// }

// fetch('http://localhost:7040/info')
  // .then(response => response.json())
  // .then(data => console.log(data));


// fetch('http://localhost:7040/video',{
// 	method: "POST",
// 	headers: {
//     'Content-Type': 'application/json' //;charset=utf-8
//     },
// 	body: JSON.stringify(user)
// }).then(response => response.json())
//   .then(data => console.log(data));


	// const peti = await fetch('http://localhost:7535/data/local',{
	// 	method: "POST",
	// 	headers: {
	// 	'Content-Type': 'application/json'
	// 	   },
	// 	body: JSON.stringify({opcion: camino})
	// });

	// const peti2 = await peti.json();
	// console.log(peti2);

	// apiObservar.observe(resolucion);


let publicacion = 0;
let cargado = 0;


// http://localhost:7535/data/local
// https://staym4.onrender.com


const decidido = async camino =>{


	if(camino == 0){



	fetch(`${https}/data/local`,{
		method: "POST",
		headers: {
		'Content-Type': 'application/json'
		   },
		body: JSON.stringify({opcion: camino})
	}).then(response => response.text())
  	  .then(res => look(true));

	}

	if(camino == 1){

	fetch(`${https}/data/local`,{
		method: "POST",
		headers: {
		'Content-Type': 'application/json'
		   },
		body: JSON.stringify({opcion: camino})
	}).then(response => response.text())
  	  .then(res => look(true));

	}

	if(camino == 2){

	fetch(`${https}/data/local`,{
		method: "POST",
		headers: {
		'Content-Type': 'application/json'
		   },
		body: JSON.stringify({opcion: camino})
	});

	}

	look();

}

let entrada = true;

const observar = async entry =>{

	// console.log(entry.length);

	// console.log(entry[0])

	// console.log(entry[entry.length - 1]);

	if(!entrada){
		return;
	}


	if((entry[entry.length - 1].isIntersecting) && desitionB == false){


		// console.log("envio")

		entrada = false;

		let peticion = await fetch(`${https}/data`);
		let res = await peticion.json();

		let res2 = JSON.parse(res);


		
		// console.log(res2);

		if(res2.model == "p"){
			fetch(`${https}/data/local`);
			look();
			entrada = true;
			return;
		}


		if(res2.model == "m"){
			var nodo = document.createElement("DIV");
			nodo.classList.add("chat");
			nodo.innerHTML = res2.element;
		}
		else if(res2.model == "v"){
			var nodo = document.createElement("VIDEO");
			// nodo.classList.add("clips");
			nodo.src = res2.src;
			nodo.setAttribute("controls", "");
		}
		else if(res2.model == "i"){
			var nodo = document.createElement("IMG");
			nodo.src = res2.src;
		}
		else if(res2.model == "s"){
			var nodo = document.createElement("AUDIO");
			nodo.src = res2.src;
			nodo.setAttribute("autoplay", "");

			setTimeout(()=>{

				nodo.pause();
				
			 	look();
			 	entrada = true;
			 	return;

			}, res2.stop);
		}
		else if(res2.model == "d"){
			desitionB = true;
			var nodo = document.createElement("div");
			nodo.classList.add("container-desition");
			let variante = res2.element.split("|");

			let u = document.createDocumentFragment();

			for (let i = 0; i < variante.length; i++) {

				let desition = document.createElement("BUTTON");
				desition.classList.add("desition", `${i + 1}`);
				desition.textContent = variante[i];

				desition.addEventListener("click", ()=>{
					decidido(i);
				});

				u.appendChild(desition);
				
			}

			nodo.appendChild(u);
			entrada = true;
		}
		else if(res2.model == "end"){

			let u = document.createDocumentFragment();
			let end = document.createElement("BUTTON");
			end.classList.add("desition");
			end.style.display = "block";
			end.style.margin = "auto";
			end.textContent = "Ending";
			end.src = res2.model.element;
			end.addEventListener("click", ()=>{
				// look();
				// container.style.display = "none";

				containerEnd.style.display = "block";
				container.appendChild(containerEnd);
				soundInicial.pause();
				setTimeout(()=>{
					document.querySelector(".soundEnding").play();
				}, 700)
				end.style.display = "none";
			})

			u.appendChild(end);

			container.appendChild(u);
			return;
		}


		setTimeout(()=>{

			container.appendChild(nodo);

			setTimeout(()=>{
				nodo.style.opacity = 1;
			}, 100)
			
			if(res2.model != "d" && res2.model != "s"){

				
				apiObservar.observe(nodo);
				entrada = true;
			}

		}, res2.time);

		// fetch('http://localhost:7040/info')
		 // .then(response => response.json())	
		 // .then(data => console.log(data));
		
	}
}

let apiObservar = new IntersectionObserver(observar);


function look(d){
	if(d){
		desitionB = false;
	}
	apiObservar = new IntersectionObserver(observar);
	apiObservar.observe(document.body);
}


function PLAY(){

	// let comenzar = fetch("http://localhost:7535/play");
	fetch(`${https}/play`)
	apiObservar.observe(document.body);

}

button.addEventListener("click", ()=>{

	document.getElementById("listCapitulo").style.display = "none";
	PLAY();
	activeAudio();
	
	// button.style.display = "none";
});

function activeAudio(){
	setTimeout(()=>{
		soundInicial.play();
		volumen(0.05);
	}, 10000)
}

const volumen = cantidad => document.querySelector(".audio").volume = cantidad; 