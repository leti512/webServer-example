# Nombre del Proyecto

Web Server - Http/http2 

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)

## Instalación

Sigue estos pasos para instalar las dependencias del proyecto:

1. Clona el repositorio

2. Instala las dependencias:
    ```bash
    npm install
    ```
    
3. Crea la carpeta keys y agrega ahi tu certificado .crt y .key 

4. Clonar el .env.template y crear el .env

5. Ejecutar el comando

   ```bash
    docker compose up -d
    ```

## Uso

Inicia el proyecto con el siguiente comando:

```bash
npm run dev
