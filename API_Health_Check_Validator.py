def Health_Check_Validator(latencia, uso_cpu, estado_bd):
    return latencia < 200 and uso_cpu < 80 and estado_bd == True
print(f"Servicio A (Fino): {Health_Check_Validator(150, 50, True)}")
print(f"Servicio B (Se queda pegao): {Health_Check_Validator(250, 30, True)}")
print(f"Servicio C (Esa vaina no sirve): {Health_Check_Validator(50, 10, False)}")