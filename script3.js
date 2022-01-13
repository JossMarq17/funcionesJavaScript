//Challenge yourself
//Part 1
//A student passes if they have a score greater than or equal to 5. Create a function that returns a boolean true or false.
var calif = parseInt((prompt("Ingrese calificación: ")));

function pasa(){
    if (calif >= 5 && calif <= 11){
        return true;
    } else {
        return false;
    }
}

//Part 2
//A student has an excellent grade if they score higher than 8. Add on to your function to print out "Excellent" for scores greater than 8.
function califinal(){
    if (pasa() == true && calif > 8 && calif < 11){
        alert("Excellent");
    } else if (pasa() == true && calif == 11){
        alert("Perfect");
    } else if (pasa() == true && calif >= 5){
        alert("Pasa");
    } else {
        alert("Reprobado");
    }
    
}

califinal();

//Equipo:
/*
function approve (cali){
    var cali = parseInt(prompt("Ingresa tu calificación "));
    if (cali >= 5 && cali <= 8 ) {
        alert("Tu status es " + true);
        }
        else if (cali > 8 && cali <=10) {
        alert("Tu status es Excelet");
        } 
        else if (cali == 11) {
            alert("Tu status es Perfec! :)");
                }
        else if (cali > 11) {
        alert("Ingresa una calificacion valida");
            }
        else{
        alert("Tu status es " + false);
            }
        }   
approve();
*/