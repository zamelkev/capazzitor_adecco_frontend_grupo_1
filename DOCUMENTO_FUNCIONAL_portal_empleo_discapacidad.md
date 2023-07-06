# DOCUMENTO FUNCIONAL:

# 1. REQUERIMIENTOS TÉCNICOS

## Tecnologías utilizadas

- Angular 16.1

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



2. # SECCIONES DE LA APLICACIÓN.

## Home:
	Header/navbar
	Buscador + filtros  > listado de ofertas
	Sugerencias/Últimas ofertas
	Servicios/Quienes somos
	Eventos/Actualidad
	(Recursos) >> si hay tiempo
	RRSS (modal o FAB)

## Login/Registro:
	Formulario Registro:
	Opción candidatos
	Opción empresas
	Formulario Login
	(Guías de uso: tooltips o similar)
	(PWD recovery)

## Panel usuario/empresa registrado/a:
	Dashboard (ofertas registradas)

## Buscador :
	Listado de Filtros segun tipo de oferta
	Listas de ofertas
	Listado detalle oferta

## Sugerencias/Últimas ofertas:
	slider o grid de ofertas

## Quienes somos/Que hacemos:
	Institucional
	Servicios: 
	Para empresas
	Para candidatos
	Formación

## Eventos/Actualidad:
	Miniblog con noticias/eventos

## RRSS (modal o FAB)


# 3. OBJETIVOS DE USO DE LA APP.

- Descripción de los objetivos de la aplicación:
	- Objetivo principal:
		La aplicación que vamos a definir es un portal de empleo orientado a personas con distintos tipos de discapacidad e incapacidad reconocidas por algún organismo gubernamental oficial dentro del territorio nacional español.

	- Objetivos secundarios:
	- Objetivos terciarios:


- Target o público objetivo:

- Limitaciones técnicas de uso:

- Funcionalidad:
