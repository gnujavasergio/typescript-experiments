# Typescript
## Instalar node

## Preparar entorno de desarollo

### Instalar nodejs
- [https://nodejs.org/es/](https://nodejs.org/es/)

### Instalar Node Version Manager
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

### Interactivel manage your node.js Versions
-[https://www.npmjs.com/package/n](https://www.npmjs.com/package/n)

### Instalar http-server

- Instalar http-server para tener nuestro servidor
- [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)
```
npm install http-server -g
```

## Instalación
- Instalarmos el CLI de typescript
```
npm install -g typescript
tsc --version
tsc -v
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
tsc --watch
```
- **Nota:** -w es para poder compilar automaticamente el proyecto cuando ocurre un cambio
### Propiedades del tsconfig.json
"sourceMap": true,  => Para debuguear nuestro codigo javascript pero haciendo seguimineto al codigo de Typescript



