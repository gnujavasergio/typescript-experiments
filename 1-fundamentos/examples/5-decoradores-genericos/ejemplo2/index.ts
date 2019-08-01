/**
 * Genericos en funciones
 */
function print<T>(tipo: T){
    console.log(tipo);
}

print<string>("Hola");
print<number>(20);

/**
 * Funciones con returno
 */
function setData<T>(obj: T): T{
    return obj;
}

let saludo = setData<string>("Saludo");

/**
 * Genericos de Clase
 */

 class PrintConsole<T> {

    print<T>(list:T[]) {
        list.forEach(element => {
            console.log(`Elemento: ${element}`);            
        });
        console.log(`Tamaño: ${list.length}`);
    }
 }

 let printConsole: PrintConsole<number> = new PrintConsole();
 printConsole.print([1,2,3,4,5,7]);


 /**
  * Funciones con clase
  */
class Animal {
}

function cuidar<T>(algo: T): T {
  return algo;
}

let algo = cuidar(new Animal());

/**
 * Genericos restricciones de interfaces
 */
interface Asset {
    x: number;
    y: number;
}

// Aqui se limita para el la funcion solo acepto un tipo con las restricciones que tiene la interface
function game<T extends Asset>(obj: T){
    console.log(`X: ${obj.x}`);
    console.log(`Y: ${obj.y}`);
}

class Point {
    x: number = 0;
    y: number = 0;
}

const p1: Point = new Point();
game<Point>(p1);

/**
 * Genericos en una interface
 */
interface Generic<T,K>{

    add(obj: T): boolean;

    update(obj:T) : boolean;

    delete(id: K) : boolean;

    findById(id: K): T;

    findAll(): Array<T>;
}

class Student {
    firstname: string;
    lastname: string;
    age: number;

    constructor(firstname: string = "", lastname: string = "", age: number = 0){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    
}

class StudentDAO implements Generic<Student, number>{

    add(obj: Student): boolean {
        throw new Error("Method not implemented.");
    }    
    
    update(obj: Student): boolean {
        throw new Error("Method not implemented.");
    }

    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

    findById(id: number): Student {
        throw new Error("Method not implemented.");
    }

    findAll(): Student[] {
        throw new Error("Method not implemented.");
    }
}
