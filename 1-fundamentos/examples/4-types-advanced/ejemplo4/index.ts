
type numberOrString = number | string;
let age: numberOrString;
age = 31;
age = "Treinta uno"

class User {
    name: string = "";
}

class Admin {
    permissions: number = 0;
}

// Declarando nuestro tipo
type UserAdmin = User&Admin;
let user: UserAdmin = new User() as UserAdmin;

user.name = "Sergio";
user.permissions = 7;
console.log("User: " + user.name);
console.log("Admin: " + user.permissions);

// Types Aliases lo podemos usar en la estructura de una función
type funcString = () => string; // declaramos una funcion que retorna una función

function ejecutar(func: funcString){
    
}

// Parametro con una funcion que devuelve un string.
ejecutar(() => "Hola");
