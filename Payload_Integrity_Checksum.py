def verificar_integridad_mensaje(mensaje):
    suma_ascii = 0
    
    for caracter in mensaje:
        valor_numerico = ord(caracter)
        suma_ascii += valor_numerico

    es_par = (suma_ascii % 2 == 0)
    
    print(f"\n--- Reporte de Integridad ---")
    print(f"Mensaje: '{mensaje}'")
    print(f"Suma Total ASCII: {suma_ascii}")
    
    if es_par:
        print("Resultado: Paquete Íntegro (Suma Par)")
    else:
        print("Resultado: Paquete Corrupto o Alterado (Suma Impar)")
        
    return es_par

verificar_integridad_mensaje("API_OK")
verificar_integridad_mensaje("API_ERR")