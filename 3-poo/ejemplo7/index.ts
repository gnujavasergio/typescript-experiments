/**
 * Clase padre
 */
class People {
    // modificador de acceso protected que solo sera visible para las clases hijas
    protected _firstname: string;
    // Modificador de acceso public que es visible para cualquier clase
    public lastname: string;
    // Modificador de acceso por defecto que es lo mismo que public
    age: number;

    //constructor
    constructor(firstname: string, lastname: string, age: number) {
        this._firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // Metodos
    print() {
        console.log('Impresion desde la clase');
        console.log('Nombre Completo: ' + this._firstname + " " + this.lastname);
        console.log("Edad: " + this.age);
    }

    get firstname(): string {
        return this._firstname;
    }

    set firstname(firstname: string) {
        this._firstname = firstname;
    }
}

class Student extends People {
    // modificador de acceso private que solo es visibla para la misma clase
    private _carnetUniversitario: string;

    constructor(firstname: string, lastname: string, age: number, carnetUniversitario: string) {
        super(firstname, lastname, age); // llamada al constructor del la clase padre       
        this._carnetUniversitario = carnetUniversitario;
    }

    /**
     * Sobreescribir el metodo del padre
     * En esta funcion se añadira nueva funcionalidad
     */
    print() {
        super.print(); // sin esta sentencia no se podra tenera la funcion principal de la clase padre
        console.log('CU:' + this._carnetUniversitario);
    }

    get carnetUniversitario(): string {
        return this._carnetUniversitario;
    }

    set carnetUniversitario(carnetUniversitario: string) {
        this._carnetUniversitario = carnetUniversitario;
    }
}

const sergioOchoa: Student = new Student('Sergio', 'Ochoa', 31, '35-1111');
sergioOchoa.print();
console.log('Impresion diretamente con los atributos');
// Firstname es un atributo protected y para modificarlo o acceder a este atributo 
// Se tiene que hacerlo si o si a traves de su metodo get y set
sergioOchoa.firstname ="Antonio";
console.log('Nombre: ' + sergioOchoa.firstname);

// Lastname es atributo publico modificarlo o cambiarlo se lo hace directamente
sergioOchoa.lastname = 'Martinez';
console.log('Apellido: ' + sergioOchoa.lastname);

// Age es un atributo su tipo de acceso es por defecto que tiene la misma funcionalidad de un atributo publico
sergioOchoa.age = 30;
console.log('Edad: ' + sergioOchoa.age);

// carnetUniversitario es un atributo privado y para modificarlo o acceder a este atributo 
// Se tiene que hacerlo si o si a traves de su metodo get y set
sergioOchoa.carnetUniversitario = "35-4545";
console.log('CU: ' + sergioOchoa.carnetUniversitario);




