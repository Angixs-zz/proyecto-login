

/*
-- Funcion: Validar correo 
-- ¿Que hace? Valida que el correo electronico siga y tenga un formtato validoo
-- Parametros: ocupa el correo, que es una cadena de texto que se ingresa
-- Retorno: true si el correo es valido, false si no lo es
*/
function validarCorreo(correo, idError = null) {
    let elError = idError ? document.getElementById(idError) : null;
    if (elError) elError.innerText = ""; // Limpia el error anterior

    let expresion = /^[^\s@]+@[^\s@.]+\.[^\s@]+$/;
    //Ocupa una expresioon regular y se desglosa asi
    // La barra diagonal / nos dice que inicia la expresion
    // ^ Aqui nos dice que va a inciar el texto y luego ya vienen los grupoos a validar
    // [^\s@]+ 
    // [] Nos dicen que es un grupo de caracteres que van a ser permitidoos o no permitidos
    // Ahora tenemos ^ que cuando esta en los [] signfican negacion o que no van a permitir algoo
    // despues teenemos \s significa espacios en blanco, y como teniamos ^ pues dice que no va a permitir espacioos en blanco
    // sigue @ y dice que no se permiten un arrooba en esta parte
    // y tambien no aceptara puntos
    //despues se cierra el grupo con ]
    // despues tenemos + que significa que puede haber uno o varios caracteres
    // este blooque nooso dice que deben existir 1 o mas caracteres que no sean espacios en blancoos ni arrobas
    // Ahoooora sigue una arroba donde nos dice si oo si debe exisitir un arriba despues del bloque anterior    
    // Ahooora comienza ootro bloque para validar y se reptire casi los mismo
    // En este pues lo mismoo comienza con ^ y son los caracteres que no va a permitir, no permite espacios en blanco nin arrobas ni puntos
    // igual sigue un + q noos dice que deben tener 1 o mas caracteres
    // Despues sigue \. que nos dice que obligatoriamente debe haber un punto despues del bloque anterior
    // Por ultimo tenemos el ultimo bloque que es igual al anterior, no se permiten espacios en blanco, ni arroobas y que hayan mas o uno caracteres
    // aqui si permitimos punto porque pueden tener como itoxaca.edu.mx
    // De ahi tenemos el el signoo de $ que significa que hasta aqui termina el texto y 
    // / indica que termina la expresion regular


    /*
    Validacion 1: Correo vacio
        Si encuentra que el correo esta vacio entonces lanzara una alerta
        La alerta indica que debe ingresar el correo electronico
        Y de ahi retornara false para que no continue con la validacion
    */
    if (correo === "") {
        if(elError) elError.innerText = "Ingrese el correo electronico";
        else alert("Ingrese el correo electronico");
        return false;
    }

    /*
    Validacion 2: Formato de correo
        Si encuentra que el correo no tiene un formato valido entonces lanzara una alerta
        La alerta indica que debe ingresar un correo electronico valido
        Y de ahi retornara false para que no continue con la validacion
    */
    if (!expresion.test(correo)) {
        //  Se usa para saber si el correo NO cumple con la expresión regular
        //  test() es un método de las expresiones regulares. Sirve para probar si un texto cumple con el patrON
        //  o sea si lo que escribirmos en cuando se pidioo el correo cumple con la expresion regular q definimos salta la alerta
        if(elError) elError.innerText = "El correo electronico no es valido. Ejemplo correcto: usuario@dominio.com";
        else alert("El correo electronico no es valido. Ejemplo correcto: usuario@dominio.com");
        return false;
    }
    // Si si cumple pasa a true
    return true;
}

/*
-- Funcion: Solo letras
-- ¿Que hace? Valida que el campo sooloo tenga letras y no numeros ni otro tipo de caracteres
-- Parametros: ocupa el texto que se ingresa en el campo a validar
-- Retorno: true si el texto es valido, false si no lo es
*/
function soloLetras(texto) {
    let expresion = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;
    /*Se define una expresion regular
        Las diagonales // - Indica el inicio y fin de una expresion regular
        ^ Indica que el texto va a comenzar
        [] Ahora tenemos un grupooo de caracteres
        Dentro de loos corchetes va a aceptar Letras mayusculas de la A-Z
        letras minusculas a/z, y de ahi acentos para letras mayusculas y minusculas
        tambien la Ñ y ñ asi como dieres en Ü y ü
        Por ultimo tenemos el signo mas que indican que son 1 o mas caracteres
        y luego tenemos $ que nos dice el fin de lo que validara

    */

    /*
    Validacion 1: Campo vacio
        Si encuentra que el campo esta vacio entonces lanzara una alerta
        La alerta indica que debe ingresar texto en el campo
        Y de ahi retornara false para que no continue con la validacion
    */
    if (texto === "") {
        alert("Por favor ingrese un valor, el campo no puede estar vacío");
        return false;
    }

    /*
    Validacion 2: Formato del texto
        Si encuentra que el texto no cumple con la expresion regular entonces lanzara una alerta
        La alerta indica que el campo solo debe contener letras y espacios
        Y de ahi retornara false para que no continue con la validacion
    */
    if (!expresion.test(texto)) {
        alert("El campo solo debe contener letras y espacios");
        return false;
    }

    return true;
}

/*
-- Funcion: Validar Longitud de un numeroo
-- ¿Que hace? Valida que el numero ingresado en un campoo noo pase mas de una cierta longitud
-- Parametros: ocupa el campo de numeroo donde ingresara y un campo donde se declarara la longitud
-- Retorno: true si el texto es valido, false si no lo es
*/
function validarLongitud(numero, maxLongitud) {
    let valorATexto = String(numero).trim();
    // Convertimos el numero a texto y eliminamos los espacios en blanco para que se mas facil contar los digitos con .length

    /*
    Validacion 1: Campo vacio
        Si encuentra que el campo esta vacio entonces lanzara una alerta
        La alerta indica que debe ingresar un valor numérico
        Y de ahi retornara false para que no continue con la validacion
    */
    if (valorATexto === "") {
        alert("Por favor ingrese un valor numérico");
        return false;
    }


    // Se utiliza un for para recoorrer el textoo empezando desde 0 y con limite del tamaño del texto
    for (let i = 0; i < valorATexto.length; i++) {
        let caracter = valorATexto[i];
        /* Se usa caracter donde tomara el valor del numero que se encuentre en la poosicion segun i
         Por ejemploo 
        Si el valor es 2345
        i es 0 el valor de caracter es 2
        i es 1 el valor de caracter es 3
        i es 2 el valor de caracter es 4
        i es 3 el valor de caracter es 5
        // Si el caracter es menor a "0" o mayor a "9" entonces quiere decir que no es un numero y lanzara una alerta
        // La alerta indica que el campo solo debe contener números
        // Y de ahi retornara false para que no continue con la validacion
       */
        if (caracter < "0" || caracter > "9") {
            alert("Este campo solo debe contener números");
            return false;
        }
    }

    /*
    Validacion 2: Longitud del texto
        Si encuentra que la longitud del texto es mas grande que la longitud maxima entonces lanzara una alerta
        La alerta indica que el valor numerico no debe tener mas de "+ maxLongitud + " digitos"
        Y de ahi retornara false para que no continue con la validacion
    */
    if (valorATexto.length > maxLongitud) {
        alert("El valor numérico no debe tener mas de " + maxLongitud + " digitos");
        return false;
    }

    return true;
}
/*
-- Funcion: Calcular edad
-- ¿Que hace? Calcula la edad de una persona con base en su fecha de nacimiento
-- Parametros: ocupa el campo de fecha de nacimiento donde ingresara el valor
-- Retorno: la edad de la persona en numero entero
*/
function calcularEdad(fechaNacimiento) {
    /*
    Validacion 1: Campo vacio
        Si encuentra que el campo esta vacio entonces lanzara una alerta
        La alerta indica que debe ingresar la fecha de nacimiento
        Y de ahi retornara false para que no continue con la validacion
    */
    if (fechaNacimiento === "") {
        alert("Ingrese la fecha de nacimiento");
        return false;
    }

    // Nos encoontramos que se declaran nacimiento que tomara el valor de fechaNacimiento que se ingreso
    // Luego tendremos fechaActual que tomara la fecha del dia actual cuando se ejecute la funcion
    // Y de ahi se sacan los valores de año, mes y dia de ambas fechas
    let nacimiento = new Date(fechaNacimiento);
    let fechaActual = new Date();

    /*
    Validacion 2: Fecha de nacimiento mayor a la fecha actual
        Si encuentra que la fecha de nacimiento es mayor a la fecha actual entonces lanzara una alerta
        La alerta indica que la fecha de nacimiento no puede ser mayor a la fecha actual
        Y de ahi retornara false para que no continue con la validacion
    */
    if (nacimiento > fechaActual) {
        alert("La fecha de nacimiento no puede ser mayor a la fecha actual");
        return false;
    }

    // Una vez que lo logre validar vamos a separar ambas fechas por sus elementoos dia mes y año
    let añoNacimiento = nacimiento.getFullYear();
    let mesNacimiento = nacimiento.getMonth();
    let diaNacimiento = nacimiento.getDate();
    let añoActual = fechaActual.getFullYear();
    let mesActual = fechaActual.getMonth();
    let diaActual = fechaActual.getDate();

    // Una vez separados es facil saber cual es la edad, soloo al año actual le restamos el año de nacimiento
    let edad = añoActual - añoNacimiento;
    // Pero si lo hacemos un poco mas logico debemos tener validaciones
    // imaginemos que nace en diciembre y aun es abril, pues aun no cumple años y no debemos restarle 1 a la edad
    if (mesActual < mesNacimiento) {
        edad = edad - 1;
        // luego tenemos otro imaginemos que ya estaos en diciembre pero aun no lelgamos al dia en que nacio pues lo mismo si no hemos llegado que se reste 1
    } else if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
        edad = edad - 1;
    }

    return edad;
}

/*
-- Funcion: Validar si una persona es mayor de edad
-- ¿Que hace? Verifica si una persona tiene 18 años o mas usando su fecha de nacimiento
-- Parametros: Recibe la fecha de nacimiento ingresada por el usuario
-- Retorno: true si la persona es mayor de edad, false si no cumple o si la fecha no es valida
*/
function esMayorDeEdad(fechaNacimiento) {

    /*
    Reutilizamos la funcion anterior de calcular edad, y hacemos lo siguiente
        primero a edad va a ser igual a lo que regrese la funcion calcularEdad
    */
    let edad = calcularEdad(fechaNacimiento);

    // Una vez que edad tenga un valor va a validar algunas cosas

    /*
    Validacion 1: edad es false
        Si encuentra que la edad es false entonces retornara false
    */
    if (edad === false) {
        return false;
    }

    /*
    Validacion 2: edad es mayor o igual a 18
        Si encuentra que la edad es mayor o igual a 18 entonces retornara true
        Si no entonces lanzara una alerta indicando que la persona debe ser mayor de edad para registrarse
        Y retornara false
    */
    if (edad >= 18) {
        return true;
    } else {
        alert("La persona debe ser mayor de edad para registrarse");
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
        if(elError) elError.innerText = "Ingrese la contraseña";
        else alert("Ingrese la contraseña");
        return false;
    }

    /*
    validacion 2: longitud minima
        si la contraseña tiene menos de 8 caracteres entonces no es valida
        de ahi se muestra una alerta y retorna false
    */
    if (password.length < 8) {
        if(elError) elError.innerText = "La contraseña debe tener minimo 8 caracteres";
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
        if(elError) elError.innerText = "La contraseña debe tener al menos una letra mayuscula";
        else alert("La contraseña debe tener al menos una letra mayuscula");
        return false;
    }
    /*
    validacion 4: minuscula
        si no se encontro una minuscula entonces se muestra una alerta
        y retorna false
    */
    if (!tieneMinuscula) {
        if(elError) elError.innerText = "La contraseña debe tener al menos una letra minuscula";
        else alert("La contraseña debe tener al menos una letra minuscula");
        return false;
    }
    /*
    validacion 5: numero
        si no se encontro un numero entonces se muestra una alerta
        y retorna false
    */
    if (!tieneNumero) {
        if(elError) elError.innerText = "La contraseña debe tener al menos un numero";
        else alert("La contraseña debe tener al menos un numero");
        return false;
    }
    /*
    validacion 6: caracter especial
        si no se encontro un caracter especial entonces se muestra una alerta
        y retorna false
    */
    if (!tieneEspecial) {
        if(elError) elError.innerText = "La contraseña debe tener al menos un caracter especial";
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