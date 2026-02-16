console.log("--- Sistema de Validación de Pagos ---");

let metodo = prompt("Ingrese el método de pago (Pago Movil / Tarjeta):").trim().toLowerCase();
let clave = prompt("Ingrese su clave o número de validación:").trim();

if (metodo === "pago movil") {
        
    if (Number(clave) && clave.length === 8) {
        console.log("Éxito: Pago Móvil validado correctamente.");
        alert("Éxito: Pago Móvil validado correctamente.");
    } else {
        console.log("Error: El Pago Móvil debe contener exactamente 8 números.");
        alert("Error: El Pago Móvil debe contener exactamente 8 números.");
    }

} else if (metodo === "tarjeta") {

    if (Number(clave) && clave.length === 16) {
        console.log("Éxito: Tarjeta validada correctamente.");
        alert("Éxito: Tarjeta validada correctamente.");
    } else {
        console.log("Error: La Tarjeta debe contener exactamente 16 números.");
        alert("Error: La Tarjeta debe contener exactamente 16 números.");
    }

} else {
    console.log("Error: Método de pago no reconocido.");
    alert("Error: Método de pago no reconocido.");
}