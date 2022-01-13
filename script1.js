/*var transacciones = parseInt(prompt("Introduce el número de transacciones: "));
var gastoTotal = parseInt(prompt("¿Cuánto gastaste en total durante el mes?"));

var gastos = function(transacciones, b, gastoTotal){
    b = 0.01;
    impuestoGasto = transacciones*3;
    gastoSuma = impuestoGasto + gastoTotal;
    impuestoTotal = gastoSuma * b;

    alert("El total a pagar es: " + impuestoTotal);
}
gastos();
*/

(() =>{
    let num_transacciones = prompt("Indica el numero de transacciones");
    trasanccion(num_transacciones);
})();

function trasanccion(num_transacciones){
    var transacciones = null;
    var total = null; 
    transacciones = num_transacciones*3;
    console.log(transacciones);
    for(let i = 0; i<num_transacciones;i++){
        let pagos = prompt(`Ingresa el monto de la transaccion`);
        total = Number(total)+Number(pagos);
        console.log(total)
    }
    total += transacciones;
    total = total+(total*0.01);
    alert(`El total de a pagar es: ${total} dolares`);
}

/*
var amix1 = prompt("Ingresa el nombre de tu amigo 1: ");
var amix2 = prompt("Ingresa el nombre de tu amigo 2: ");
var amix3 = prompt("Ingresa el nombre de tu amigo 3: ");

function amigos(){
    return alert("Bienvenido " + amix1 + ", " + amix2 + ", " + amix3);
}
amigos();

*/
/*

function birth(year, now)
{ 
    var year = prompt("Ingresa tu año de nacimiento ");
    var now = 2022;
    var res = now-year;
    alert("Tu edad es: " + res)
}

birth();

//Parte 3

var amx1 = prompt("Ingresa tu nombre persona 1 ");
var edad1 = prompt("Ingresa tu edad persona 1");
var amx2 = prompt ("Ingresa tu nombre persona 2");
var edad2 = prompt ("Ingresa tu edad persona 2");
var amx3 = prompt ("Ingresa tu nombre persona 3");
var edad3 = prompt ("Ingresa tu edad persona 3");

function amigos(amx1,amx2,amx3, edad1, edad2, edad3){
    
    alert("Bienvenido "  + amx1 +" Tu edad es " + edad1 + " Bienvenido "  + amx2 +" Tu edad es " + edad2 + " Bienvenido "  + amx3 +" Tu edad es " + edad3 );
}
amigos (amx1, amx2, amx3, edad1, edad2, edad3);

*/

//Challenge yourself
/*

var approve = function(){
    var cali = parseInt(prompt("Ingresa tu calificación "));

    if (cali >= 5) {
            return true;
        }
        else (cali < 5)
            return false;
}

var mostrar = function(){
if (approve() == true && cali > 8 && cali < 11){
    alarm("Excellent");
}
    else (approve() == true && cali == 11)
    alarm("Perfect");
}

mostrar();
*/
