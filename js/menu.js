document.addEventListener('DOMContentLoaded', () => {

    // === ACCIÓN 1: OCULTAR/MOSTRAR SIDEBAR COMPLETO ===
    const menuDespegable = document.getElementById('menu-despegable');
    const menulateral = document.getElementById('menulateral');

    if (menuDespegable && menulateral) {
        menuDespegable.addEventListener('click', () => {
            menulateral.classList.toggle('oculto');
        });
    }

    // === ACCIÓN 2: DESPLEGAR SUBMENÚ "CAPTURA" ===
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

    // === ACCIÓN 3: INTERCAMBIAR BIENVENIDA POR FORMULARIO ===
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

    // ACCIÓN 4: REGRESAR A LA PANTALLA PRINCIPAL ===
    const btnInicio = document.getElementById('btnInicio');

    if (btnInicio && pantallaBienvenida && seccionFormulario) {
        btnInicio.addEventListener('click', () => {
            seccionFormulario.style.display = 'none';     // Esconde el formulario
            pantallaBienvenida.style.display = 'block';   // Vuelve a mostrar la bienvenida
        });
    }
});