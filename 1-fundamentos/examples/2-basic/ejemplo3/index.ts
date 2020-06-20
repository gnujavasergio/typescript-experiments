// Variables sin tipo
let nombre; // Declaración de una variable
let apellido = "Ochoa"; // Declaracion de una variable asignandole un valor

// Variables con tipo
let fullname: string = "Sergio Ochoa";
let age: number = 32;
let developer: boolean = true;

// Variables dinamicas
let variable: any = "Hola";
variable = 5;
console.log(variable);

// Enum
enum Role {
    Employee, Manager, Admin, Developer
}
var role: Role = Role.Employee;
console.log('Role' + role);

// Arrays
let skills: Array<string> = ['JavaScript', 'Typescript', 'Angular'];
let numbers: number[] = [1, 2, 3];

// any -> no es muy bueno utilizarlo ya que ignora el tipado estatico
let firstname: any = 'Sergio';
firstname = 4;
let days: any[] = ['Lunes', 2, 'Martes',];
console.log(days[0]);

// Constantes
const FAVORITO: string = "dart";
// FAVORITO = "python"; // ya no se puede cambiar el valor de una constante
console.log(FAVORITO);