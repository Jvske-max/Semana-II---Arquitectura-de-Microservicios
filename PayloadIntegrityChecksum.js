function verificarIntegridadMensaje(mensaje) {
    let sumaAscii = 0;
    
    console.log(`\n--- Reporte de Integridad para: "${mensaje}" ---`);

    for (let i = 0; i < mensaje.length; i++) {
        const valorNumerico = mensaje.charCodeAt(i);
        sumaAscii += valorNumerico;
    }

    const esPar = (sumaAscii % 2 === 0);
    
    console.log(`Suma Total ASCII: ${sumaAscii}`);
    
    if (esPar) {
        console.log("Resultado: Paquete Íntegro (Suma Par)");
    } else {
        console.log("Resultado: Paquete Corrupto o Alterado (Suma Impar)");
    }
        
    return esPar;
}

verificarIntegridadMensaje("API_OK");
verificarIntegridadMensaje("API_ERR");