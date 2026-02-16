let PrecioDeVenta = parseFloat(prompt("Ingrese el precio de venta del producto:"));
let CostoDeProduccion = parseFloat(prompt("Ingrese el costo de producción del producto:"));

let Ganancia = PrecioDeVenta - CostoDeProduccion;

console.log("La ganancia del producto es: " + Ganancia);