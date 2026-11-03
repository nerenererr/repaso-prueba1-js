/* Ejercicio 3: Operador Ternario y Tipos de Datos
1. Crea una variable numero y asígnale un valor numérico cualquiera.
2. Utiliza el operador ternario para asignar a la variable tipoNumero el valor "positivo" si numero es mayor que 0, y "negativo o cero" si no lo es.
3. Declara una variable cadena y asígnale un valor de tipo cadena de texto.
4. Utiliza el operador ternario para asignar a la variable longitudCadena indicar que la cadena es "larga" si su longitud es mayor que 5, y "corta" si no lo es. */ 


const numero = 22;
const positivo = (numero) => numero > 0 ? "Positivo" : "Negativo o cero"
console.log(positivo(numero))

const cadena = "Hola";
const longitudCadena = (cadena) => cadena.length > 5 ? "Larga" : "Corta"
console.log(longitudCadena(cadena))
