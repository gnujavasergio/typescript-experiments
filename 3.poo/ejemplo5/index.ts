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
        console.log("Edad: " + this.age);        
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

    /**
     * Sobreescribir el metodo del padre
     * En esta funcion se añadira nueva funcionalidad
     */
    print(){
        super.print(); // sin esta sentencia no se podra tenera la funcion principal de la clase padre
        console.log('CU:' + this.carnetUniversitario);
    }
}

const sergioOchoa: Student = new Student('Sergio', 'Ochoa', 31, '35-1111');
sergioOchoa.print();
