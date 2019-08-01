/**
 * Class con atributos y metodos estaticos
 */
class StudentRequest {

    static STUDENTS_GET: string = "http://syscode.dev/typescript/students";
    static STUDENT_GET: string = "http://syscode.dev/typescript/students/{id}";

    static getStudents(){
        // Podemos acceder al atributo directamente con el nombre de la clase
        console.log(`"students": [{"id":1,"firstname": "Sergio", "lastname": "Ochoa"}, "url": "${StudentRequest.STUDENTS_GET}"]`);
    }

    static getStudent(id: number){
        console.log(`"student":{"id":1,"firstname": "Sergio", "lastname": "Ochoa"}, "url": "${StudentRequest.STUDENT_GET}"`);
    }

}

// para acceder a un metodo estatico no nocesito instanciar la clase
StudentRequest.getStudents();
StudentRequest.getStudent(1);


