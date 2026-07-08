# Proyecto Login - Plataforma Estudiantil

<p align="center">
  <strong>INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO</strong><br>
  <strong>INSTITUTO TECNOLÓGICO DE OAXACA</strong>
</p>

<p align="center">
  <strong>Nombre de la carrera:</strong><br>
  Ingeniería en Sistemas Computacionales
</p>

<p align="center">
  <strong>Nombre de la materia:</strong><br>
  Programación Web
</p>

<p align="center">
  <strong>Unidad:</strong><br>
  Unidad 2
</p>

<p align="center">
  <strong>Título del trabajo:</strong><br>
   Actividad 5. Proyecto de Login e Interfaz Dinámica de Captura
</p>

<p align="center">
  <strong>Alumnos:</strong><br>
  Hernández Pérez Miguel Angel<br>
  Pacheco Aragon Yareli Yazmin
</p>

<p align="center">
  <strong>Docente:</strong><br>
  Adelina Martínez Nieto
</p>

<p align="center">
  <strong>Grupo:</strong><br>
  B
</p>

<p align="center">
  <strong>Fecha de entrega:</strong><br>
  08 de julio del 2026
</p>

##  Descripción del Proyecto
Para esta actividad desarrollamos una aplicación web que simula una plataforma escolar real. El sistema está dividido en dos partes principales: una pantalla de inicio de sesión segura  y un panel de control administrativo  que cuenta con un menú lateral navegable y una sección dedicada al registro de alumnos.




## Estructura de Directorios del Repositorio
Para mantener el proyecto bien ordenado y que cada parte haga su trabajo, organizamos nuestros archivos en las siguientes carpetas:

* **`login.html`**: Es la pantalla de entrada donde el usuario pone sus credenciales para iniciar sesión.
* **`index.html`**: Es la página principal del sistema. Aquí cargamos la pantalla de bienvenida, el menú de navegación y el formulario de captura.
* **`css/`**: Carpeta donde guardamos los estilos de diseño.
  * `login.css`: Estilos exclusivos para la pantalla de login (colores, centrado y bordes redondeados).
  * `index.css`: Estilos para el esqueleto del sistema, los textos rojos de error, la animación del menú y los mensajes flotantes.
* **`img/`**: Carpeta para las imágenes del proyecto.
* **`js/`**: Carpeta con toda la lógica de programación en JavaScript, dividida en 5 archivos para que no se revuelva el código:
  * `utileria.js`: Es nuestra biblioteca general. Aquí guardamos las expresiones regulares y funciones para validar correos, contraseñas, formatear teléfonos y calcular la edad.
  * `login.js`: Controla el botón de acceso de la pantalla de login y guarda los datos en la memoria del navegador.
  * `menu.js`: Se encarga de abrir y cerrar el menú lateral, poner el nombre del usuario en la barra superior, cambiar de pantallas y activar la guía del tour.
  * `captura.js`: Revisa en tiempo real que el formulario de captura no tenga errores y controla los datos que se muestran en el modal de éxito.
  * `guiaExplorador.js`: Contiene las funciones para crear los textos de ayuda flotantes que siguen al mouse y la lógica para resaltar los elementos en el tour escolar.

---

### 4. Funciones creadas en el código JavaScript (`js/`)

#### Funciones dentro de `js/utileria.js`
Es nuestra biblioteca global con funciones que podemos llamar en cualquier parte:
* **`validarCorreo(correo, idError)`**: Revisa mediante una expresión regular que el correo tenga un formato correcto (que lleve arroba, dominio, punto, etc.) y escribe el error abajo si falla.
* **`validarPassword(password, idError)`**: Revisa con un ciclo carácter por carácter que la contraseña cumpla con los requisitos mínimos de seguridad (8 letras, una mayúscula, una minúscula, un número y un símbolo).
* **`soloLetras(texto, idError)`**: Utiliza una expresión regular que solo acepta letras (mayúsculas, minúsculas, acentos y la eñe) para evitar que pongan números en el nombre.
* **`validarLongitud(numero, maxLongitud, idError)`**: Comprueba que un valor tenga puros números enteros y que no se pase del límite máximo de caracteres configurado.
* **`formatearTelefono(telefono)`**: Limpia el texto eliminando espacios o guiones extraños, valida que sean exactamente 10 números y le da un formato visual ordenado: `(951) 123-4567`.
* **`calcularEdad(fechaNacimiento, elError)`**: Resta el año actual con tu año de nacimiento usando objetos `Date()` para saber tu edad exacta en números enteros, y revisa que nadie ponga fechas vacías o del futuro.
* **`validarCURP(curp)`**: Usa una expresión regular estricta para comprobar que la CURP tenga el formato oficial mexicano de 18 caracteres en mayúsculas.

####  Lógica de los demás scripts
* **`js/login.js`**: Captura el clic del botón de entrar, manda a llamar a las validaciones de correo y contraseña pasándole los contenedores de error del HTML y, si pasan a true, guarda la sesión y te redirige al index.
* **`js/menu.js`**: Controla el funcionamiento visual del panel de control. Activa el botón para encoger el menú lateral usando `.classList.toggle('oculto')` y maneja los intercambios de pantalla cambiando el display (`none` / `block`) al dar clic en Inicio o Captura.
* **`js/captura.js`**: Controla el formulario de alumnos. Lee los datos de los inputs, borra errores viejos y va validando campo por campo apoyándose en la utilería. Al final evalúa la edad calculada: si es mayor o igual a 18 escribe "Mayor de edad" , y si es menor escribe "Menor de edad" , rellenando los datos del modal antes de abrirlo.
* **`js/guiaExplorador.js`**: Controla la ayuda interactiva. La función `agregarAyuda` inyecta un letrero flotante al body que sigue dinámicamente al puntero del mouse. La función `crearTour` recorre una lista de pasos y le pone un borde destacado (`.tour-resaltado`) al botón o menú que se está explicando.



##  Proceso de Creación (Paso a Paso)

El desarrollo de nuestro sistema lo fuimos armando de forma ordenada y por etapas de la siguiente manera:

## 🚀 Mi Proceso de Creación (Paso a Paso)

El desarrollo del proyecto lo fuimos armando de forma ordenada y por etapas. En lo personal, me encargué de maquetar la interfaz del panel principal, programar el comportamiento del menú dinámico, asegurar las vistas y estructurar la lógica del modal de éxito junto con las ayudas visuales. Este fue mi proceso paso a paso:

### 🔹 Fase 1: Maquetación y Diseño del Panel Principal (HTML y CSS)
* **Paso 1 (Esqueleto del Sistema) - [Yareli Yazmin]:** Creé la base de nuestro archivo principal `index.html` utilizando etiquetas estructurales fijas de HTML5 (`<header>`, `<aside>` y `<main>`). En esta estructura dejé separados y listos los dos bloques grandes de la zona de trabajo: la tarjeta con el mensaje de bienvenida y la sección oculta del formulario de captura del alumno.
* **Paso 2 (Animaciones y Estilos del Panel) - [Yareli Yazmin]:** Escribí la hoja de estilos `css/index.css`. Aquí configuré el menú lateral izquierdo  y programó la clase `.oculto`.  De esta forma, el menú se desliza suavemente hacia un lado al ocultarse en lugar de desaparecer de golpe.

### 🔹 Fase 2: Lógica de la Plataforma, Seguridad y Vistas (JavaScript)
* **Paso 3 (Desarrollo de la Biblioteca Global) - [Yareli Yazmin / Equipo]:** Con las interfaces listas, trabajamos en conjunto en el archivo `js/utileria.js`. Aquí programamos las funciones lógicas principales, las expresiones regulares y los ciclos para validar los formatos de correo, contraseñas, longitud de caracteres y CURP.


### 🔹 Fase 3: Formulario Inteligente, Modal de Resumen y Tour Asistido
* **Paso 4 (Validaciones sin Alerts) - [Yareli Yazmin / Equipo]:** Desarrollamos el script `js/captura.js` para controlar el formulario de alumnos. Lo configuramos de modo que, al presionar registrar, limpie los errores viejos y revise los campos uno por uno. Si detecta datos vacíos o formatos incorrectos en el teléfono o la CURP, frena todo con un `return` y pinta los textos de advertencia en color rojo directamente abajo de la caja de texto afectada.
* **Paso 5 (Integración e Inyección en el Modal) - [Yareli Yazmin]:** Agregué el componente del modal de Bootstrap (`#modalRegistro`) al fondo de mi `index.html`. Después, en `js/captura.js`, programé la lógica que recibe los años de la función `calcularEdad` y evalúa una condición: si el alumno tiene 18 años o más, escribe "Mayor de edad",  y si es menor, inyecta "Menor de edad" . Al pasar las validaciones, el script inyecta todos los datos en los `<span>` del modal y levanta la ventana flotante de confirmación antes de resetear el formulario.















