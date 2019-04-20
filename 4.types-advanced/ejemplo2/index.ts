// La barra vertical | nos da la posibilidad de pode asignar dos tipos de datos a una variable.
let age: number | string;
age = 31;
console.log(age);
age = "Treinta uno";
console.log(age);

/**
 * Función que se le puede mandar tres tipos de datos para imprimir en 
 * consola
 */
function print(value: number | string | boolean){
    console.log(value);    
}

// Tambien puede se utilizado para mas de dos tipos
let value: number | string | boolean;
value = 5;
print(value);

value = "Hola";
print(value);

value = true;
print(value);


