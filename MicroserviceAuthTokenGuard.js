function validarTokenSeguridad(token) {
    console.log(`\n--- Analizando Token: "${token}" ---`);

    if (token.length < 12) {
        console.log(`Fallo: Longitud insuficiente (${token.length} caracteres).`);
        return false;
    }
    console.log("Regla 1: Longitud válida.");

    if (token.startsWith("TEST")) {
        console.log("Fallo: El token no puede iniciar con 'TEST'.");
        return false;
    }
    console.log("Regla 2: Prefijo permitido.");

    const tieneNumero = /\d/.test(token);
    if (!tieneNumero) {
        console.log("Fallo: No se encontraron números en el string.");
        return false;
    }
    console.log("Regla 3: Contiene al menos un número.");

    console.log("RESULTADO: Token íntegro y aceptado.");
    return true;
}
validarTokenSeguridad("TOKEN_SEGURO_2026");
validarTokenSeguridad("TEST_TOKEN_123");
validarTokenSeguridad("TOKEN_SIN_NUMEROS");