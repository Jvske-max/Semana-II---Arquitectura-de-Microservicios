import math

def verificar_proximidad_nodos(x1, y1, x2, y2):
    distancia = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
    
    print(f"La distancia calculada es: {distancia:.2f} unidades")
    
    return distancia < 10

print(f"Nodos Cerca: {verificar_proximidad_nodos(0, 0, 3, 4)}")  
print(f"Nodos Lejos: {verificar_proximidad_nodos(0, 0, 10, 10)}") 