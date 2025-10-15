#!/bin/bash

# Script wrapper para ejecutar IRIS MCP desde Docker
# Este script asegura que el contenedor esté ejecutándose antes de llamar al MCP

CONTAINER_NAME="iris-mcp-server"

# Verificar si Docker está ejecutándose
if ! docker info >/dev/null 2>&1; then
    echo "Error: Docker no está ejecutándose" >&2
    exit 1
fi

# Verificar si el contenedor existe
if ! docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "Error: El contenedor ${CONTAINER_NAME} no existe." >&2
    echo "Desde el directorio 'deploy', ejecuta: ./docker-manage.sh build && ./docker-manage.sh start" >&2
    exit 1
fi

# Asegurar que el contenedor está ejecutándose
if ! docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    echo "Iniciando contenedor ${CONTAINER_NAME}..." >&2
    docker start "${CONTAINER_NAME}" >/dev/null 2>&1
    
    # Esperar un poco para que el contenedor esté listo
    sleep 2
fi

# Ejecutar el MCP en el contenedor
exec docker exec -i "${CONTAINER_NAME}" node /app/dist/server.js