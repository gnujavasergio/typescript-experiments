/**
 * Clase padre
 */
class People {
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
    print() {
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this.firstname + " " + this.lastname);
        console.log(" Edad: " + this.age);        
    }
}

/**
 * Clase Hija
 */
class Student extends People {
    carnetUniversitario: string;

    constructor(firstname: string, lastname: string, age: number, carnetUniversitario: string) {
        super(firstname, lastname, age); // llamada al constructor del la clase padre       
        this.carnetUniversitario = carnetUniversitario;
    }
}

const sergioOchoa: Student = new Student('Sergio', 'Ochoa', 31, '35-1111');
sergioOchoa.print();

console.log('Impresion diretamente con los atributos');

sergioOchoa.firstname = "Antonio";
console.log('Nombre: ' + sergioOchoa.firstname);

sergioOchoa.lastname = 'Martinez';
console.log('Apellido: ' + sergioOchoa.lastname);

sergioOchoa.age = 30;
console.log('Edad: ' + sergioOchoa.age);

sergioOchoa.carnetUniversitario = "35-2222";
console.log(sergioOchoa.carnetUniversitario);







