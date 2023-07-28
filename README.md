# Capazzitor - angular_grupo_1
Proyecto Trasversal - Grupo 1 - Curso Frontend Angular (Adecco 23)
[Información del curso](https://fundacionadecco.org/cursos/desarrollo-web-frontend/)

## Tipo de proyecto:
Portal web de búsqueda de empleo para personas con discapacidad

## Integrantes del grupo:
- Ariel Gonzalez
- Eneko Galván
- Kevin Zamora

## Primeros pasos:

- **Análisis de los sitios web de la competencia:** Por Talento / Disjob / Indeed & Universia
    - [Planificación inicial con **Trello**](https://trello.com/b/MzW5G4mb/proyectotransversalkevinjavierignacioarieleneko)
    - [Planificación con **Trello**](https://trello.com/b/QbZhWLWv/proyecto-portal-laboral-discapacidad)
    - [Análisis de la competencia (en figma)](https://www.figma.com/file/7yUNZ6wXs1o2xraJYrfPLi/Curso-Angular-Grupo-1)

- [**Prototipado de la interfaz con Figma:**](https://www.figma.com/file/O3N7YgQiMZY5iRcFDXIZOR/home-Portal)

- [**Elaboración del documento funcional**]([Desarrollo del **Documento Funcional**](https://github.com/zamelkev/angular_grupo_1/blob/main/Project-Documentation/DOCUMENTO_FUNCIONAL_portal_empleo_discapacidad.md))
    - [**Sitemap:**](https://github.com/zamelkev/angular_grupo_1/blob/main/Project-Documentation/Project-Sitemap.jpg)
    - [**Mapa relacional de entidades/DDBB**](https://github.com/zamelkev/angular_grupo_1/blob/main/Project-Documentation/DB-Tables-Relationship.jpg)

- [**Presentación de Final de Curso (con Google Slides)**](https://docs.google.com/presentation/d/1ibKmxMS0sOdhrblvsIfkups-fLdlx51scMS92-nUxsE/)

# REQUERIMIENTOS TÉCNICOS.

## Tecnologías utilizadas

- Angular 13

- Node 16.18

- npm

- HTML and CSS

- JavaScript

- TypeScript

## IDE utilizado
Visual Studio Code
  
## Para instalar NVM y Node

- **Node Version Management**: herramienta de consola que permite instalar y utilizar diferentes versiones de nodejs.

- **Nodejs** es un engine javascript que permite la ejecución de frameworks frontend por ejemplo angular en el lado servidor.

1. Descargar de https://github.com/coreybutler/nvm-windows/releases el archivo **nvm-setup.zip**
3. Descomprimir el zip
4. Ejecutar el archivo **nvm-setup.exe**
5. Abrir una **CMD con permisos de administrador** y comprobar que se ha instalado

```bash

nvm version

nvm list

# Importante, angular soporta hasta la versión 16
nvm install 16.18.1

# Necesaria CMD con permisos de administrador:
nvm use 16.18.1

node -v
```

## Para instalar Angular en tu sistema
Paso 1: Necesitas que "Node.js" (versión 16) y "npm package manager" estén instalados.

Paso 2: Instalar Angular CLI (versión 16)

Run `npm install -g @angular/cli` en tu terminal.  
  
## Instrucciones de aplicación  
  
1. Abrir una consola en el proyecto abierto de Visual Studio o en el terminal del sistema
```
cd frontend
ng serve
```
2. En el navegador, ir a la url: `http://localhost:4200`
