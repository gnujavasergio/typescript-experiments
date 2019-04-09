// Datos primitivos o basicos
let fullname:string = "Sergio Ochoa";
let age:number = 31;
let developer:boolean = true;

// Arrays
let skills:Array<string> = ['JavaScript', 'Typescript','Angular'];
let numbers:number[] = [1,2,3];

// Enum
enum Role {
    Employee, Manager, Admin, Developer
}
var role:Role = Role.Employee;
console.log('Role' + role);

// any -> no es muy bueno utilizarlo ya que ignora el tipado estatico
let firstname: any = 'Sergio';
firstname = 4;
let days:any[]= ['Lunes', 2, 'Martes', ];
console.log(days[0]);