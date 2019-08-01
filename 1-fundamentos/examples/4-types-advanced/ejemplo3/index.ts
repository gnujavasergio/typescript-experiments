
class User {
    name: string = "";
}

class Admin {
    permissions: number = 0;
}

// Para hacer Intersections Types se utiliza "&"
let user: User&Admin = new User() as User&Admin;

user.name = "Sergio";
user.permissions = 7;

console.log("User: " + user.name);
console.log("Admin: " + user.permissions);
