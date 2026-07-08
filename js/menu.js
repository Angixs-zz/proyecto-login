  // 1. Mostrar/ocultar el submenú "Captura"
        const btnMenuUsuarios = document.getElementById('btnMenuUsuarios');
        const submenuCaptura = document.getElementById('submenuCaptura');

        btnMenuUsuarios.addEventListener('click', () => {
            if (submenuCaptura.style.display === 'block') {
                submenuCaptura.style.display = 'none';
            } else {
                submenuCaptura.style.display = 'block';
            }
        });

        // 2. Al dar clic en "Captura", ocultamos la Bienvenida y mostramos el Formulario
        const enlaceCaptura = document.getElementById('enlaceCaptura');
        const pantallaBienvenida = document.getElementById('pantallaBienvenida');
        const seccionFormulario = document.getElementById('seccionFormulario');

        enlaceCaptura.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            pantallaBienvenida.style.display = 'none';   // Oculta el mensaje de bienvenida
            seccionFormulario.style.display = 'block';    // Muestra el formulario de captura
        });