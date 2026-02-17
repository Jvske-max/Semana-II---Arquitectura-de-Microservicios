def Geometric_Topology_Microservice(a, b, c):
    if (a + b + c != 180):
        return "Error: Este triangulo no es válido"
    
    Esta_recto = (a == 90) or (b == 90) or (c == 90)
    si_lo_esta = "Rectangulo y " if Esta_recto else ""

    if a == b == c:
        return "El triangulo es equilatero"
    elif a == b or b == c or a == c:
        return f"Triangulo {si_lo_esta}Isosceles"
    else:        return f"Triangulo {si_lo_esta}Escaleno"

a = int(input("Ingresa el primer angulo: "))
b = int(input("Ingresa el segundo angulo: "))
c = int(input("Ingresa el tercer angulo: "))

resultado = Geometric_Topology_Microservice(a, b, c)
print(resultado)