class Student {
    // Propiedades o Atributos
    firstname: string;
    lastname: string;
    age: number;

    //constructor
    constructor(firstname: string, lastname: string, age: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // Metodos
    printStudent(){
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this.firstname + " " + this.lastname);
        console.log(" Edad: " + this.age);        
    }
}

const sergioOchoa: Student = new Student('Sergio', 'Ochoa', 31);
sergioOchoa.printStudent();
console.log('Impresion diretamente con los atributos');

sergioOchoa.firstname = "Antonio";
console.log('Nombre: ' + sergioOchoa.firstname);

sergioOchoa.lastname = 'Martinez';
console.log('Apellido: ' + sergioOchoa.lastname);

sergioOchoa.age = 30;
console.log('Edad: '+ sergioOchoa.age);






