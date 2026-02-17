def validador_diagnostico(token):
    print(f"--- Analizando: {token} ---")
    
    print(f"1. Longitud: {len(token)}")
    
    numeros_encontrados = []
    for i, caracter in enumerate(token):
        if caracter.isdigit():
            numeros_encontrados.append(caracter)
            print(f"   [Posición {i}]: '{caracter}' es un NÚMERO.")
        else:
            pass 

    if len(numeros_encontrados) > 0:
        print(f"Se encontraron {len(numeros_encontrados)} números: {numeros_encontrados}")
        return True
    else:
        print("El bucle terminó y NO detectó ningún número.")
        return False

validador_diagnostico("TOKEN_SEGURO_2024")