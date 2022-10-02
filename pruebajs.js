
var frase = prompt("Pon una frase: ");
var espacio = " ";
var contador = 0;
var num_palabras;

for ( var i=0; i<frase.length; i++) {

    if (espacio == frase.charAt(i)) {
        contador++;
        num_palabras = (contador + 1);

    }
}
alert(num_palabras)


