# Tipos avanzados en TypeScript

## Union Types
- Los tipos union pueden ser utilizados si es que queremos que en una función se pueda mandar parametros tipos de datos diferentes.
- Utilizar los union types hacen que nuestras variables sean flexibles pero tambien las hacen inciertas no sabemos realmente lo que se manda. (Esto se solucionara con los Type Guards en el siguiente capitulo)
1. [Ejemplo1](../examples/4-types-advanced/ejemplo1/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/15union-types)

## Types Guards (Guardianes de Tipo)
- Utilizar los union types hacen que nuestras variables sean flexibles pero tambien las hacen inciertas no sabemos realmente lo que se manda pero con los types guards esto se solucionara.
- Los union types se pueden solucionar de dos formas con funciones especiales o con typeof
1. [Ejemplo2](../examples/4-types-advanced/ejemplo2/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/16type-guards)    

## Intersection Types (Tipos de interseccion) y Type Assertions
- Con **Intersection Types** podemos combinar dos diferentes tipos en una sola variable
- Con los **Type Assertions** podemos hacer que cambie el tipo de dato de una variable.
- Los **Type Assertions** pueden ser confundidos con los casting que existen en java pero no es el mismo concepto con el casting cambias el objeto y tipo con los Types Assertions cambias solo el tipo.
- Resumiendo con los Type Assertions tenemos el poder de decidir el tipo de dato que tendra una variable aunque el compilador lo haya detectado de otra forma.
1. [Ejemplo3](../examples/4-types-advanced/ejemplo3/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/17intersection-types)    

## Types Aliases
- con **Types Aliases** podemos crear nuestros propios tipos
- Se utiliza la palabra reservada **type**
1. [Ejemplo4](../examples/4-types-advanced/ejemplo4/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/18type-aliases)        

## Tuplas
- Las Tuplas en TypeScript son un tipo de arreglo en particular que en las primeras posiciones se define el tipo de dato que se podra añadir al arreglo.
1. [Ejemplo5](../examples/4-types-advanced/ejemplo5/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/19tuplas)      

## Enums
- Son un tipo de datos que existen en C# y java que nos puede servir para definir numeros con un nombre significativo.
- El utilizar los enums es una conveniencia que le da mas claridad a nuestro codigo.
- Utilizamos la palabra reservada **enum**
1. [Ejemplo6](../examples/4-types-advanced/ejemplo6/README.md)
2. [Ejecutar](https://repl.it/@gnujavasergio/20enums)  