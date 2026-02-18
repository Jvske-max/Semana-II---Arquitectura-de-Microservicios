function decimalABinarioManual(n) {
    if (n === 0) return "0";
    
    let residuos = "";
    let numero = Math.floor(n);
    
    while (numero > 0) {
        let residuo = numero % 2;
        residuos = residuo.toString() + residuos;
        numero = Math.floor(numero / 2);
    }
    
    return residuos;
}

function decimalAHexadecimalManual(n) {
    if (n === 0) return "0";
    
    const digitosHex = "0123456789ABCDEF";
    let resultadoHex = "";
    let numero = Math.floor(n);
    
    while (numero > 0) {
        let residuo = numero % 16;
        let caracter = digitosHex[residuo];
        resultadoHex = caracter + resultadoHex;
        numero = Math.floor(numero / 16);
    }
    
    return resultadoHex;
}

const numeroTest = 255;

const binario = decimalABinarioManual(numeroTest);
const hexadecimal = decimalAHexadecimalManual(numeroTest);

console.log(`Número Decimal: ${numeroTest}`);
console.log(`Representación Binaria: ${binario}`);
console.log(`Representación Hexadecimal: ${hexadecimal}`);