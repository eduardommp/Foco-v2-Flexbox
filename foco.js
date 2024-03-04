// Este archivo debe ser llamado con defer
let switchPrendido = false
const btn = document.querySelector(".switch")
const focoArriba = document.querySelector(".foco-arriba")
const focoAbajo = document.querySelector(".foco-abajo")

//Justo debajo, agregue un listener del evento click del interruptor. Esto realizará el cambio de clase en los dos <div> que conforman el foco
btn.addEventListener("click", function () {
    if (switchPrendido) {
        btn.classList.remove("on");
        focoArriba.classList.remove("focoOn");
        focoAbajo.classList.remove("focoOn");
    } else {
        btn.classList.add("on");
        focoArriba.classList.add("focoOn");
        focoAbajo.classList.add("focoOn");
    }
    switchPrendido = !switchPrendido;
});