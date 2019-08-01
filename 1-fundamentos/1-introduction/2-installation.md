# Typescript

## Preparar entorno de desarollo

- Instalar http-server para tener nuestro servidor
- [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)
```
npm install http-server -g
```

## Instalación
- Instalarmos el CLI de typescript
```
npm install -g typescript
```

- Transpilar
```
tsc archivo.ts
```
- Ejecutar
```
http-server -o ejemplo1
```

- Generar tsconfig.json para transpilar typescript a javascript
```
tsc --init
```

- Compilar todo un proyecto 
```
tsc -w
```
- **Nota:** -w es para poder compilar automaticamente el proyecto cuando ocurre un cambio
### Propiedades del tsconfig.json
"sourceMap": true,  => Para debuguear nuestro codigo javascript pero haciendo seguimineto al codigo de Typescript



