


function validarCorreo(correo, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = ""; // Limpia el error anterior

    let expresion = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;

    if (correo === "") {
        if (elError) elError.innerText = "Ingrese el correo electronico";
        else alert("Ingrese el correo electronico");
        return false;
    }


    if (!expresion.test(correo)) {
        //  Se usa para saber si el correo NO cumple con la expresión regular
        //  test() es un método de las expresiones regulares. Sirve para probar si un texto cumple con el patrON
        //  o sea si lo que escribirmos en cuando se pidioo el correo cumple con la expresion regular q definimos salta la alerta
        if (elError) elError.innerText = "El correo electronico no es valido. Ejemplo correcto: usuario@dominio.com";
        else alert("El correo electronico no es valido. Ejemplo correcto: usuario@dominio.com");
        return false;
    }
    // Si si cumple pasa a true
    return true;
}


function soloLetras(texto, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = "";

    let expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

    if (texto === "") {
        if (elError) elError.innerText = "Por favor ingrese un valor, el campo no puede estar vacío";
        return false;
    }

    if (!expresion.test(texto)) {
        if (elError) elError.innerText = "El campo solo debe contener letras y espacios";
        return false;
    }

    return true;
}


function validarLongitud(numero, maxLongitud, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = "";

    let valorATexto = String(numero).trim();

    if (valorATexto === "") {
        if (elError) elError.innerText = "Por favor ingrese un valor numérico";
        return false;
    }

    for (let i = 0; i < valorATexto.length; i++) {
        let caracter = valorATexto[i];
        if (caracter < "0" || caracter > "9") {
            if (elError) elError.innerText = "Este campo solo debe contener números";
            return false;
        }
    }

    if (valorATexto.length > maxLongitud) {
        if (elError) elError.innerText = "El valor numérico no debe tener mas de " + maxLongitud + " digitos";
        return false;
    }

    return true;
}


function esMayorDeEdad(fechaNacimiento, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = "";

    if (fechaNacimiento === "") {
        if (elError) elError.innerText = "Ingrese la fecha de nacimiento";
        return false;
    }

    let edad = calcularEdad(fechaNacimiento);

    if (edad === false) {
        return false;
    }

    if (edad >= 18) {
        return true;
    } else {
        if (elError) elError.innerText = "La persona debe ser mayor de edad para registrarse";
        return false;
    }
}


function calcularEdad(fechaNacimiento, elError = null) {
    if (fechaNacimiento === "") {
        if (elError) elError.innerText = "Ingrese la fecha de nacimiento";
        return false;
    }

    let nacimiento = new Date(fechaNacimiento);
    let fechaActual = new Date();

    if (nacimiento > fechaActual) {
        if (elError) elError.innerText = "La fecha de nacimiento no puede ser mayor a la fecha actual";
        return false;
    }

    let añoNacimiento = nacimiento.getFullYear();
    let mesNacimiento = nacimiento.getMonth();
    let diaNacimiento = nacimiento.getDate();
    let añoActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();

    let edad = añoActual - añoNacimiento;
    if (mesActual < mesNacimiento) {
        edad = edad - 1;
    } else if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
        edad = edad - 1;
    }

    return edad;
}

/*
-- Funcion: Validar si una persona es mayor de edad (CORREGIDA SIN ALERT)
*/
function esMayorDeEdad(fechaNacimiento, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = "";

    // Le pasamos el contenedor de error también a la función de calcularEdad
    let edad = calcularEdad(fechaNacimiento, elError);

    if (edad === false) {
        return false;
    }

    if (edad >= 18) {
        return true;
    } else {
        if (elError) elError.innerText = "La persona debe ser mayor de edad para registrarse";
        return false;
    }
}


/*
-- Funcion: Validar contraseña segura
-- ¿Que hace? Verifica que la contraseña cumpla con varias condiciones de seguridad
-- Parametros: Recibe la contraseña ingresada por el usuario
-- Retorno: true si la contraseña es valida, false si no cumple con alguna condicion
*/
function validarPassword(password, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = ""; // Limpia el error anterior

    /*
    Estas variables sirven para saber si la contraseña cumple con cada requisito
    al inicio todas estan en false porque todavia no se ha revisado la contraseña
    */
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;
    /*
    Validacion 1: Campo vacio
        Si el campo de la contraseña esta vacio, se muestra una alerta
        indicando que debe ingresar la contraseña
        Despues se retorna false para detener la validacion
    */
    if (password === "") {
        if (elError) elError.innerText = "Ingrese la contraseña";
        else alert("Ingrese la contraseña");
        return false;
    }

    /*
    validacion 2: longitud minima
        si la contraseña tiene menos de 8 caracteres entonces no es valida
        de ahi se muestra una alerta y retorna false
    */
    if (password.length < 8) {
        if (elError) elError.innerText = "La contraseña debe tener minimo 8 caracteres";
        else alert("La contraseña debe tener minimo 8 caracteres");
        return false;
    }
    /*
    aqui se recorre la contraseña caracter por caracter
    esto sirve para revisar si tiene mayusculas, minusculas, numeros
    o algun caracter especial
    */
    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];
        /*
        si el caracter esta entre A y Z significa que es una mayuscula
        entonces la variable tieneMayuscula cambia a true
        */
        if (caracter >= "A" && caracter <= "Z") {
            tieneMayuscula = true;
            /*
            si el caracter esta entre a y z significa que es una minuscula
            entonces la variable tieneMinuscula cambia a true
            */
        } else if (caracter >= "a" && caracter <= "z") {
            tieneMinuscula = true;
            /*
             si el caracter esta entre 0 y 9 significa que es un numero
             entonces la variable tieneNumero cambia a true
             */
        } else if (caracter >= "0" && caracter <= "9") {
            tieneNumero = true;
            /*
            si no es letra ni numero entonces se toma como caracter especial
            entonces la variable tieneEspecial cambia a true
            */
        } else {
            tieneEspecial = true;
        }
    }
    /*
    validacion 3: mayuscula
        si no se encontro una mayuscula entonces se muestra una alerta
        y retorna false
    */
    if (!tieneMayuscula) {
        if (elError) elError.innerText = "La contraseña debe tener al menos una letra mayuscula";
        else alert("La contraseña debe tener al menos una letra mayuscula");
        return false;
    }
    /*
    validacion 4: minuscula
        si no se encontro una minuscula entonces se muestra una alerta
        y retorna false
    */
    if (!tieneMinuscula) {
        if (elError) elError.innerText = "La contraseña debe tener al menos una letra minuscula";
        else alert("La contraseña debe tener al menos una letra minuscula");
        return false;
    }
    /*
    validacion 5: numero
        si no se encontro un numero entonces se muestra una alerta
        y retorna false
    */
    if (!tieneNumero) {
        if (elError) elError.innerText = "La contraseña debe tener al menos un numero";
        else alert("La contraseña debe tener al menos un numero");
        return false;
    }
    /*
    validacion 6: caracter especial
        si no se encontro un caracter especial entonces se muestra una alerta
        y retorna false
    */
    if (!tieneEspecial) {
        if (elError) elError.innerText = "La contraseña debe tener al menos un caracter especial";
        else alert("La contraseña debe tener al menos un caracter especial");
        return false;
    }
    return true;
}

//--------------------------------------------------------------
// Funciones propias (exactamente 2)

/*
-- Funcion: Solo Numeros (Funcion Auxiliar)
-- Que hace? Valida que una cadena de texto contenga unicamente numeros del 0 al 9
-- Parametros: Recibe el texto o numero a validar
-- Retorno: true si solo contiene numeros, false si esta vacio o tiene letras/simbolos
*/
function soloNumeros(texto) {
    //pues primero agregamos una funcion regular para que pues acepte solo numeros
    // sabemos que comienza con barras invertidas dentro de los corchetes estan los numeros a aceptar del 0 al 9
    // nos dice que debe tener 1 o mas caracteres
    let expresion = /^[0-9]+$/;
    //ahora revisamos si el texto esta vacio
    if (texto === "") {
        return false;
    }
    // y al final retornamos la funcion test que nos dice si el texto es valido
    return expresion.test(texto);
}

/*
-- Funcion: Formatear Numero de Telefono
-- Que hace? Toma un numero de telefono escrito de corrido y le da un formato visual 
--            mas estetico (ej (951) 123-4567) Asi ayuda a una mejor integracion de loos datos
-- Parametros: Recibe un numero o texto (ej "9511234567")
-- Retorno: El numero formateado en texto, o un mensaje de error si no tiene 10 digitos
*/
function formatearTelefono(telefono) {
    // Convertir a texto y quitarle espacios, guiones y parentesis
    let telLimpio = String(telefono).replace(/[\s\-\(\)]/g, '');

    // Reutilizar la funcion soloNumeros para validar que no haya letras
    if (!soloNumeros(telLimpio)) {
        return "Error: El teléfono contiene letras o caracteres inválidos.";
    }

    // Un telefono estandar en Mexico tiene 10 digitos
    if (telLimpio.length !== 10) {
        return "Error: El teléfono debe tener exactamente 10 dígitos.";
    }

    // Extraer las partes usando substring
    let lada = telLimpio.substring(0, 3);
    let primeraParte = telLimpio.substring(3, 6);
    let segundaParte = telLimpio.substring(6, 10);

    // Retornar con el formato (XXX) XXX-XXXX
    return "(" + lada + ") " + primeraParte + "-" + segundaParte;
}

/*
-- funcion: generar RFC basico
-- que hace? genera un RFC usando el nombre, apellidos y fecha de nacimiento
-- parametros: recibe nombre, apellido paterno, apellido materno y fecha de nacimiento
-- retorno: retorna el RFC basico generado o false si algun dato no es valido
*/
function generarRFCBasico(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {


    /*
    validacion 1: validar nombre y apellidos
        aqui se usa la funcion soloLetras para revisar que el nombre
        y los apellidos solo tengan letras
        si alguno no es valido entonces retorna false
    */

    if (!soloLetras(nombre)) return false;
    if (!soloLetras(apellidoPaterno)) return false;
    if (!soloLetras(apellidoMaterno)) return false;
    /*
    validacion 2: fecha vacia
        si no se ingreso la fecha de nacimiento entonces se muestra una alerta
        y retorna false para que no continue el proceso
    */
    if (fechaNacimiento === "") {
        alert("Ingrese la fecha de nacimiento");
        return false;
    }

    /*
    validacion 3: validar si es mayor de edad
        aqui usamos la funcion esMayorDeEdad que ya creamos antes
        para evitar generar el RFC a menores de edad.
    */
    if (!esMayorDeEdad(fechaNacimiento)) {
        return false;
    }
    /*
    aqui convertimos el nombre y los apellidos a mayusculas
    esto se hace porque el RFC normalmente se escribe en mayusculas
    */
    nombre = nombre.toUpperCase();
    apellidoPaterno = apellidoPaterno.toUpperCase();
    apellidoMaterno = apellidoMaterno.toUpperCase();
    /*
    aqui se reemplazan las vocales con acento por vocales normales
    esto sirve para que el RFC no tenga caracteres especiales
    */
    nombre = nombre.replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U");
    apellidoPaterno = apellidoPaterno.replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U");
    apellidoMaterno = apellidoMaterno.replace("Á", "A").replace("É", "E").replace("Í", "I").replace("Ó", "O").replace("Ú", "U");

    /*
    aqui se obtienen las partes de la fecha de nacimiento
    del año solo se toman los ultimos dos digitos
    despues se toma el mes y el dia
    */
    let año = fechaNacimiento.substring(2, 4);
    let mes = fechaNacimiento.substring(5, 7);
    let dia = fechaNacimiento.substring(8, 10);

    let primerasLetrasPaterno = apellidoPaterno.substring(0, 2);
    // ahora se toman las letras del apellido paterno desde la posicion 0 hast ante4s de la 2
    let primeraLetraMaterno;
    // ahora vamos a tomar la primera letra del apellido amterno
    // primero verificamos que si no hay anda entonces va una X, pero si no estuviera vacio pues toma la letra

    if (apellidoMaterno === "") {
        primeraLetraMaterno = "X";
    } else {
        primeraLetraMaterno = apellidoMaterno[0];
    }

    let primeraLetraNombre;
    // esto mismo que hice para el materno ahora lo hacemos para el nombre
    if (nombre === "") {
        primeraLetraNombre = "X";
    } else {
        primeraLetraNombre = nombre[0];
    }
    // y aqui ya se van construyendo el rfc con las partes que ya tenemos
    let rfcBasico = primerasLetrasPaterno + primeraLetraMaterno + primeraLetraNombre + año + mes + dia;

    return rfcBasico;
}

function validarCURP(curp) {
    var expresion = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
    return expresion.test(curp.toUpperCase());
}