function analizarPicosLatencia(tiempos, umbralCritico) {
    if (!tiempos || tiempos.length === 0) {
        return false;
    }

    const suma = tiempos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    const promedio = suma / tiempos.length;

    console.log("--- Análisis de Red ---");
    console.log(`Promedio actual: ${promedio.toFixed(2)} ms`);
    console.log(`Umbral crítico: ${umbralCritico} ms`);

    const promedioExcedido = promedio > umbralCritico;

    let picoDetectado = false;
    for (let t of tiempos) {
        if (t >= (promedio * 3)) {
            picoDetectado = true;
            console.log(`!Pico sospechoso detectado!: ${t} ms`);
            break;
        }
    }

    const dispararAlerta = promedioExcedido || picoDetectado;
    
    return dispararAlerta;
}

const datosLatencia = [120, 135, 110, 450, 125, 140];
const umbral = 200;

const alertaActiva = analizarPicosLatencia(datosLatencia, umbral);

if (alertaActiva) {
    console.log("ALERTA: Se han detectado irregularidades en la latencia.");
} else {
    console.log("Sistema estable: Latencia dentro de los parámetros.");
}