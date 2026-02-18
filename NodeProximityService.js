function verificarProximidadNodos(x1, y1, x2, y2) {
    const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    console.log(`La distancia calculada es: ${distancia.toFixed(2)} unidades`);
    
    return distancia < 10;
}

console.log(`Nodos Cerca: ${verificarProximidadNodos(0, 0, 3, 4)}`);  
console.log(`Nodos Lejos: ${verificarProximidadNodos(0, 0, 10, 10)}`); 