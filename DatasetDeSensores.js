const datosCelsius = [20.5, 25.0, 30.2, 15.8, 10.0];

const datosFahrenheit = datosCelsius.map(c => (c * 9/5) + 32);

console.log("Original (Celsius):", datosCelsius);
console.log("Convertido (Fahrenheit):", datosFahrenheit);