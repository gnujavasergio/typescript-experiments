# Introducción

En la comunidad de javascript se han desarrollado un monton de herramientas

* Script de automatización
* Script de pruebas
* Frameworks 
* Librerias
* Lenguajes que se compilan a javascript

# Typescript

* Typescript es un super set de Javascript lo que significa, es un nuevo lenguaje que tiene el poder de ejecutar cualquier programa de javascript o libreria de javascript.
* Typescript parte de la misma sintaxis de javascript.
* Usar Typescript no da la posibilidad de utilizar las nuevas caracteristicas de javascript, que no todo los navegadores la pueden soportar.
Algunas de estas caracteristicas son:
    * Decoradores
    * Importar y Exportar modulos
    * Funciones Asincronas
    * etc.
* Typescript es un lenguaje de tipado estatico miestras que javascript es un lenguaje de tipado dinamico(que se añade el tipo cuando se utilizando)    
* Typescript es un nuevo lenguaje con caracteristicas pensadas para  proyectos grandes y a gran escala.

## Caracteristicas

Quienes utilizan Typescript
* Microsoft
* Google
* Asana
* Lyft
* Palantir
* y muchas otras mas

Hay muchas herramientas que implementan Typescript y que nos agilizan y nos ayudan desarrollar mas rapido
* Autocompletado
* Detección de errores
* Refactoring automatico

Editores
* Atom
* Visual Studio Code

Porque en Angular se utiliza Typescript algo que uno siempre se pudo preguntar.
Victor Savking
https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8

Resumen
Su punto principal es porque Typescript es mucho mas explicito con tipado estattico y claro que uno de tipado dinamico.

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