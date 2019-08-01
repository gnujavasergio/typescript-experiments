# Introducción

En la comunidad de javascript se han desarrollado un monton de herramientas

- Script de automatización
- Script de pruebas
- Frameworks 
- Librerias
- Lenguajes que se compilan a javascript
    - GWT
    - Typescript

## Javascript
- Javascript a veces puede ser desordenado por las variables dinamicas.
- Javascript actualmente ya es un lenguaje Orientado a Objetos
    - Implementado con sintaxis Sugar(Sencillo)
![Javascript](images/image1.png)

- **Representación de Javascript**
![Javascript](images/image2.png)

## Que es Typescript?
![Typescript](images/image3.png)
- Typescript es un lenguaje Orientado a Objetos pero de verdad y no como javascript porque javascript (Sugar)
- Typescript es un super set de Javascript
    - **Nota** Todo el JS es TS valido

## Caracteristicas    
- Usar Typescript no da la posibilidad de utilizar las nuevas caracteristicas de javascript, que no todo los navegadores lo pueden soportar.
- Algunas de estas caracteristicas son:
    - Decoradores
    - Genericos            
    - Comprobacion de sintaxis en tiempo Real
    - Programación orientada a Objetos
        - Encapsulacion de clases
            - private, public, protected
        - Encapsulacion de modulos        
        - Define interfaces
        - Polimorfismo en constructores y metodos
* Typescript es un lenguaje de tipado estatico miestras que javascript es un lenguaje de tipado dinamico.
* Typescript es un nuevo lenguaje con caracteristicas pensadas para  proyectos grandes y a gran escala.


## Quienes utilizan Typescript
    * Microsoft
    * Google
    * Asana
    * Lyft
    * Palantir
    * y muchas otras mas

## Herramientas
- Hay muchas herramientas que implementan Typescript y que nos agilizan y nos ayudan desarrollar mas rapido
    * Autocompletado
    * Detección de errores
    * Refactoring automatico
- Editores y IDE
    - Visual Studio Code
    - Atom
    - Web Storm 

## Angular
- Porque en Angular se utiliza Typescript
    - [Victor Savking](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8)
    - **Resumen** Su punto principal es porque Typescript es mucho mas explicito con tipado estatico y claro que uno de tipado dinamico.

## Ejemplo
```
// Javascript
JQuery.ajax(url, settings);

// TypeScript
JQuery.ajax(url: string, settings?: JQueryAjaxSettings): JQueryXHR;
```

## Desventajas

* Para proyectos pequeños no es bueno usarlo porque se tardaria configurar o preparar el entorno para desarrollar tu applicacion.
* El que ya no tenga tipado dinamico pierda la flexibilidad que tiene javascript.
* La reutilizacion de variables

## Requisitos

* Saber javascript a un nivel intermedio