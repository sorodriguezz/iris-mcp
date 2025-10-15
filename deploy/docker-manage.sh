#!/bin/bash

# Script para gestionar el contenedor IRIS MCP

set -e

CONTAINER_NAME="iris-mcp-server"
IMAGE_NAME="iris-mcp"

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funciones auxiliares
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Función para construir la imagen
build_image() {
    log_info "Construyendo imagen Docker..."
    docker build -t $IMAGE_NAME -f Dockerfile ..
    log_info "Imagen construida exitosamente"
}

# Función para iniciar el contenedor
start_container() {
    log_info "Iniciando contenedor..."
    
    # Verificar si el contenedor ya existe
    if docker ps -a --format 'table {{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
        log_warn "El contenedor ya existe. Iniciándolo..."
        docker start $CONTAINER_NAME
    else
        log_info "Creando nuevo contenedor..."
        
        # Crear directorios si no existen
        mkdir -p "$(pwd)/../data" "$(pwd)/../logs"
        
        docker run -d \
            --name $CONTAINER_NAME \
            --restart unless-stopped \
            -v "$(pwd)/../data:/app/data:rw" \
            -v "$(pwd)/../logs:/app/logs:rw" \
            $IMAGE_NAME
    fi
    
    log_info "Contenedor iniciado exitosamente"
}

# Función para parar el contenedor
stop_container() {
    log_info "Deteniendo contenedor..."
    docker stop $CONTAINER_NAME 2>/dev/null || log_warn "El contenedor no estaba ejecutándose"
    log_info "Contenedor detenido"
}

# Función para reiniciar el contenedor
restart_container() {
    stop_container
    start_container
}

# Función para ver logs
show_logs() {
    log_info "Mostrando logs del contenedor..."
    docker logs -f $CONTAINER_NAME
}

# Función para acceder al contenedor
exec_container() {
    log_info "Accediendo al contenedor..."
    docker exec -it $CONTAINER_NAME /bin/sh
}

# Función para limpiar
cleanup() {
    log_info "Limpiando contenedor e imagen..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
    docker rmi $IMAGE_NAME 2>/dev/null || true
    log_info "Limpieza completada"
}

# Función para mostrar estado
status() {
    log_info "Estado del contenedor:"
    docker ps -a --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
}

# Función para configurar volúmenes
setup_volumes() {
    log_info "Ejecutando configuración de volúmenes..."
    ./setup-volumes.sh
}

# Función para usar docker-compose
compose_up() {
    log_info "Iniciando con docker-compose..."
    docker-compose up -d
    log_info "Servicios iniciados con docker-compose"
}

compose_down() {
    log_info "Deteniendo servicios docker-compose..."
    docker-compose down
    log_info "Servicios detenidos"
}

# Función para configurar volúmenes
setup_volumes() {
    log_info "Configurando volúmenes bidireccionales..."
    ./setup-volumes.sh
}

# Función para mostrar ayuda
show_help() {
    echo "Uso: $0 {build|start|stop|restart|logs|exec|status|cleanup|setup-volumes|compose-up|compose-down|help}"
    echo ""
    echo "Comandos:"
    echo "  build          Construir la imagen Docker"
    echo "  start          Iniciar el contenedor"
    echo "  stop           Detener el contenedor"
    echo "  restart        Reiniciar el contenedor"
    echo "  logs           Mostrar logs del contenedor"
    echo "  exec           Acceder al shell del contenedor"
    echo "  status         Mostrar estado del contenedor"
    echo "  setup-volumes  Configurar permisos de volúmenes bidireccionales"
    echo "  cleanup        Limpiar contenedor e imagen"
    echo "  compose-up     Iniciar con docker-compose"
    echo "  compose-down   Detener servicios docker-compose"
    echo "  help           Mostrar esta ayuda"
}

# Main
case "${1:-help}" in
    build)
        build_image
        ;;
    start)
        start_container
        ;;
    stop)
        stop_container
        ;;
    restart)
        restart_container
        ;;
    logs)
        show_logs
        ;;
    exec)
        exec_container
        ;;
    status)
        status
        ;;
    cleanup)
        cleanup
        ;;
    setup-volumes)
        setup_volumes
        ;;
    compose-up)
        compose_up
        ;;
    compose-down)
        compose_down
        ;;
    help|*)
        show_help
        ;;
esac