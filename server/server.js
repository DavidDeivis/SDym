import path from "path";
import express from "express";
const app = express();
import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
import {createReadStream} from 'fs';

let historia;
import {etapas} from "./historia/informacion.js";
import {etapas2} from "./historia/informacion2.js";
import {LiceoInicio} from "./historia/decisiones1/LiceoInicio.js";
import {dormir} from "./historia/decisiones1/dormir.js";
import {saltar} from "./historia/decisiones1/saltar.js";

//setting
app.set("PORT", process.env.PORT ||7535);

// console.log(__dirname);

//File static
app.use(express.static(path.join("../public")));

let guardado = 0;
let guardado1 = 0;

//Inicializar
const server = app.listen(app.get("PORT"), ()=>{
	console.log(`Servidor en ${app.get("PORT")}`);
})

let camino = 0;

historia = etapas;



app.get("/load", (req, res)=>{

	// res.writeHead(200, { 'Content-Type': "video/mp4" })
	// res.writeHead(200, {"Content-Type": "audio/mp3"});

	// console.log(video);

	res.sendFile("../public/end/dxs1.png");
	// C:/Users/L/Documents/pasar/Project/LibroJuego/public/sounds/Piano.mp3
})



app.get("/entrada", (req, res)=>{
	res.writeHead(200, { 'Content-Type': "HTML_CONTENT_TYPE" })
    createReadStream('../public/stast.html').pipe(res)
	console.log("yes");
})


app.get("/data", (req, res) =>{

	if(historia[guardado] == undefined){
		// console.log("fin");
		return;
	}

	let dato = historia[guardado];

		if(dato.tipo == "sound"){
			console.log(guardado);
			res.send(JSON.stringify(`{"model": "s", "src": "${dato.mensaje}", "time": ${dato.time}, "stop": ${dato.stop}}`));
		} 

		if(dato.tipo == "mensaje"){
			res.send(JSON.stringify(`{"model": "m", "element": "<div></div><p>${dato.mensaje}</p>", "time": ${dato.time}}`));
		}

		if(dato.tipo == "imagen"){
			console.log("Imagen")
			res.send(JSON.stringify(`{"model": "i", "src": "${dato.mensaje}", "time": ${dato.time}}`));
		}

		if(dato.tipo == "video"){
			res.send(JSON.stringify(`{"model": "v", "src": "${dato.mensaje}", "time": ${dato.time}}`));
		}

		if(dato.tipo == "decision"){
			console.log("Tomada una decisión")
			res.send(JSON.stringify(`{"model": "d", "element": "${dato.opciones}", "time": ${dato.time}}`));
		}

		if(dato.tipo == "push"){
			console.log("Llegue al salón")
			res.send(JSON.stringify(`{"model": "p"}`));
		}

		if(dato.tipo == "end"){
			console.log("Ending");
			res.send(JSON.stringify(`{"model": "end"}`));
		}

		guardado++;

});


app.post("/data/local", (req, res) =>{

	console.log(req.body.opcion);

	if(historia == etapas){
		//Dormir
		if(req.body.opcion == 0){
			historia = dormir;
			console.log("Historia: Dormir")
			res.send("desition");
		}
		//Correr
		if(req.body.opcion == 1){
			historia = LiceoInicio;
			console.log("Historia: Correr")
			res.send("desition");
		}
		//Saltar
		// if(req.body.opcion == 2){
		// 	historia = saltar;
		// 	console.log("Historia: Saltar")
		// }
		guardado = 0;
		return;
	}


});


app.get("/data/local", (req, res) =>{

	if(historia == dormir || LiceoInicio){
		console.log("etapa2");
		historia = etapas2;
		guardado = 0;
		return;
	}

})


app.get("/play", (req, res)=>{
	historia = etapas;
	guardado = 0;
})


