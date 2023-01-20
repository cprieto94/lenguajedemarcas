function manejadorLoadBody(){
    console.log("Se ha cargado el body");
    peticionAsincrona(pintarFarmaciasMejor);
}

function peticionAsincrona(metodo){
    const url="https://www.zaragoza.es/sede/servicio/farmacia?rf=html&srsname=wgs84&tipo=guardia&start=0&rows=50&distance=500";
    const http = new XMLHttpRequest();
    http.open("GET", url);

    http.setRequestHeader("accept", "application/json");
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            
            let resultado = JSON.parse(this.responseText);
            console.log(resultado);
            metodo(resultado);
        }
    }
    http.send();
}

function pintarFarmacias(objFarmacias){

    let contenedor = document.getElementById("listaFarmacias");
    let arrayFarmacias = objFarmacias.result;
    let contenido ='<ul>';

    arrayFarmacias.forEach(f => {
        contenido += '<li>' + f.title + '</li>';
    });
    contenido += '</ul>';

    contenedor.innerHTML += contenido;
}

function pintarFarmaciasMejor(objFarmacias){

    let contenedor = document.getElementById("listaFarmacias");
    let arrayFarmacias = objFarmacias.result;
    let contenido ='<ol>';

    arrayFarmacias.forEach(f => {
        contenido += '<li><h4>' + f.title + '</h4>';
        if (f.horario)
            contenido += '<ul><li>' + f.horario + '</li></ul></li>'; 
        else
            contenido += '</li>'
    });
    contenido += '</ol>';

    contenedor.innerHTML += contenido;
}