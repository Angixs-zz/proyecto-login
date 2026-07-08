document.addEventListener('DOMContentLoaded', () => {

    // =====================================================================
    // AGREGAR TOOLTIPS (CAJITAS DE AYUDA) A LOS CAMPOS DEL FORMULARIO
    // =====================================================================
    agregarAyuda('menu-despegable', 'Presiona para ver las opciones del menú');
    agregarAyuda('nomusuario', 'Presione para desplegar la opcion de cerrar sesión');
    agregarAyuda('nombre', 'Escribe tu nombre completo empezando por apellidos');
    agregarAyuda('correo', 'Usa un correo válido (ej. juan@gmail.com)');
    agregarAyuda('numcontrol', 'Tu número de control debe ser de máximo 6 números');
    agregarAyuda('curp', 'La CURP tiene 18 caracteres y va en mayúsculas');
    agregarAyuda('telefono', 'Ingresa tu número celular a 10 dígitos');
    agregarAyuda('Contraseña', 'Debe tener mayúscula, número, símbolo y 8 letras mínimo');
    agregarAyuda('fechaNac', 'Selecciona el día en que naciste');

    // 1. MOSTRAR EL CORREO DEL USUARIO EN LA BARRA SUPERIOR (NAVBAR)

    // Recuperamos el correo que guardaste en el LocalStorage durante el login
    let correoUsuario = localStorage.getItem('usuarioLogueado');
    // Si el correo existe, lo ponemos en el texto del span con id="nomusuario"
    if (correoUsuario) {
        let nombreCorto = correoUsuario.split('@')[0];
        document.getElementById('nomusuario').textContent = nombreCorto;
    } else {
        // (Opcional) Si alguien intenta entrar a index.html sin iniciar sesión, lo regresamos
        window.location.href = 'login.html';
    }

    // 2. LÓGICA PARA CERRAR SESIÓN Y SALIR DEL SISTEMA

    const btnSalir = document.getElementById('btnSalir');

    // Creamos la función 'salir' separada para mayor claridad
    function salir(evento) {
        evento.preventDefault(); // Evitamos que el enlace actúe por defecto
        // Limpiamos el correo del LocalStorage para simular el cierre de sesión
        localStorage.removeItem('usuarioLogueado');
        // Redirigimos de vuelta a la pantalla de acceso
        window.location.href = 'login.html';
    }

    // Le pasamos la función (sin paréntesis) al evento click
    btnSalir.addEventListener('click', salir);
    // ------------------------------------------

    // === ACCIÓN 1: OCULTAR/MOSTRAR SIDEBAR COMPLETO ===
    // OCULTAR/MOSTRAR MENU DESPEGABLE COMPLETO
    const menuDespegable = document.getElementById('menu-despegable');
    const menulateral = document.getElementById('menulateral');

    if (menuDespegable && menulateral) {
        menuDespegable.addEventListener('click', () => {
            menulateral.classList.toggle('oculto');
        });
    }

    // DESPLEGAR SUBMENÚ "CAPTURA"
    const btnMenuUsuarios = document.getElementById('btnMenuUsuarios');
    const submenuCaptura = document.getElementById('submenuCaptura');

    if (btnMenuUsuarios && submenuCaptura) {
        btnMenuUsuarios.addEventListener('click', () => {
            if (submenuCaptura.style.display === 'block') {
                submenuCaptura.style.display = 'none';
            } else {
                submenuCaptura.style.display = 'block';
            }
        });
    }

    // INTERCAMBIAR BIENVENIDA POR FORMULARIO 
    const enlaceCaptura = document.getElementById('enlaceCaptura');
    const pantallaBienvenida = document.getElementById('pantallaBienvenida');
    const seccionFormulario = document.getElementById('seccionFormulario');

    if (enlaceCaptura && pantallaBienvenida && seccionFormulario) {
        enlaceCaptura.addEventListener('click', (e) => {
            e.preventDefault();
            pantallaBienvenida.style.display = 'none';   // Esconde bienvenida
            seccionFormulario.style.display = 'block';    // Muestra formulario
        });
    }

    // REGRESAR A LA PANTALLA PRINCIPAL
    const btnInicio = document.getElementById('btnInicio');

    if (btnInicio && pantallaBienvenida && seccionFormulario) {
        btnInicio.addEventListener('click', () => {
            seccionFormulario.style.display = 'none';
            pantallaBienvenida.style.display = 'block';
        });
    }

    // =====================================================================
    // LÓGICA DEL TOUR PERSONALIZADO (GUIA EXPLORADOR)
    // =====================================================================
    const btnTour = document.getElementById('btnTour');
    if (btnTour) {
        btnTour.addEventListener('click', () => {
            // Definimos los pasos usando el formato de tu funcion crearTour
            let misPasos = [
                {
                    elemento: '#menu-despegable',
                    titulo: 'Menú Lateral',
                    mensaje: 'Da clic aquí para abrir o cerrar el panel izquierdo.'
                },
                {
                    elemento: '#btnMenuUsuarios',
                    titulo: 'Módulo de Usuarios',
                    mensaje: 'Aquí podrás desplegar las opciones y entrar a la Captura.'
                },
                {
                    elemento: '#para-salir',
                    titulo: 'Tu Perfil',
                    mensaje: 'Presiona sobre tu nombre para cerrar tu sesión.'
                }
            ];

            // Mandamos a llamar a tu propia función que está en guiaExplorador.js
            crearTour(misPasos);
        });
    }
});