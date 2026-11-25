console.log("MI ARCHIVO APP.JS ESTA FUNCIONANDO");

document.addEventListener("DOMContentLoaded", () => {

    // 1. Clase propia: Tarea
    class Tarea {
        constructor(descripcion, prioridad) {
            this.descripcion = descripcion;
            this.prioridad = prioridad;
            this.completada = false;
        }

        mostrar(lista) {
            const li = document.createElement("li");

            const texto = document.createElement("span");
            texto.textContent = this.descripcion + " - Prioridad: " + this.prioridad;

            const btnCompletar = document.createElement("button");
            btnCompletar.textContent = "Completar";

            btnCompletar.addEventListener("click", () => {
                this.completada = !this.completada;

                if (this.completada) {
                    texto.style.textDecoration = "line-through";
                    btnCompletar.textContent = "Deshacer";
                } else {
                    texto.style.textDecoration = "none";
                    btnCompletar.textContent = "Completar";
                }
            });

            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "Borrar";

            btnBorrar.addEventListener("click", () => {
                li.remove();
            });

            li.appendChild(texto);
            li.appendChild(btnCompletar);
            li.appendChild(btnBorrar);

            lista.appendChild(li);
        }
    }

    const formulario = document.getElementById("formularioTarea");
    const inputDescripcion = document.getElementById("descripcion");
    const inputPrioridad = document.getElementById("prioridad");
    const lista = document.getElementById("listaTareas");

    if (!formulario || !inputDescripcion || !inputPrioridad || !lista) {
        console.error("Error: No se encontraron los elementos del HTML.");
        return;
    }

    const tareas = [];

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const descripcion = inputDescripcion.value.trim();
        const prioridad = inputPrioridad.value;

        if (descripcion === "") {
            alert("Escribe una tarea antes de agregarla.");
            return;
        }

        const nuevaTarea = new Tarea(descripcion, prioridad);

        tareas.push(nuevaTarea);

        nuevaTarea.mostrar(lista);

        formulario.reset();
        inputDescripcion.focus();

        console.log("Tarea agregada:", nuevaTarea);
    });

    console.log("JavaScript conectado correctamente.");
});

