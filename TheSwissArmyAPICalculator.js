const readline = require('readline');

// Configuración de la interfaz de entrada/salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Genera el n-ésimo número de Fibonacci (Iterativo)
 */
function calcularFibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

/**
 * Convierte un número a Binario y Hexadecimal
 */
function convertirBases(valor) {
    const entero = parseInt(valor);
    if (isNaN(entero)) return null;
    return {
        binario: entero.toString(2),
        hexadecimal: entero.toString(16).toUpperCase()
    };
}

/**
 * Función auxiliar para preguntar algo al usuario (Retorna una Promesa)
 */
const preguntar = (pregunta) => new Promise((resolve) => rl.question(pregunta, resolve));

/**
 * Menú Principal e Interacción
 */
async function ejecutarCalculadora() {
    let ultimoResultado = null;

    while (true) {
        console.log("\n--- Swiss Army API Calculator (JS) ---");
        console.log("1. Suma | 2. Resta | 3. Multiplicación | 4. División");
        console.log("5. Fibonacci | 6. Conversión de Bases | 7. Salir");

        const opcion = await preguntar("\nSeleccione una opción: ");

        if (opcion === '7') {
            console.log("Saliendo del sistema...");
            rl.close();
            break;
        }

        if (['1', '2', '3', '4'].includes(opcion)) {
            const n1 = parseFloat(await preguntar("Primer número: "));
            const n2 = parseFloat(await preguntar("Segundo número: "));

            if (isNaN(n1) || isNaN(n2)) {
                console.log(" Error: Ingrese valores numéricos válidos.");
                continue;
            }

            if (opcion === '1') ultimoResultado = n1 + n2;
            else if (opcion === '2') ultimoResultado = n1 - n2;
            else if (opcion === '3') ultimoResultado = n1 * n2;
            else if (opcion === '4') {
                if (n2 === 0) {
                    console.log(" Error: División por cero.");
                    continue;
                }
                ultimoResultado = n1 / n2;
            }
            console.log(` Resultado: ${ultimoResultado}`);
        } 
        else if (opcion === '5') {
            const n = parseInt(await preguntar("Posición en Fibonacci: "));
            if (isNaN(n)) {
                console.log(" Error: Ingrese un número entero.");
                continue;
            }
            ultimoResultado = calcularFibonacci(n);
            console.log(` Fibonacci(${n}): ${ultimoResultado}`);
        } 
        else if (opcion === '6') {
            let valorAConvertir = ultimoResultado;
            if (valorAConvertir === null) {
                valorAConvertir = parseFloat(await preguntar("No hay resultado previo. Ingrese número: "));
            }

            const bases = convertirBases(valorAConvertir);
            if (bases) {
                console.log(` Decimal: ${Math.floor(valorAConvertir)}`);
                console.log(`   Binario: 0b${bases.binario}`);
                console.log(`   Hexadecimal: 0x${bases.hexadecimal}`);
            } else {
                console.log("Error al convertir.");
            }
        } 
        else {
            console.log("Opción no válida.");
        }
    }
}

ejecutarCalculadora();