## Ejecutar Servidor local
```
http-server -o ejemplo1
```

## Ejecutar en la consola
```
node dist/index.js
```

## Transpilar TypeScript 
```bash
# -w: estar siempre escuchando
tsc -w

# Utilizarlo de forma completa
tsc --watch

# Transpialar a una carpeta con diferentes opciones
tsc --target ES2015 --outDir dist index.ts
```

