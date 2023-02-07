alert("Bienvenido a nuestro SIMULADOR DE CALCULCO. Nota: La información del desarrollo de este ejercicio se encuentra en la consola");

let nombrePaciente = prompt("Escriba su nombre");
let numeroConsultas = Number(prompt("Escoja el número de consultas que desea recibir con el especialista - Máximo 10 citas, por cada cita escogida se ofrece un valor de descuento"));
let tipoMoneda = prompt("Escoja la moneda a pagar donde 1 es Dolar (4.800 COP)  americano y 2 es Euro (5.100 COP)");
let dolarCOP = 4800;
let euroCOP = 5100;
let precioDolares = 30;
let precioEuro = 25;
let precioConsulta = 0;

function calculoMoneda(valorcConsuta, tasaCambio) {

    return valorcConsuta * tasaCambio;

}

if (numeroConsultas >= 1 && numeroConsultas <= 10) {

    if (tipoMoneda === "1") {
        alert("El costo en DOLARES de una consulta es de 30 USD");
        precioConsulta = calculoMoneda(precioDolares, dolarCOP);


    } else if (tipoMoneda === "2") {

        alert("El costo en EUROS de una consulta es de 25 Euros");
        precioConsulta = calculoMoneda(precioEuro, euroCOP);
    }

    else {

        alert("Moneda erronea");

    }

}
else {
    alert("El número de consultas ingresado es erroneo");
}

let descuentoCita = 0;
let porcentajeDescuento = 0;


for (let i = 1; i <= numeroConsultas; i++) {

    descuentoCita = 0;
    porcentajeDescuento = 0;
    porcentajeDescuento = i / 100;



    descuentoCita = (precioConsulta) - (precioConsulta * porcentajeDescuento);

    console.log("El valor de: " + nombrePaciente + " (con descuento en pesos Colombianos) de la cita: # " + i + " Es de = " + descuentoCita + " Pesos colombianos");


}


console.log("Fin del simulador")






