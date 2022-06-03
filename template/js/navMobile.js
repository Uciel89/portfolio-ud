/* ===/ Configuración de la navegación /=== */

// Constantes 
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');


function tapToggle () {
    // Configuramos el comportamiento del navToggle
    navToggle.addEventListener('click', () => {

        // Constante para modificar la visibilidad (atributo) de la navegación 
        const visibility = primaryNav.getAttribute('data-visible'); 
    
        // Cambiamos el estado del atributo
        if (visibility === "false"){ 
    
            // Establecemos el valor del atributo en verdadero para mostrar la navegación
            primaryNav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
    
        } else if (visibility === "true") {
            primaryNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    });
}

function navLink () {
    navLinks.forEach(n => n.addEventListener('click', () => {
        // Constante para modificar la visibilidad (atributo) de la navegación 
        const visibility = primaryNav.getAttribute('data-visible'); 

        // Cambiamos el estado del atributo
        if (visibility === "false"){ 

            // Establecemos el valor del atributo en verdadero para mostrar la navegación
            primaryNav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);

        } else if (visibility === "true") {
            primaryNav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    }));
}

tapToggle();
navLink();




