# POO en Typescript

## Que es la programación Orientada a Objetos(POO)

- La POO es un paradigma, que es mas cercana a la vida real por dos conceptos clases y objetos los cuales nos ayudan a abstraer las cosas y llevarlas a la programación.

## Clases
- Las clases son la abstracion de objetos
- La clase es algo mas generico

- **Ejemplo**: Portatil puede haber varias portatiles con diferentes caracteristicas, funcionalidades podemos comparar una portatil HP con una Lenovo, o comparar una portatil para gamers o para oficina. Cada una de esas portatiles tienen una funcionalidad diferente, colores, modelos y cualidades que hacen que sea para algo especifico pero nosotros podemos abstraer todo eso en una clase por ejemplo.

```
class Portatil {
    // Caracteristicas o Atributos
    modelo: string;
    marca: string;
    peso: number;
    velocidad: number;
    almacenamiento: number;
    
    // Funcionalidades o metodos
    programar():void {

    }

    jugar():void{

    }
}
```

## Objetos

- Objeto es algo unico que se puede obtener o crear de una clase o como en otros lo dicen realizar una instancia de una clase.
- En el ejemplo anterior de la clase portatil podemos crear un objeto unico.

```
let hpPortatil: Portatil = new Portatil();
let lenovoPortatil: Portatil = new Portatil();

```
## Referencias
- [POO](https://desarrolloweb.com/articulos/499.php)

## Ejemplos

### Clases y Objetos
    1. [Ejemplo1](ejemplo1)
    2. [Ejecutar](https://repl.it/@gnujavasergio/4clases-objetos)

### Constructor
- Implementar constructores con parametros obligatorios, opcionales y por defecto.
    1. [Ejemplo2](ejemplo2)
    2. [Ejecutar](https://repl.it/@gnujavasergio/5constructor)

### Propiedades y metodos
- Implementar propiedades y metodos en una clase
    1. [Ejemplo3](ejemplo3)
    2. [Ejecutar](https://repl.it/@gnujavasergio/6metodospropiedades)

### Herencia
- La herencia en una especializacion de una clase y tambien es una forma de refactorizar codigo.
- Una clase solo puede heredar de una clase
- Para implementar la herencia en Typescript se utiliza la palabra resevada **extends**.
1. [Ejemplo4](ejemplo4)
2. [Ejecutar](https://repl.it/@gnujavasergio/7herencia)

### Sobreescribir
- La sobreescritura de metodos en una funcionalidad que podemos utilizar cuando realizamos herencia y podemos añadir o remplazar una funcionalidad en la clase hija del metodo de la clase Padre.
- Para llamar a un metodo o atributo de la clase padre podemos utilizar la palabra reservada **super**.
1. [Ejemplo5](ejemplo5)
2. [Ejecutar](https://repl.it/@gnujavasergio/8sobreescritura)

### Modificadores de acceso
- Lo que tambien en la POO lo llamamos como encapsulamiento, con lo cual tenemos el poder de ocultar la implementacion de una clase.
- Nosotros decidimos que atributos o metodos seran visibles para otras clases.
- Las palabra reservadas son **private**, **protected** y **public**.
1. [Ejemplo6](ejemplo6)
2. [Ejecutar](https://repl.it/@gnujavasergio/9encapsulamiento)

### Getters y Seters
- Metodos get para acceder a los atributos privados o protegidos y set para modificar los atributos privados o protegidos.
1. [Ejemplo7](ejemplo7)
2. [Ejecutar](https://repl.it/@gnujavasergio/10geters-seters)

### Metodos y propiedades estaticas
- Con los metodos y atributos estaticos podemos utilizarlos sin instanciar la clase.
- Cuando se declara un atributo estatico se tiene que inicializar la variable con un valor.
- Para diferenciarlo de un atributo siempre escribir con mayuscula y en formato snake(Separar la union de dos palabra con guion bajo '_')
- La palabra reservada es **static**
```
    static STUDENTS_GET: string = "http://syscode.dev/typescript/students";
```
1. [Ejemplo8](ejemplo8)
2. [Ejecutar](https://repl.it/@gnujavasergio/11metodosyatributosestaticos)

### Interface
- La interface es como un esqueleto de lo que podra tener una clase.
- Una clase puede implementar varias interfaces
- El conceptos de interface es algo que esta o se utiliza en los lenguajes que tiene tipado estatico.
- Las palabras reservadas son **interface** para crear la interface y **implements** para implementar la interface.
1. [Ejemplo9](ejemplo9)
2. [Ejecutar](https://repl.it/@gnujavasergio/12interface)

### Clases Abstractas y metodos abstractos
- Las clases abstractas son como esqueletos de codigo pero que se diferencia con las interfaces que a una clase abstracta tambien se le puede añadir codigo lo que no se puede en una interface.
- La palabra reservada para crear clases y metodos abstractos es **abstract**
1. [Ejemplo10](ejemplo10)
2. [Ejecutar](https://repl.it/@gnujavasergio/13clases-abstractas)

### Namespaces
- Sirven para no tener conflictos con clases con el mismo nombre.
- Las palabra reservada **namespace** y **export** son utilizadas en esta
1. [Ejemplo11](ejemplo11)
2. [Ejecutar](https://repl.it/@gnujavasergio/14namespaces)
