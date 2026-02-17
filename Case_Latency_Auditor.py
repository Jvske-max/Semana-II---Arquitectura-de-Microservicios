def analizar_picos_latencia(tiempos, umbral_critico):
    if not tiempos:
        return False 

    promedio = sum(tiempos) / len(tiempos)
    print(f"--- Análisis de Red ---")
    print(f"Promedio actual: {promedio:.2f} ms")
    print(f"Umbral crítico: {umbral_critico} ms")

    promedio_excedido = promedio > umbral_critico

    pico_detectado = False
    for t in tiempos:
        if t >= (promedio * 3):
            pico_detectado = True
            print(f"!Pico sospechoso detectado!: {t} ms")
            break 

    disparar_alerta = promedio_excedido or pico_detectado
    
    return disparar_alerta

datos_latencia = [120, 135, 110, 450, 125, 140] 
umbral = 200

alerta_activa = analizar_picos_latencia(datos_latencia, umbral)

if alerta_activa:
    print("ALERTA: Se han detectado irregularidades en la latencia.")
else:
    print("Sistema estable: Latencia dentro de los parámetros.")