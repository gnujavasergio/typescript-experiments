/**
 * Constructor sobrecargado con un parametro obligatorio
 */
class Video {
    /**
     * El metodo constructor es unico y es por el cual creamos el objeto
     * Si el constructor tiene parametros se tiene que mandar al crear el objeto     
     */
    constructor(title: string) {
        console.log(title);
    }
}

const myVideo: Video = new Video("Constructor");

/**
 * Constructor con parametros opcionales
 */
class Student {
    constructor(firstname: string, lastname?: string, age?: number) {
        console.log('Nombre:' + firstname);
        if (lastname != undefined) {
            console.log('Apellidos:' + lastname);
        }
        if (age !== undefined) {
            console.log('Edad:' + age);
        }
    }
}

const sergio: Student = new Student('Sergio');
const sergioOchoa: Student = new Student('Sergio', 'Ochoa');
const student = new Student('Sergio', 'Ochoa', 32);

/**
 * Constructor con parametros por defecto 
 */
class Welcome {
    constructor(name: string = 'amigo') {
        console.log('Hola ' + name);
    }
}

const amigo: Welcome = new Welcome();
const sergioW: Welcome = new Welcome('Sergio');



