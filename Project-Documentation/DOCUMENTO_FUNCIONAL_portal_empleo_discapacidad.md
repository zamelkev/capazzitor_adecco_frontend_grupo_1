## DOCUMENTO FUNCIONAL:

## REQUERIMIENTOS TÉCNICOS.
 - ### Criterios técnicos del frontend:
	- **Definición de módulos y componentes**
	- **Responsive**
	- **Alteración del DOM con directivas estructurales/atributo.**
	- **Testing**
	- **Implementacion de servicios y entidades.**
	- **API keys**
	- **Estructura de la aplicación**
 - ### Criterios técnicos del deployment:
	- Node.js
 - ### Criterios técnicos de la conexión de datos/api:
	- **Firebase**

## MAPA DE NAVEGACIÓN:
![Mapa de navegacion:](/Project-Documentation/Project-Sitemap.jpg "Mapa de navegacion: Conexión y enrutamiento entre las diferentes páginas de nuestro sitio web")

## SECCIONES DE LA APLICACIÓN.

- ### Home:
	- **Header/navbar:**
	La barra de navegación contendrá los enlaces a las diferentes vistas de nuestro sitio web, de una forma clara, concisa y evitando resultar ineficaz o redundante. Esta se presentará en dos versiones/formatos: __Mobile__ y __Desktop__. Y con el adecuado diseño y posicionamiento, junto con el anclaje de la barra de navegación en la parte superior de la pantalla, le otorgará a nuestra aplicación web el dinamismo y la facilidad de uso que estamos buscando.
	- **Buscador + filtros  > listado de ofertas**
	Justo debajo de la barra de navegación, se mostrará una barra de búsqueda más simplificada, la cual no contendrá el acceso a los correspondiente filtros de búsqueda, pero por el contrario, sí permitirá al/a la usuarix realizar una búsqueda sencilla de las ofertas disponibles, basada solamente en el fragmento/input' de texto introducido.
	- **Sugerencias/Últimas ofertas**
	Vendrá a ser una previsualización de las ofertas o sectores, en los que publican estas, más relevantes y destacados en base a los datos de uso de nuestra aplicación; brindando al usuario a su vez un enlace rápido con el que poder acceder a la oferta en cuestión. Esta sección irá ubicada en cierto punto, desplazándose sobre el eje vertical, de nuestra página principal, el cual aún está en proceso de decisión. 
	- **Servicios/Quienes somos**
	Esta sección de nuestra web contendrá toda la información necesaria para que, tanto candidatxs como empresas, puedan empezar a conocernos, conocer nuestra labor, objetivos y valores y a su vez, poder mejorar así el nivel de confianza y la implantación consiguiente en el mercado, que todos ellos puedan llegar a otorgarnos y brindarnos.
	- **Eventos/Actualidad**
	En este otro apartado se mostrarán, a modo de blog sencillo, noticias y enlaces a información relevantes para el desempeño de la tarea de búsqueda de empleo y también para nuestro colectivo objetivo (Personas con Discapacidad).
	- **(Recursos) >> si hay tiempo**
	Contendrá herramientas, guías y otra clase de recursos o enlaces a recursos que puedan resultar de utilidad para mejorar la empleabilidad/cultura empresarial, focalizados indistintamente hacia ambos tipos/roles de usuarios de nuestra aplicación.
	- **RRSS (modal o FAB)**
	Se ubicará en uno de los extremos inferiores de la pantalla y contendrá las funcionalidades añadidas necesarias para poder compartir las ofertas que nos puedan resultar interesantes o de utilidad, con conocidxs/amigxs/familiares de lxs usuarixs de nuestra aplicación.
	- **Política de 'Cookies':**
	Se ubicará en uno de los extremos inferiores de la pantalla y contendrá la información necesaria para conocer el uso que haremos de las diferentes 'cookies' propias y de terceros, para la consiguiente optimización de nuestro sitio web y de su usabilidad ofertada hacia lxs usuarios. En esta sección, se solicitará a su vez la correspondiente aceptación de dicha política o se le notificará de que, si sigue usándola, esta se entenderá implícitamente aceptada.

- ### Login/Registro:
	- #### Formulario Registro:
	El formulario del login de registro contendrá todos los campos principales para iniciarse en la aplicación, principalmente: correo, nombre de usuario, contraseña, confiramación de la contraseña y rol (Candidato o Empresa).
	- #### Opción candidatos:
	Seleccionando en el formulario de registro la opción 'candidato' y una vez 'logeados' y ya dentro de la plataforma, estando en 'modo candidato', procederemos a pedirle al/a la usuario/a que siga cumplimentando su perfil con el resto de 'campos obligatorios y opcionales' (Entre otros: DNI, nº de teléfono y cargar su CV en PDF o cumplimentar un formulario multipágina, donde se le pedirá que inserte el resto de datos necesarios (Entre otros: Formación que presenta, nivel de experiencia y experiencias laborales y/o si dispone de idiomas o de otras índoles)); A su vez y debido al hecho de que trabajaremos con el colectivo de personas con discapacidad (Reconocida y no Reconocida), se les solicitará que también cargen el certificado de reconocimiento de discapacidad en su versión laboral, la cual está adaptada hacia la integración en un puesto de trabajo y también introduce las adaptaciones que el presente usuario pueda trabajar; en defecto de este, se le solicitará autorización para poder contactar con el/la susodicho/a, de una forma más directa, cercana y brindándole a su vez una atención mucho más personalizada, aportándole pautas, guias y recursos, para que así pueda conseguirlo y/o solicitar en su defecto algún documento acreditativo equivalente o seudo equivalente, con el que podamos valorar de forma objetiva sus capacidades y necesidades funcionales.
	- #### Opción empresas
	Por otro lado y seleccionando en su lugar la opción de 'empresa', al logearnos, se nos pediran datos relevantes diferentes y se nos instará a implementarlos (Entre otros: CIF, Correo, Telefono, Dirección/es Fiscal/es, Sector o sectores de aplicación, número de empleados y estado de la empresa). En este mismo lugar también se dispondra de un formulario secundario para poder publicar ofertas de empleo y de un listado de ofertas publicadas, anexando los usuarios que se hubieran inscrito en cada una de las ofertas, todo ello actuando a modo de parte de su 'dashboard' personalizada.
	- #### Formulario Login
	Como hemos sugerido previamente, el formulario de registro para ambos roles de usuarios/as será justamente el mismo y se procederá, una vez habiendo iniciado sesión, a la solicitud de cumplimentación de los datos necesarios y opcionales restantes. De este modo, lograremos simplificar los procesos de login y registro.
	En este, se mostrarán las pertinentes guías de uso: (tooltips o similar), de modo que podamos orientar a los/las diferentes usuarios/as hacia la correcta utilización y cumplimentación de los citados procedimientos de registro/'login'. Y a su vez y si nos es posible de implementar en el tiempo del que disponemos, también se presentará un enlace para solicitar la recuperación de su contraseña/clave de acceso (PWD recovery).

	**PD:** Ambos formularios (__Registro y Login__) presentarán también un __enlace para poder intercambiar__ y moverse entre una y otra vía de acceso, ante dicha necesidad.

- ### Panel usuario/empresa registrado/a:
	- **__Dashboard__** (ofertas registradas) y herramientas para administrarlas/consultarlas diferenciadas según el rol de usuario que presente cada susodicho que haga uso de nuestra plataforma.

		- **Dashboard Candidatos:** En este se les mostrará un __formulario multipágina__ con el cual podrán __cumplimentar__ los __datos de su perfil__ y cargar su __CV__ en primera instancia. A su vez, también se les mostrará un listado con las ofertas a las que se hayan inscrito previamente, mostrando cada una de ellas en una __tarjeta desplegable__, dentro de la cual se mostrarán todos los __detalles referentes a cada oferta__.

		- **Dashboard Emplesas:** En este se les mostrará un __formulario multipágina__ con el cual podrán __cumplimentar__ los __datos de su perfil__. También se les presentará otro formulario, el cual les permitirá realizar la publicación de las ofertas de empleo pertinentes. Y para finalizar, también se les mostrará un listado con las ofertas publicadas por ellxs, los detalles de estas y un sublistado con los candidatxs inscritos en cada una de ellas. 

		- **Dashboard Administrador:** Si nos diera tiempo, esta vista contendría las mismas opciones que los dos otros paneles de administración, presentados anteriormente, junto a un listado para administrar correctamente todos los usuarios de nuestro sitio web. Y conteniendo a su vez y de forma primordial un formulario con el que poder proceder a publicar los diferentes 'post'/articulos/entradas, contenidxs y presentados en nuestra sección de 'Actualidad'.

- ### Buscador :
	- **Listado de Filtros** para realizar la busqueda segun diferentes parámetros como PE el tipo de oferta
	- **Listado de 'tarjetas' ofertas:** una tarjeta resumen con los detalles mínimos de la oferta en cuestión.
	- **Listado detalle oferta:** una vista detalle contenedora de toda la información acerca de la oferta en cuestión y mostrándose la presente vista, ubicándola justo al lado de la columna de las 'tarjetas' y mostrándola al hacer clic sobre estas, a modo de una segunda columna.

- ### Sugerencias/Últimas ofertas:
	- slider o grid de ofertas

- ### Quienes somos/Que hacemos:
	- **Institucional**
	- **Servicios:**
		- Para empresas
		- Para candidatos
		- Formación

- ### Eventos/Actualidad:
	- Miniblog con noticias/eventos

- ### RRSS (modal o FAB)

## OBJETIVOS DE USO DE LA APP.

La aplicación que vamos a definir es un portal de empleo orientado a personas con distintos tipos de discapacidad e incapacidad reconocidas por algún organismo gubernamental oficial dentro del territorio nacional español.



- ### Descripción de los objetivos de la aplicación:

	- **Objetivo principal:**  poder __permitir a los usuarios, tanto candidatos como empresas, poder inscribirse en ofertas laborales específicas por un lado y por otro, poder publicar puestos laborales ofertados, respectivamente__. Además, poder brindar un registro de usuarios con diferentes privilegios donde puedan tener un 'dashboard' privado en donde poder guardar data seleccionada dentro de la aplicación.
		
	- **Objetivos secundarios:**
		- **Candidatos:** poder brindar asesoramiento laboral a los usuarios, brindarles información específica sobre discapacidad y recursos de utilidad para su desarrollo, comunicar eventos relacionados con lo laboral; facilitar el intercambio de datos generados en la app entre usuarios mediante plugins de RRSS (share content).
		- **Empresas:** brindar resumen de insights/analíticas sobre comportamiento de los usuarios, incentivos fiscales a la contratación, movimiento y monitorización del mercado laboral según regiones, ofrecer prácticas laborales, gestión de los procesos de selección,  
	- **Objetivos terciarios:**
		- facilitar la __sinergia entre candidatos y empresas__, vinculando información en tiempo real para acelerar los procesos de selección y contratación.


- ### Target o público objetivo:
	- __Personas con certificado de discapacidad/incapacidad o asimiladxs__ y personas cercanas.
	- __Entidades empresariales con necesidades de selección de personal específico__ según tipo de trabajador.

- ### Limitaciones técnicas de uso:
	- Hincapié en utilización de __herramientas de accesibilidad__.
	- __Navegación online/offline__

- ### Funcionalidad:
	- **MVP** >> Minimum viable product 
	- **Aplicación web:** __Angular__ framework: frontend, __Firebase__: backend.
	- **App IOS/Android:** __Ionic__ framework: frontend, __Firebase__: backend.

## Relación entre Tablas de la Base de Datos (DB Tables Relationship):

![Relación entre Tablas (DB):](/Project-Documentation/DB-Tables-Relationship.jpg "Mapa de interconexión entre las tablas de la base de datos de nuestra aplicación")
