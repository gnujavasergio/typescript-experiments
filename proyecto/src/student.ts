class Student {
    firstname: string;
    lastname: string;
    phone: string;
    age: number;

    constructor(firstname: string = "", lastname: string = "", phone: string = "", age: number = 0){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.age = age;
    }
    
}