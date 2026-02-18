function calcularEsperaFibonacci(nReintento) {
    if (nReintento <= 0) {
        return 0;
    }

    let serie = [1, 1];

    if (nReintento <= 2) {
        return serie[nReintento - 1];
    }

    while (serie.length < nReintento) {
        let ultimo = serie[serie.length - 1];
        let penultimo = serie[serie.length - 2];
        
        serie.push(ultimo + penultimo);
    }

    return serie[serie.length - 1];
}

console.log("--- Iniciando Reintentos de Microservicio ---");

for (let i = 1; i <= 6; i++) {
    const segundos = calcularEsperaFibonacci(i);
    console.log(`Reintento ${i}: Esperando ${segundos} segundos...`);
}