def calcular_espera_fibonacci(n_reintento):
    if n_reintento <= 0:
        return 0

    serie = [1, 1]

    if n_reintento <= 2:
        return serie[n_reintento - 1]

    while len(serie) < n_reintento:
        siguiente_valor = serie[-1] + serie[-2]
        serie.append(siguiente_valor)
        
    return serie[-1]

for i in range(1, 7):
    segundos = calcular_espera_fibonacci(i)
    print(f"Reintento {i}: Esperando {segundos} segundos...")