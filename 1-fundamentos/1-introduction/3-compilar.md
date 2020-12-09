## Instalación
- Instalar el CLI de typescript
```bash
npm install -g typescript
tsc --version
tsc -v

# Lista una ayuda de los comandos de TypeScript
tsc -h
```

## Compilar
```
# Busca la configuración
tsc 

# Especifica un directorio que contiene la configuración
tsc --project porfolio

# Que omite la configuracion y compila lo que tu digas
tsc archivo.ts

# Siempre esta estuchando los cambios que se realizen al codigo
tsc -w
# o
tsc --watch
```

## Ejecutar en un servidor
```
http-server -o ejemplo1
```

## Generar proyecto
- Generar tsconfig.json para transpilar typescript a javascript
```
tsc --init
```

- **Nota:** -w es para poder compilar automaticamente el proyecto cuando ocurre un cambio
### Propiedades del tsconfig.json
"sourceMap": true,  => Para debuguear nuestro codigo javascript pero haciendo seguimineto al codigo de Typescript
