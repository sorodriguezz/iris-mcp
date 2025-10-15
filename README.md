# IRIS ObjectScript MCP Server

Model Context Protocol (MCP) server para documentación de IRIS ObjectScript. Proporciona acceso a documentación, ejemplos y herramientas de búsqueda para el desarrollo con InterSystems IRIS.

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar con inspector MCP
npm run dev:ins
```

### Deployment con Docker

```bash
# Ir al directorio de deployment
cd deploy/

# Setup completo
./docker-manage.sh build
./docker-manage.sh start
./setup-volumes.sh

# Verificar funcionamiento
./docker-manage.sh status
```

## 📁 Estructura del Proyecto

```
iris-mcp/
├── src/                    # Código fuente TypeScript
│   ├── server.ts          # Servidor MCP principal
│   ├── tools/             # Herramientas MCP
│   ├── search/            # Funciones de búsqueda
│   ├── loaders/           # Cargadores de documentación
│   ├── resources/         # Recursos MCP
│   └── request/           # Manejadores de requests
├── data/                  # Datos y cache
│   └── cache/            # Cache de documentación descargada
├── deploy/               # 🐳 Archivos de Docker y deployment
│   ├── Dockerfile
│   ├── docker-compose.yml
│   ├── docker-manage.sh   # Script de gestión principal
│   ├── setup-volumes.sh   # Configuración de volúmenes
│   ├── iris-mcp-wrapper.sh # Wrapper para mcp.json
│   └── DOCKER.md         # Documentación completa de Docker
├── package.json
├── tsconfig.json
└── README.md            # Este archivo
```

## 🛠️ Herramientas MCP Disponibles

1. **`smart_search`** - Búsqueda inteligente con descarga automática

   - Busca primero en caché local
   - Descarga documentos relevantes si es necesario
   - Mapeo inteligente de términos a KEYs

2. **`search_objectscript`** - Búsqueda rápida solo en caché local

   - Búsqueda instantánea en documentos descargados
   - Resultados con contexto y números de línea

3. **`open_by_key`** - Abrir documentación por KEY oficial

   - Acceso directo a documentación específica
   - Descarga y cachea automáticamente

4. **`open_class`** - Abrir documentación de clase
   - Documatic para clases (ej. %Library.String)
   - Navegación por jerarquía de clases

## 🐳 Docker Deployment

**Para deployment en producción**, usa Docker:

### Scripts de Gestión (en `deploy/`)

- **`docker-manage.sh`** - Script principal de gestión
- **`setup-volumes.sh`** - Configuración de volúmenes bidireccionales
- **`iris-mcp-wrapper.sh`** - Wrapper para usar en `mcp.json`

### Comandos Principales

```bash
cd deploy/

# Construcción y arranque
./docker-manage.sh build    # Construir imagen
./docker-manage.sh start    # Iniciar contenedor
./setup-volumes.sh          # Configurar permisos

# Gestión diaria
./docker-manage.sh status   # Ver estado
./docker-manage.sh logs     # Ver logs
./docker-manage.sh restart  # Reiniciar

# Mantenimiento
./docker-manage.sh cleanup  # Limpiar todo
```

### 📋 Configuración en mcp.json

```json
{
  "mcpServers": {
    "iris-objectscript-docs": {
      "command": "bash",
      "args": ["/ruta/completa/deploy/iris-mcp-wrapper.sh"],
      "env": {
        "NODE_ENV": "production"
      }
    }
  }
}
```

**Ubicación del archivo**:

- macOS: `~/Library/Application Support/Claude/mcp.json`
- Windows: `%APPDATA%\\Claude\\mcp.json`
- Linux: `~/.config/claude/mcp.json`

## 🔧 Desarrollo

### Scripts NPM

```bash
npm run build     # Compilar TypeScript
npm run start     # Ejecutar servidor compilado
npm run dev       # Desarrollo (compilar + ejecutar)
npm run dev:ins   # Con inspector MCP
```

### Estructura de Código

- **`server.ts`** - Punto de entrada del servidor MCP
- **`tools/`** - Definiciones de herramientas MCP
- **`search/`** - Lógica de búsqueda (local y inteligente)
- **`loaders/`** - Descarga y procesamiento de documentación
- **`resources/`** - Recursos y templates MCP

## 📊 Volúmenes y Persistencia

### Configuración Bidireccional

- **`data/`** ↔ Contenedor - Sincronización completa
- **`logs/`** ↔ Contenedor - Logs compartidos

### Casos de Uso

- ✅ Modificas archivos localmente → Se reflejan en el contenedor
- ✅ El MCP descarga docs → Aparecen en tu `data/cache/`
- ✅ Backup/sync de `data/` funciona normalmente

## 🚦 Estados y Flujos

### Primera Instalación

1. `cd deploy/`
2. `./docker-manage.sh build`
3. `./docker-manage.sh start`
4. `./setup-volumes.sh`
5. Configurar `mcp.json`

### Desarrollo Diario

1. `./docker-manage.sh status` (verificar)
2. Trabajar normalmente en el código
3. `./docker-manage.sh restart` (si cambias código)

### Actualización

1. `git pull`
2. `cd deploy/`
3. `./docker-manage.sh stop`
4. `./docker-manage.sh build`
5. `./docker-manage.sh start`

## 🔍 Ejemplo de Uso

```bash
# Buscar información sobre clases
echo '{"jsonrpc": "2.0", "id": 1, "method": "tools/call", "params": {"name": "smart_search", "arguments": {"q": "class methods"}}}' | ./deploy/iris-mcp-wrapper.sh

# Abrir documentación específica
echo '{"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "open_class", "arguments": {"class": "%Library.String"}}}' | ./deploy/iris-mcp-wrapper.sh
```

## 📖 Documentación Adicional

- **[DOCKER.md](deploy/DOCKER.md)** - Documentación completa de Docker, scripts y troubleshooting
- **Logs**: Revisar `logs/` o `./docker-manage.sh logs`
- **Cache**: Explorar `data/cache/` para ver documentos descargados

## 🛡️ Seguridad

- Contenedor ejecuta con usuario no-root
- Sin puertos expuestos (MCP usa stdio)
- Volúmenes con permisos mínimos necesarios
- Imágenes basadas en Alpine Linux

## 🔧 Troubleshooting

```bash
# Ver estado del contenedor
cd deploy/ && ./docker-manage.sh status

# Ver logs detallados
cd deploy/ && ./docker-manage.sh logs

# Reset completo
cd deploy/ && ./docker-manage.sh cleanup
cd deploy/ && ./docker-manage.sh build && ./docker-manage.sh start

# Verificar MCP manualmente
echo '{"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "test", "version": "1.0.0"}}}' | ./deploy/iris-mcp-wrapper.sh
```

---

Para documentación detallada de Docker y deployment, consulta **[deploy/DOCKER.md](deploy/DOCKER.md)**.
