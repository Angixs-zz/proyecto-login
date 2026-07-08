// Atrapamos el botón de Entrar por su ID
let botonEntrar = document.getElementById('botonLogin');

botonEntrar.addEventListener('click', function (evento) {
    evento.preventDefault(); // Evita que la página se recargue

    // Obtenemos los valores de los inputs
    let correo = document.getElementById('correoElectronico').value;
    let password = document.getElementById('password').value;

    // USAMOS TUS FUNCIONES DE UTILERIA.JS
    // Primero valida el correo, pasándole el ID donde queremos mostrar el error
    let correoEsValido = validarCorreo(correo, 'errorCorreo');
    if (!correoEsValido) {
        return; // Si el correo está mal, la función validarCorreo ya lanza su alerta y aquí detenemos el proceso.
    }

    // Luego valida la contraseña, pasándole el ID donde queremos mostrar el error
    let passwordEsValido = validarPassword(password, 'errorPassword');
    if (!passwordEsValido) {
        return; // Si la contraseña está mal, detiene el proceso.
    }

    // Si ambas validaciones pasan a true:
    // 1. Guardamos el correo en LocalStorage
    localStorage.setItem('usuarioLogueado', correo);

    // 2. Redirigimos a la pantalla del sistema
    window.location.href = 'index.html';
});