const home = document.querySelector("#inicio");
const about = document.querySelector("#sobre_mi");
const projects = document.querySelector("#proyectos");
const contacts = document.querySelector("#contacto");

function change (element) {
    const active = document.querySelector(".--active");
    active.classList.remove("--active");
    element.classList.add("--active");
}
/*Función de evento para los botones - Se puede utilizar una funcion scrolly pero
 para este caso sencillo no es necesario */
home.addEventListener("click", () => change (home));
about.addEventListener("click", () => change (about));
projects.addEventListener("click", () => change (projects));
contacts.addEventListener("click", () => change (contacts));
