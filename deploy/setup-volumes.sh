#!/bin/bash

# Script para configurar permisos de volúmenes para desarrollo bidireccional

set -e

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

CONTAINER_NAME="iris-mcp-server"
PROJECT_DIR="$(cd .. && pwd)"

log_info "Configurando permisos para volúmenes bidireccionales..."

# Crear directorios si no existen
mkdir -p "${PROJECT_DIR}/data/cache"
mkdir -p "${PROJECT_DIR}/logs"

# Obtener UID y GID del usuario actual
USER_UID=$(id -u)
USER_GID=$(id -g)

log_info "Usuario actual: UID=${USER_UID}, GID=${USER_GID}"

# Verificar si el contenedor está ejecutándose
if docker ps --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    log_info "Configurando permisos dentro del contenedor..."
    
    # Ejecutar comandos dentro del contenedor para ajustar permisos
    docker exec "$CONTAINER_NAME" sh -c "
        # Cambiar ownership de los directorios montados
        chown -R ${USER_UID}:${USER_GID} /app/data /app/logs 2>/dev/null || true
        
        # Configurar permisos de lectura/escritura
        chmod -R 755 /app/data /app/logs 2>/dev/null || true
        
        echo 'Permisos configurados dentro del contenedor'
    "
else
    log_warn "El contenedor no está ejecutándose. Configurando permisos locales..."
fi

# Configurar permisos locales
chmod -R 755 "${PROJECT_DIR}/data" "${PROJECT_DIR}/logs" 2>/dev/null || true

log_info "Configuración de permisos completada"

# Mostrar información sobre los volúmenes
log_info "Configuración de volúmenes:"
echo "  Local: ${PROJECT_DIR}/data -> Contenedor: /app/data"
echo "  Local: ${PROJECT_DIR}/logs -> Contenedor: /app/logs"
echo ""
echo "Permisos configurados para lectura/escritura bidireccional"
echo "- Puedes crear/modificar archivos en ${PROJECT_DIR}/data desde tu sistema"
echo "- El contenedor puede crear/modificar archivos en /app/data"
echo "- Los cambios se reflejan inmediatamente en ambos lados"