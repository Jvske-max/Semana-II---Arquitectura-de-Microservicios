def obtener_limite_peticiones(tipo_usuario, en_mantenimiento):
    
    if en_mantenimiento:
        return 0  
    if tipo_usuario == "Premium":
        return 1000
    elif tipo_usuario == "Standard":
        return 100
    else:
        print(f"Tipo de usuario '{tipo_usuario}' no reconocido. Límite mínimo aplicado.")
        return 0

print(f"Usuario Premium (Activo): {obtener_limite_peticiones('Premium', False)} req/s")
print(f"Usuario Standard (Activo): {obtener_limite_peticiones('Standard', False)} req/s")
print(f"Sistema en Mantenimiento: {obtener_limite_peticiones('Premium', True)} req/s")