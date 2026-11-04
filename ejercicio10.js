/* Ejercicio 10: Objeto + map + función
Crear función 'promediarEdades' que devuelva el promedio de edades de un array de personas
Datos de prueba:
console.log(promediarEdades(grupo)); */ 

const promediarEdades = (personas) => {
    const edades = personas.map(persona => persona.edad);

    return edades.reduce() / edades.length();
};

console.log(promediarEdades(grupo));