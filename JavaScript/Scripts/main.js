function esPrimo(n) {
    for (i=2; i<n; i++){
        if (n%i === 0){
           return false; 
        }
    }
    return true;
}

let perro = {
    raza: "Beagle",
    peso: 20,
    altura: 0.4,
    color: "Pardo",
    ladrar: function() {
        console.log ("Guau");
    },
    Color_de_pelo : "Marrón y blanco",
};

let raza = perro.raza;
let peso = perro["peso"];

console.log(raza);

let usuario = new Object ();
let vacio2 = {};

usuario.nombre = "Pedro";
console.log(usuario.nombre);