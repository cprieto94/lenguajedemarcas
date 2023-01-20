window.alert("Hola a todos y todas")

function manejadorLoadBody(){
    console.log("Se ha cargado el body");
    peticionAsincrona();
}

function peticionAsincrona(){
    const url="https://www.zaragoza.es/sede/servicio/farmacia?rf=html&srsname=wgs84&tipo=guardia&start=0&rows=50&distance=500";
    const http = new XMLHttpRequest();
    http.open("GET", url);

    http.setRequestHeader("accept", "application/json");
    http.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log (this.responseText);
            let resultado = JSON.parse(this.responseText)
        }
    }
    http.send();
}