let Producto = prompt("Ingrese el nombre del producto: ");
let Cantidad = parseInt(prompt("Ingrese la cantidad del producto: "));
let Precio = parseFloat(prompt("Ingrese el precio del producto: "));

let Total = `Venta de ${Producto}: ${Cantidad} unidades a $${Precio} cada una, seria un total de $${Cantidad * Precio}`;

console.log(Total);
alert(Total);