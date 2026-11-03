/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */




const reverse = (text) => {
    let result = "";
    for (let i = 9; i >= 0; i--) {
        result += text[i];
    }
    return result;
}

console.log(reverse("Hola mundo"));