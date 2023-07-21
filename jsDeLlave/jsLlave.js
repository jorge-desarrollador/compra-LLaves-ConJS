const contenedor = document.querySelector('.contenedorLlave');

function creacionDeLlave(llave,modelo,precio) {
	img = `<img class="llave-img" src="llave.png" alt="imagen de una llave">`;
	nombre =`<h2>${llave}</h2>`;
	modelo = `<h3>modelo: ${modelo}</h3>`;
	precio = `<p>precio: <b>$${precio}</b></p>`;
	return [img,nombre,modelo,precio]
}

const creacionFragmento = document.createDocumentFragment();
for(let i = 1; i <= 20; i++){
	let modeloRandom = Math.round(Math.random()*10000);
	let precioRandom = Math.round(Math.random()*10+10);
	const llave = creacionDeLlave(`llave ${i}`,modeloRandom,precioRandom);
	let creacionDiv = document.createElement("DIV");
	creacionDiv.tabIndex = i;
	creacionDiv.addEventListener("click",()=>{
		document.querySelector('.llave-primaria').value=modeloRandom;
	})
	creacionDiv.classList.add(`item-${i}`,`flex-item`);
	creacionDiv.innerHTML=llave[0]+llave[1]+llave[2]+llave[3];
	creacionFragmento.appendChild(creacionDiv);
}
contenedor.appendChild(creacionFragmento);