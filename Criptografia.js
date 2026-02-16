function esNumeroPerfecto(numero) {
    if (numero <= 0) return false;

    let sumaDivisores = 0;

    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }
    return sumaDivisores === numero;
}

const testNumbers = [6, 28, 496, 12];

testNumbers.forEach(n => {
    if (esNumeroPerfecto(n)) {
        console.log(`${n} es un número perfecto.`);
    } else {
        console.log(`${n} no es un número perfecto.`);
    }
});