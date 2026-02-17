def decimal_a_binario_manual(n):
    if n == 0:
        return "0"
    
    residuos = ""
    numero = int(n)
    
    while numero > 0:
        residuo = numero % 2          
        residuos = str(residuo) + residuos 
        numero = numero // 2          
        
    return residuos

def decimal_a_hexadecimal_manual(n):
    if n == 0:
        return "0"
    
    digitos_hex = "0123456789ABCDEF"
    resultado_hex = ""
    numero = int(n)
    
    while numero > 0:
        residuo = numero % 16
        caracter = digitos_hex[residuo]
        resultado_hex = caracter + resultado_hex
        numero = numero // 16
        
    return resultado_hex

numero_test = 255

binario = decimal_a_binario_manual(numero_test)
hexadecimal = decimal_a_hexadecimal_manual(numero_test)

print(f"Número Decimal: {numero_test}")
print(f"Representación Binaria: {binario}")
print(f"Representación Hexadecimal: {hexadecimal}")