
var elige = prompt("Elige una opción: (1/2))")
var opcion1 = 1;
var opcion2 = 2; /*intro button en html*/


    var num1 = prompt("Di un número:");
    var num2 = prompt("Di otro número:");

    if (num1 % 2 == 0 && num2 % 2 == 0) {
        alert("Ambos son pares");
    } 
    if (num1 % 2 == 1 && num2 == 0 ) {
        alert("El segundo número es par");
    }
    if (num1 % 2 == 0 && num2 != 0 ) {
        alert("El primer número es par");
    }
    if (num1 % 2 != 0 && num2 != 0 ) {
        alert("Ningún número es par");
    }
    
    /*if (num1 / 25 = numero entero) {
        alert("Y es múltiplo de 25")
    } 
    if (num2 / 25 = numero entero) {
        alert("Y es múltiplo de 25")
    } 
    
}*/


    /* una funcion que pida una palabra y compruebe las letras, hasta dar si primera = a || ultima = a*/

    
    var palabra = prompt("Di una palabra");
    const letra = "a";
    
    if (letra=palabra.length) {
        alert("La ultima letra es la a");
    }

}