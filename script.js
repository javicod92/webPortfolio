// Script perteneciente a la primer version de los cambios de color
// const home = document.querySelector("#inicio");
// const about = document.querySelector("#sobre_mi");
// const projects = document.querySelector("#proyectos");
// const contacts = document.querySelector("#contacto");

// function change (element) {
//     const active = document.querySelector(".--active");
//     active.classList.remove("--active");
//     element.classList.add("--active");
// }
// /*Función de evento para los botones - Se puede utilizar una función scrolly pero
//  para este caso sencillo no es necesario */
// home.addEventListener("click", () => change (home));
// about.addEventListener("click", () => change (about));
// projects.addEventListener("click", () => change (projects));
// contacts.addEventListener("click", () => change (contacts));


// Version más actual mediante el uso del evento window scroll - scrollY
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

// Activación por eventos del scroll en la ventana del navegador
window.onscroll = () => { //i can use onscrollend event.
    sections.forEach(section => {
        const top = window.scrollY; //scrollY return the value in pixels for the window scroll-y
        const offset = section.offsetTop - 60; //offsetTop returns the number of pixels between the top of the element and the top of the browser window
        const offsetHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (top >= offset && top < offset + offsetHeight) {
            navLinks.forEach(link => {
                link.classList.remove("--active");
            });
            document.querySelector(`header nav a[href*=${sectionId}]`).classList.add("--active");
            //uso a[href*=] porque mi ID de los anchors no coinciden con el ID de mis secciones - Dentro de mis anchos el atributo href es el que contiene
            //el id de la sección. El ID de mi anchor es "inicio" y el de la sección inicio es "home".
        };
    });
};

//Función para hacer la pantalla del video - Una vez que el usuario haga click se cambia la imagen por el video de YouTube
document.getElementById("projects__convert").addEventListener("click", function() {
    const videoUrl = 'https://www.youtube.com/embed/oj5aNkaclSs?si=GG7fAz38jkqkH3X9&autoplay=1';
    const iframe = document.createElement("iframe");
    
    iframe.setAttribute('src', videoUrl);
    iframe.setAttribute('width', '560');
    iframe.setAttribute('height', '315');
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('class', 'projects__convert');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('autoplay', '1');
    
    this.parentNode.replaceChild(iframe, this);
});