function clasificarZonaCobertura(a, b, c) {
    if ((a + b + c) !== 180) {
        console.log(`Error: Los ángulos (${a}, ${b}, ${c}) no suman 180°.`);
        return;
    }

    const tieneRecto = (a === 90 || b === 90 || c === 90);
    const etiquetaRecto = tieneRecto ? "Rectángulo y " : "";

    if (a === b && b === c) {
        console.log(`Ángulos [${a}, ${b}, ${c}]: Es un Triángulo Equilátero.`);
    } 
    else if (a === b || b === c || a === c) {
        console.log(`Ángulos [${a}, ${b}, ${c}]: Es un Triángulo ${etiquetaRecto}Isósceles.`);
    } 
    else {
        console.log(`Ángulos [${a}, ${b}, ${c}]: Es un Triángulo ${etiquetaRecto}Escaleno.`);
    }
}

clasificarZonaCobertura(60, 60, 60); 
clasificarZonaCobertura(90, 45, 45);
clasificarZonaCobertura(90, 30, 60); 
clasificarZonaCobertura(100, 40, 40); 
clasificarZonaCobertura(50, 50, 50);  