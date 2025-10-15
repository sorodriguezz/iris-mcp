# Configuración de Docker para el Servidor IRIS MCP

## Resumen

Este directorio contiene scripts y archivos de configuración para desplegar el servidor IRIS MCP usando Docker.

## Preparación

Antes de ejecutar los scripts, asegúrate de dar permisos de ejecución a los archivos `.sh`:

```bash
chmod +x *.sh
```

O individualmente:

```bash
chmod +x setup-volumes.sh docker-manage.sh iris-mcp-wrapper.sh
```

## Descripción de Archivos

### Scripts (.sh)

1. **setup-volumes.sh**

   - Propósito: Configura permisos para montajes de volúmenes bidireccionales.
   - Qué hace: Crea los directorios necesarios (data, logs), ajusta la propiedad y permisos para que tanto el usuario del host como el contenedor puedan leer/escribir en los volúmenes montados.
   - Cuándo ejecutar: Después de iniciar el contenedor, o antes si es necesario.

2. **docker-manage.sh**

   - Propósito: Gestiona el ciclo de vida del contenedor Docker.
   - Comandos:
     - build: Construir la imagen Docker
     - start: Iniciar el contenedor
     - stop: Detener el contenedor
     - restart: Reiniciar el contenedor
     - logs: Mostrar logs del contenedor
     - exec: Acceder al shell del contenedor
     - status: Mostrar estado del contenedor
     - cleanup: Limpiar contenedor e imagen
     - setup-volumes: Ejecutar setup-volumes.sh
     - compose-up: Iniciar con docker-compose
     - compose-down: Detener servicios docker-compose

3. **iris-mcp-wrapper.sh**
   - Propósito: Script wrapper para ejecutar el servidor MCP desde Docker.
   - Qué hace: Verifica si Docker está ejecutándose, asegura que el contenedor existe y está iniciado, luego ejecuta el servidor MCP dentro del contenedor.

### Archivos de Configuración

4. **docker-compose.yml**

   - Define el servicio iris-mcp, contexto de construcción, volúmenes, redes, healthcheck.

5. **Dockerfile**
   - Construye la imagen Docker: Base Node.js, instala dependencias, compila TypeScript, configura usuario no-root.

## Orden de Ejecución para Iniciar Docker con el Servidor MCP

### Usando docker-manage.sh (recomendado para desarrollo)

1. `./docker-manage.sh build` - Construir la imagen Docker
2. `./docker-manage.sh start` - Iniciar el contenedor
3. `./setup-volumes.sh` - Configurar permisos de volúmenes (opcional, se puede ejecutar después de start)
4. `./iris-mcp-wrapper.sh` - Ejecutar el servidor MCP

### Usando docker-compose

1. `./docker-manage.sh compose-up` - Iniciar servicios con docker-compose

### Comandos directos alternativos

- `docker build -t iris-mcp -f Dockerfile ..`
- `docker run -d --name iris-mcp-server -v ../data:/app/data:rw -v ../logs:/app/logs:rw iris-mcp`
- `./setup-volumes.sh`
- `./iris-mcp-wrapper.sh`

## Notas

- El contenedor se ejecuta con `tail -f /dev/null` para mantenerlo vivo.
- MCP se comunica vía stdio, no se necesitan puertos.
- Los volúmenes están montados para persistencia de datos.
