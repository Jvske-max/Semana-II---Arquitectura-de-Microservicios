function obtenerLimitePeticiones(tipoUsuario, enMantenimiento) {
    console.log(`\n--- Verificando acceso para: ${tipoUsuario} ---`);

    if (enMantenimiento) {
        console.log("ALERTA: Servidor en Mantenimiento. Acceso denegado a todos.");
        return 0;
    }

    let limite = 0;

    if (tipoUsuario === "Premium") {
        limite = 1000;
        console.log(`Usuario Premium detectado. Límite: ${limite} req/s.`);
    } 
    else if (tipoUsuario === "Standard") {
        limite = 100;
        console.log(`Usuario Standard detectado. Límite: ${limite} req/s.`);
    } 
    else {
        limite = 0;
        console.log("Tipo de usuario desconocido. Límite denegado.");
    }

    return limite;
}

obtenerLimitePeticiones("Premium", false);
obtenerLimitePeticiones("Standard", false); 
obtenerLimitePeticiones("Premium", true);