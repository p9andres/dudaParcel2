import dayjs from "./node_modules/dayjs";

const fechaHoy = dayjs().format('DD/MM/YYYY');
const parrafoFecha = document.getElementById("parrafoFecha");

parrafoFecha.textContent = fechaHoy;
console.log(parrafoFecha);


const modalPlato = document.getElementById('modal');
const imgPlato = document.getElementById('plato');
const btnCerrar = document.getElementById('btn-cerrar');

btnCerrar.addEventListener('click', function (event) {
    modalPlato.style.display = 'none';
});

imgPlato.addEventListener('click', function (event) {
    modalPlato.style.display = 'block';
});