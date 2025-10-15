# Usar Node.js LTS como base
FROM node:20-alpine

# Instalar dependencias del sistema si son necesarias
RUN apk add --no-cache \
    tini \
    && npm install -g npm@latest

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias (incluyendo devDependencies para compilar TypeScript)
RUN npm install && npm cache clean --force

# Copiar código fuente
COPY src/ ./src/

# Compilar TypeScript
RUN npm run build

# Crear directorio data si no existe (será montado como volumen)
RUN mkdir -p /app/data /app/logs

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S mcp -u 1001 -G nodejs

# Cambiar ownership de los archivos
RUN chown -R mcp:nodejs /app

# Cambiar a usuario no-root
USER mcp

# Exponer puerto (aunque MCP usa stdio, útil para debugging)
EXPOSE 3000

# Usar tini como init para manejo correcto de señales
ENTRYPOINT ["/sbin/tini", "--"]

# Para MCP, necesitamos mantener el contenedor corriendo pero listo para stdin
CMD ["tail", "-f", "/dev/null"]