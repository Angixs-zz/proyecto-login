
// COMPONENTE 1: TooltipJS (Mensajes flotantes)

// Creamos primero un div que servira como una caja en la paginan 
let cajitaGlobal = document.createElement("div");
//Ahora a la cajita le agregamos un nombre pa que se conecte al css
cajitaGlobal.className = "tooltip-flotante";
//Al principio la cajita estara escondida
cajitaGlobal.style.display = "none";
// Agregamos la cajita al body aunque no se vea
//appendchild es agregar un elemento al body
document.body.appendChild(cajitaGlobal);
/*
// Pasamos con el funcionammiento
//recibe dos cosas el id del elemento y el mensaje que queremos mostrar, mas tarde pues se podradefinir que elemento le pasaremos
// recordando los id que le pusimos a elemmentos del formulario
// sirve como punte entre un elemento x y la cajita*/
function agregarAyuda(idElemento, mensaje) {
    //Aqui menciomos que elemnto tomara el valor que le pasemos el idElemento
    let elemento = document.getElementById(idElemento);
    // si no se encuentra el elemento pues no hace nada
    if (!elemento) return;

    // Mueve la cajita junto al mouse
    //a la variable elemento que se defincio antes y que tiene el valor del id elemento ahora 
    // se le va a poner un envto que va ser mousemove - cada ves que el mouse pueda pasar por ese elemento
    // se va a ejecutar una fucion
    elemento.addEventListener("mousemove", moverTooltip);

    // esta funcion va permitir que la cajita siga al mouse de forma inteligente
    function moverTooltip(moverMouse) {
        // Colocamos dentro de la cajita el mensaje de ayuda
        cajitaGlobal.innerText = mensaje;
        cajitaGlobal.style.display = "block";

        let posX = moverMouse.pageX + 15;
        let posY = moverMouse.pageY + 15;

        // Calculamos el ancho de la ventana y de la cajita
        let anchoVentana = window.innerWidth;
        let anchoCajita = cajitaGlobal.offsetWidth;

        // Si la cajita se sale por la derecha de la pantalla
        if (posX + anchoCajita > anchoVentana) {
            // La movemos hacia la izquierda del mouse en lugar de la derecha
            posX = moverMouse.pageX - anchoCajita - 15;
        }

        cajitaGlobal.style.left = posX + "px";
        cajitaGlobal.style.top = posY + "px";
    }

    /*function moverTooltip() {
    cajitaGlobal.innerText = mensaje;
    cajitaGlobal.style.display = "block";

    cajitaGlobal.style.left = "200px";
    cajitaGlobal.style.top = "100px";
    } */


    // Oculta la cajita al salir
    // el mouseleave es cuando el mouse ya no esta o se sale del elemento 
    elemento.addEventListener("mouseleave", ocultarCajita);

    //AQUI la oculta con el none q pues ya nose vea si sale
    function ocultarCajita() {
        cajitaGlobal.style.display = "none";
    }
}


/* COMPONENTE 2: TourJS q es la guia del documento  */

// 1. Creamos la caja del tour igual coon un div por lo flexible que llega a ser
let cajaTour = document.createElement("div");
// asi mismo le pones un noombre a la clase que se va a conectar a su estilo en el css
cajaTour.className = "caja-tour-flotante";
// pues primero otra vez va a estar ooculto
cajaTour.style.display = "none";
//y recordando que append child es agregar un elemento al body
document.body.appendChild(cajaTour);

// este srive como guia para ir contando los pasos y viendo que elemento se resalto en el paso anterior
//comienza en null porque pues no hay ningun elemento resaltado
let elementoPasoAnterior = null;

// Creamos los textos y botones que irán adentro
let tituloTour = document.createElement("h3");
let mensajeTour = document.createElement("p");
let botonSiguiente = document.createElement("button");

// Los metemos a la caja
/* no lo hacemos en html poorque estamos intentando que todo esto sea reciclado y evitamoso que el 
    que quiera usarlo pues no se tenga que preocupar por el html
*/
cajaTour.appendChild(tituloTour);
cajaTour.appendChild(mensajeTour);
cajaTour.appendChild(botonSiguiente);

// La función principal que arranca el tour
// aqui se recibe un arregloo de objetos cada objeto es un paso del tour
function crearTour(pasos) {
    //comienza con el primer paso y pues dice en que paso vamos a ir 
    let pasoActual = 0;

    // aqui se muestra el paso

    function mostrarPaso() {
        // tenemos una validacion si el paso actual es mayoor o ingual a cantiad de pasos pues la oculta
        if (pasoActual >= pasos.length) {
            //oculata la caja si ya no hay nada que mostrar
            cajaTour.style.display = "none";
            //ahroa aqui checa si habia algo resaltado pues se le quita la clase resaltado para que no se que
            if (elementoPasoAnterior) {
                elementoPasoAnterior.classList.remove("tour-resaltado");
            }
            return;
        }

        // Sacamos la información del paso actual
        let paso = pasos[pasoActual];

        // Textos del paso los que ya hbiamos definido
        tituloTour.innerText = paso.titulo;
        mensajeTour.innerText = paso.mensaje;

        // Aqui cambiamos el texto del boton si son 5 pasos 5 - 1 = 4 y si pasoActual es 4 pues termina el tour 
        // por eso lo que tendra el botons era finalizar tour si no pues no
        if (pasoActual == pasos.length - 1) {
            botonSiguiente.innerText = "Finalizar Tour";
        } else {
            botonSiguiente.innerText = "Siguiente Paso";
        }

        // es improtnate para evitar que se queden virios elementos resaltados al mismo tiempo
        if (elementoPasoAnterior) {
            elementoPasoAnterior.classList.remove("tour-resaltado");
        }

        // Aqui se resalta un nuevo elemento
        // va a buscar el componente que tenga la clase elemento y la va a resaltar
        // el query selectoor lo que hace es que busca un elemento en html
        let elementoDestino = document.querySelector(paso.elemento);
        if (elementoDestino) {
            //verifica que el elmento exista y le agregamos la clase CSS de resaltado 
            elementoDestino.classList.add("tour-resaltado");
            //classlist le agrega una clase de css que definimos al elemento
            //ahora antes de seguir el paso anterior tenra este paso o elemento
            /*para que cuando pasemos al siguiente elemento este lo podamos quitar resaltado */
            elementoPasoAnterior = elementoDestino;
        }

        // Mostramos la caja
        cajaTour.style.display = "block";
    }

    // Cuando el usuario dé clic en el botón siguiente,
    // se ejecutará la función avanzarPaso.
    botonSiguiente.addEventListener("click", avanzarPaso);

    // Esta función permite avanzar al siguiente paso del tour.
    function avanzarPaso() {
        pasoActual = pasoActual + 1;
        mostrarPaso();
    }

    // Arrancamos
    mostrarPaso();
}
