const navbar = document.querySelector("#nav") 
const menuBurguer = document.querySelector("#menu-burguer") 
menuBurguer.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
    console.log("Lllegue")
})

console.log("Lllegue")


// script.js

// Obtén los elementos necesarios
const toggleButton = document.getElementById('toggleMode');
const body = document.body;

// Verifica si hay una preferencia guardada en localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
}

// Función para cambiar entre los modos
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Guarda la preferencia en localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
