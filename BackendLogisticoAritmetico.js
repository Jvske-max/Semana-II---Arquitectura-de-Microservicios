function calcularCostoTransporte() {
    console.log("--- Sistema de Cálculo de Transportes ---");
    console.log("Opciones de vehículo: Pickup, Gandola, Mudanza");

    let entrada = prompt("Seleccione el tipo de vehículo:").trim().toLowerCase();
    let vehiculo = entrada.charAt(0).toUpperCase() + entrada.slice(1);

    let distancia = parseFloat(prompt("Ingrese la distancia a recorrer (km):"));

    if (isNaN(distancia)) {
        console.log("Error: La distancia debe ser un número (ejemplo: 10.5).");
        return;
    }

    const tasaKm = 1.50;
    let precioBase = 0.0;

    switch (vehiculo) {
        case "Pickup":
            precioBase = 6.00;
            break;
        case "Gandola":
            precioBase = 7.00;
            break;
        case "Mudanza":
            precioBase = 10.00;
            break;
        default:
            console.log("Error: Vehículo no reconocido.");
            return;
    }

    let costoDistancia = distancia * tasaKm;
    let montoTotal = precioBase + costoDistancia;

    let reporte = `
==============================
   REPORTE DE FACTURACIÓN
==============================
Vehículo seleccionado: ${vehiculo}
Distancia:            ${distancia.toFixed(2)} km
Precio Base:         $${precioBase.toFixed(2)}
Costo por Distancia: $${costoDistancia.toFixed(2)}
------------------------------
TOTAL A PAGAR:       $${montoTotal.toFixed(2)}
==============================`;

    console.log(reporte);
    alert(reporte);
}

calcularCostoTransporte();