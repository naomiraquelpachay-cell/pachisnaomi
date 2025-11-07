// Espera a que todo el contenido del DOM (HTML) esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. SELECCIONAR LOS ELEMENTOS
    // Seleccionamos el botón que creamos en HTML usando su 'id'
    const themeToggleButton = document.getElementById('theme-toggle-button');
    
    // Seleccionamos el <body> para poder añadirle la clase 'dark-mode'
    const body = document.body;

    // 2. CREAR LA FUNCIÓN
    // Esta función se ejecutará CADA VEZ que se haga clic en el botón
    function toggleTheme() {
        // 'classList.toggle' es la magia:
        // - Si el <body> tiene la clase 'dark-mode', la QUITA.
        // - Si el <body> NO tiene la clase 'dark-mode', la AÑADE.
        body.classList.toggle('dark-mode');

        // Opcional: Cambiar el texto del botón para que coincida con la acción
        if (body.classList.contains('dark-mode')) {
            themeToggleButton.textContent = 'Cambiar a Modo Claro';
        } else {
            themeToggleButton.textContent = 'Cambiar a Modo Oscuro';
        }
    }

    // 3. ASIGNAR EL EVENTO
    // Le decimos al botón: "Oye, cuando alguien haga 'clic' en ti,
    // ejecuta la función 'toggleTheme'".
    themeToggleButton.addEventListener('click', toggleTheme);

});