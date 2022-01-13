//Part1

var amix1 = prompt("Ingresa el nombre de tu amigo 1: ");
var amix2 = prompt("Ingresa el nombre de tu amigo 2: ");
var amix3 = prompt("Ingresa el nombre de tu amigo 3: ");

function amigos1(amix1, amix2, amix3){
    return alert("Bienvenido " + amix1 + ", " + amix2 + ", " + amix3);
}
amigos1(amix1, amix2, amix3);

//Part2

function birth(year, now)
{ 
    var year = prompt("Ingresa tu año de nacimiento ");
    var now = 2022;
    var res = now-year;
    alert("Tu edad es: " + res)
}

birth();

//Part3
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