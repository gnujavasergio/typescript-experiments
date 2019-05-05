/**
 * Las funciones de javascript pueden ser utilizadas en typecript
 * como no declaramos el tipo de dato a los parametros 
 * typescript automaticamente la asigna el tipo any
 * 
 * @param op1 
 * @param ope2 
 */
function suma(op1, ope2){
    return op1 + ope2;
}
console.log(suma(1,2));

/**
 * Este es la declaracion de typescript con cualquier tipo de dato
 * @param op1 
 * @param ope2 
 */
function resta(op1: any, ope2: any): any {
    return op1 - ope2;
}
console.log(resta(1,2));

/**
 * Funcion con tipos de datos asignados a los parametros y con un tipo de retorno
 * @param op1 
 * @param ope2 
 */
function multiplicacion(op1: number, ope2: number): number{
    return op1 * ope2;
}
console.log(multiplicacion(4,5));

/**
 * En una funcion como tipo de retorno es void no podemos retornar nada
 * o null o undefined
 * @param op1 
 * @param ope2 
 */
function division(op1: number, ope2: number): void{    
    // return null;
    return undefined;
}
console.log(division(1,4));

/**
 * Funcion con un parametro opcional
 * @param name 
 */
function saludo(name?: string): void{
    console.log('hola' + name);
}
saludo();
saludo('Sergio');

/**
 * Los parametros obligatorios tienen que estar declarados al principio
 * y los parametros opcionales tiene que estar al final
 * 
 * @param firstname 
 * @param lastname 
 */
function unir(firstname: string, lastname?:string): void{
    console.log(firstname + ' ' + lastname);
}
unir('Sergio');
unir('Sergio','Ochoa');

/**
 * Funciones con parametros con valores por defecto
 * @param name 
 */
function welcome(name: string = 'Sergio'){
    console.log('Hola ' + name);    
}
welcome();
