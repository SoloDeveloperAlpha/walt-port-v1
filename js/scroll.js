document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento click a todos los enlaces internos que tienen un href que comienza con #
    document.querySelectorAll('a[href^="index.html#@"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1); // Elimina el signo # del href
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          // Scroll suave hacia el elemento de destino
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  /*Este código JavaScript detectará los enlaces internos que apuntan a secciones de tu página y aplicará un desplazamiento suave al hacer clic en ellos. Esto debería funcionar en la mayoría de los navegadores, incluso en aquellos que no admiten scroll-behavior: smooth.
  
  Asegúrate de incluir estos archivos (styles.css y smooth-scroll.js) en tu proyecto y de que el código JavaScript se ejecute después de que el DOM esté completamente cargado, como se muestra en el ejemplo.*/
  
  
  
  
  
  