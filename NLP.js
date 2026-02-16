function esVocal(caracter) {
    const vocalesReferencia = "aeiouáéíóú";

    if (caracter.length !== 1) {
        return "Error: Por favor, ingresa solo un carácter.";
    }

    if (vocalesReferencia.includes(caracter.toLowerCase())) {
        return true;
    } else {
        return false;
    }
}

let entrada = prompt("Introduce un carácter para el análisis NLP:");

if (entrada !== null) {
    let resultado = esVocal(entrada.trim());

    if (resultado === true) {
        console.log(`Patrón Detectado: '${entrada}' es una vocal.`);
        alert(`Patrón Detectado: '${entrada}' es una vocal.`);
    } else if (resultado === false) {
        console.log(`Patrón No Detectado: '${entrada}' es una consonante o símbolo.`);
        alert(`Patrón No Detectado: '${entrada}' es una consonante o símbolo.`);
    } else {
        console.log(resultado);
        alert(resultado);
    }
}