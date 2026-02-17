def calcular_fibonacci(n):
    if n <= 0: return 0
    if n == 1: return 1
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

def convertir_bases(valor):
    try:
        entero = int(valor)
        return {
            "binario": bin(entero),
            "hexadecimal": hex(entero)
        }
    except ValueError:
        return None

def obtener_numero(mensaje):
    while True:
        try:
            return float(input(mensaje))
        except ValueError:
            print("Error: Por favor, ingrese un valor numérico válido.")

def ejecutar_calculadora():
    ultimo_resultado = None
    
    while True:
        print("\n--- Swiss Army API Calculator ---")
        print("1. Suma | 2. Resta | 3. Multiplicación | 4. División")
        print("5. Fibonacci | 6. Conversión de Bases | 7. Salir")
        
        opcion = input("\nSeleccione una opción: ")

        if opcion == '7':
            print("Saliendo del sistema...")
            break

        if opcion in ['1', '2', '3', '4']:
            n1 = obtener_numero("Primer número: ")
            n2 = obtener_numero("Segundo número: ")
            
            if opcion == '1': ultimo_resultado = n1 + n2
            elif opcion == '2': ultimo_resultado = n1 - n2
            elif opcion == '3': ultimo_resultado = n1 * n2
            elif opcion == '4':
                if n2 == 0:
                    print("Error: División por cero.")
                    continue
                ultimo_resultado = n1 / n2
            print(f"Resultado: {ultimo_resultado}")

        elif opcion == '5':
            n = int(obtener_numero("Posición en Fibonacci: "))
            ultimo_resultado = calcular_fibonacci(n)
            print(f"Fibonacci({n}): {ultimo_resultado}")

        elif opcion == '6':
            valor_a_convertir = ultimo_resultado
            if valor_a_convertir is None:
                valor_a_convertir = obtener_numero("No hay resultado previo. Ingrese número: ")
            
            bases = convertir_bases(valor_a_convertir)
            print(f"Decimal: {int(valor_a_convertir)}")
            print(f"Binario: {bases['binario']}")
            print(f"Hexadecimal: {bases['hexadecimal']}")

        else:
            print("Opción no válida.")

if __name__ == "__main__":
    ejecutar_calculadora()