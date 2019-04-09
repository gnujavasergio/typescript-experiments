# POO en Typescript

## Que es la programación Orientada a Objetos(POO)

La POO es un paradigma, que es mas cercana a la vida real por dos conceptos clases y objetos los cuales nos ayudan a abstraer las cosas y llevarlas a la programación.

## Clases
* Las clases son la abstracion de objetos
* La clase es algo mas generico

Por Ejemplo
Portatil puede haber varias portatiles con diferentes caracteristicas, funcionalidades podemos comparar una portatil HP con una Lenovo, o comparar una portatil para gamers o para oficina. Cada una de esas portatiles tienen una funcionalidad diferente, colores, modelos y cualidades que hacen que sea para algo especifico pero nosotros podemos abstraer todo eso en una clase por ejemplo.

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

Objeto es algo unico que se puede obtener o crear de una clase o como en otros lo dicen realizar una instancia de una clase.
En el ejemplo anterior de la clase portatil podemos crear un objeto unico.

```
let hpPortatil: Portatil = new Portatil();
let lenovoPortatil: Portatil = new Portatil();

```

[POO](https://desarrolloweb.com/articulos/499.php)


## Ejemplos

* Clases y Objetos
1. [Ejemplo1](ejemplo1)
2. [Ejecutar](https://repl.it/@gnujavasergio/4clases-objetos)

* Constructor
Implementar constructores con parametros obligatorios, opcionales y por defecto.
1. [Ejemplo2](ejemplo2)
2. [Ejecutar](https://repl.it/@gnujavasergio/5constructor)