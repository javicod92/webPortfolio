const home = document.querySelector("#inicio");
const about = document.querySelector("#sobre_mi");
const projects = document.querySelector("#proyectos");
const contacts = document.querySelector("#contacto");


function change (element) {
    const active = document.querySelector(".--active");
    if (element !== active) {
        element.classList.toggle("--active");
        active.classList.toggle("--active");
    }
}

// la arrow function evita que que la función a la que llama el evento (change) se inicialice automáticamente.
home.addEventListener("click", () => change (home));
about.addEventListener("click", () => change (about));
projects.addEventListener("click", () => change (projects));
contacts.addEventListener("click", () => change (contacts));
