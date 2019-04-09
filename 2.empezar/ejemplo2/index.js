// Datos primitivos o basicos
var fullname = "Sergio Ochoa";
var age = 31;
var developer = true;
// Arrays
var skills = ['JavaScript', 'Typescript', 'Angular'];
var numbers = [1, 2, 3];
// Enum
var Role;
(function (Role) {
    Role[Role["Employee"] = 0] = "Employee";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
var role = Role.Employee;
console.log('Role' + role);
// any -> no es muy bueno utilizarlo ya que ignora el tipado estatico
var firstname = 'Sergio';
firstname = 4;
var days = ['Lunes', 2, 'Martes',];
console.log(days[0]);
