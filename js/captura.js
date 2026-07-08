document.addEventListener('DOMContentLoaded', () => {
    const btnGuardar = document.getElementById('btnGuardar');

    if (btnGuardar) {
        btnGuardar.addEventListener('click', (evento) => {
            evento.preventDefault();

            // 1. Limpiar todos los mensajes de error previos
            document.getElementById('errorNombreCaptura').innerText = "";
            document.getElementById('errorCorreoCaptura').innerText = "";
            document.getElementById('errorNumControl').innerText = "";
            document.getElementById('errorCurp').innerText = "";
            document.getElementById('errorTelefono').innerText = "";
            document.getElementById('errorPasswordCaptura').innerText = "";
            document.getElementById('errorFechaNacCaptura').innerText = "";

            // 2. Obtener los valores de los inputs
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const numcontrol = document.getElementById('numcontrol').value.trim();
            const curp = document.getElementById('curp').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const contrasenia = document.getElementById('Contraseña').value;
            const fechaNac = document.getElementById('fechaNac').value;

            // 3. SECCIÓN DE VALIDACIONES UTILIZANDO LA UTILERÍA MODIFICADA

            if (!soloLetras(nombre, 'errorNombreCaptura')) {
                return; // Pinta el error en pantalla y detiene
            }

            if (!validarCorreo(correo, 'errorCorreoCaptura')) {
                return;
            }

            if (!validarLongitud(numcontrol, 6, 'errorNumControl')) {
                return;
            }

            if (curp === "") {
                document.getElementById('errorCurp').innerText = "Por favor, ingrese la CURP.";
                return;
            }
            const expresionCurp = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/;
            if (!expresionCurp.test(curp.toUpperCase())) {
                document.getElementById('errorCurp').innerText = "El formato de la CURP no es válido (Ej: PAAA000000HDFXXXXX0).";
                return;
            }

            if (telefono === "") {
                document.getElementById('errorTelefono').innerText = "Por favor, ingrese un número telefónico.";
                return;
            }
            const telFormateado = formatearTelefono(telefono);
            if (telFormateado.startsWith("Error")) {
                document.getElementById('errorTelefono').innerText = "El teléfono debe contener exactamente 10 dígitos numéricos.";
                return;
            }

            if (!validarPassword(contrasenia, 'errorPasswordCaptura')) {
                return;
            }

            if (!esMayorDeEdad(fechaNac, 'errorFechaNacCaptura')) {
                return;
            }

            alert("¡Alumno registrado con éxito en el sistema!");
            document.querySelector('.formulario').reset();
        });
    }
});