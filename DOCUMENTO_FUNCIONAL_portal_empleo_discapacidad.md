## DOCUMENTO FUNCIONAL:

## REQUERIMIENTOS TÉCNICOS.
 - ### Criterios técnicos del frontend:
	- Definición de módulos y componentes
	- Responsive
	- Alteración del DOM con directivas estructurales/atributo.
	- Testing
	- Implementacion de servicios y entidades.
	- API keys
	- Estructura de la aplicación
 - ### Criterios técnicos del deployment:
	- Node.js
 - ### Criterios técnicos de la conexión de datos/api:
	- Firebase

## SECCIONES DE LA APLICACIÓN.

### Home:
	Header/navbar
	Buscador + filtros  > listado de ofertas
	Sugerencias/Últimas ofertas
	Servicios/Quienes somos
	Eventos/Actualidad
	(Recursos) >> si hay tiempo
	RRSS (modal o FAB)

### Login/Registro:
	#### - Formulario Registro:
	El formulario del login de registro contendrá todos los campos principales para iniciarse en la aplicación, principalmente: correo, nombre de usuario, contraseña, confiramación de la contraseña y rol (Candidato o Empresa).
	#### - Opción candidatos:
	Seleccionando en el formulario de registro la opción 'candidato' y una vez 'logeados' y ya dentro de la plataforma, estando en 'modo candidato', procederemos a pedirle al/a la usuario/a que siga cumplimentando su perfil con el resto de 'campos obligatorios y opcionales' (Entre otros: DNI, nº de teléfono y cargar su CV en PDF o cumplimentar un formulario multipágina, donde se le pedirá que inserte el resto de datos necesarios (Entre otros: Formación que presenta, nivel de experiencia y experiencias laborales y/o si dispone de idiomas o de otras índoles)); A su vez y debido al hecho de que trabajaremos con el colectivo de personas con discapacidad (Reconocida y no Reconocida), se les solicitará que también cargen el certificado de reconocimiento de discapacidad en su versión laboral, la cual está adaptada hacia la integración en un puesto de trabajo y también introduce las adaptaciones que el presente usuario pueda trabajar; en defecto de este, se le solicitará autorización para poder contactar con el/la susodicho/a, de una forma más directa, cercana y brindándole a su vez una atención mucho más personalizada, aportándole pautas, guias y recursos, para que así pueda conseguirlo y/o solicitar en su defecto algún documento acreditativo equivalente o seudo equivalente, con el que podamos valorar de forma objetiva sus capacidades y necesidades funcionales.
	#### - Opción empresas
	Por otro lado y seleccionando en su lugar la opción de 'empresa', al logearnos, se nos pediran datos relevantes diferentes y se nos instará a implementarlos (Entre otros: CIF, Correo, Telefono, Dirección/es Fiscal/es, Sector o sectores de aplicación, número de empleados y estado de la empresa). En este mismo lugar también se dispondra de un formulario secundario para poder publicar ofertas de empleo y de un listado de ofertas publicadas, anexando los usuarios que se hubieran inscrito en cada una de las ofertas, todo ello actuando a modo de parte de su 'dashboard' personalizada.
	#### - Formulario Login
	Como hemos sugerido previamente, el formulario de registro para ambos roles de usuarios/as será justamente el mismo y se procederá, una vez habiendo iniciado sesión, a la solicitud de cumplimentación de los datos necesarios y opcionales restantes. De este modo, lograremos simplificar los procesos de login y registro.
	En este, se mostrarán las pertinentes guías de uso: (tooltips o similar), de modo que podamos orientar a los/las diferentes usuarios/as hacia la correcta utilización y cumplimentación de los citados procedimientos de registro/'login'. Y a su vez y si nos es posible de implementar en el tiempo del que disponemos, también se presentará un enlace para solicitar la recuperación de su contraseña/clave de acceso (PWD recovery).

	*PD:* Ambos formularios (Registro y Login) presentarán también un enlace para poder intercambiar y moverse entre una y otra vía de acceso, ante dicha necesidad.

### Panel usuario/empresa registrado/a:
	Dashboard (ofertas registradas) y herramientas para administrarlas/consultarlas diferenciadas según el rol de usuario que presente cada susodicho que haga uso de nuestra plataforma.

### Buscador :
	Listado de Filtros segun tipo de oferta
	Listas de ofertas
	Listado detalle oferta

### Sugerencias/Últimas ofertas:
	slider o grid de ofertas

### Quienes somos/Que hacemos:
	Institucional
	*Servicios:*
	Para empresas
	Para candidatos
	Formación

### Eventos/Actualidad:
	Miniblog con noticias/eventos

### RRSS (modal o FAB)

## OBJETIVOS DE USO DE LA APP.

La aplicación que vamos a definir es un portal de empleo orientado a personas con distintos tipos de discapacidad e incapacidad reconocidas por algún organismo gubernamental oficial dentro del territorio nacional español.

### - Descripción de los objetivos de la aplicación:

	*- Objetivo principal:*  poder permitir a los usuarios, tanto candidatos como empresas, poder inscribirse en ofertas laborales específicas por un lado y por otro, poder publicar puestos laborales ofertados, respectivamente. Además, poder brindar un registro de usuarios con diferentes privilegios donde puedan tener un dashboard privado en donde poder guardar data seleccionada dentro de la aplicación.
		
	*- Objetivos secundarios:*
		- Candidatos: poder brindar asesoramiento laboral a los usuarios, brindarles información específica sobre discapacidad y recursos de utilidad para su desarrollo, comunicar eventos relacionados con lo laboral; facilitar el intercambio de datos generados en la app entre usuarios mediante plugins de RRSS (share content).
		- 	Empresas: brindar resumen de insights/analíticas sobre comportamiento de los usuarios, incentivos fiscales a la contratación, movimiento y monitorización del mercado laboral según regiones, ofrecer prácticas laborales, gestión de los procesos de selección,  
	*- Objetivos terciarios:*
		-facilitar la sinergia entre candidatos y empresas, vinculando información en tiempo real para acelerar los procesos de selección y contratación.


### - Target o público objetivo:
	- Personas con certificado de discapacidad/incapacidad y personas cercanas.
	- Entidades empresariales con necesidades de selección de personal específico según tipo de trabajador.

### - Limitaciones técnicas de uso:
	- Hincapié en utilización de herramientas de accesibilidad.
	- Navegación online/offline

### - Funcionalidad:
	- MVP >> Minimum viable product 
	- Aplicación web: Angular framework: frontend, Firebase: backend.
	- App IOS/Android: Ionic framework: frontend, Firebase: backend.
