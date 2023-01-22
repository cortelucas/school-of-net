numbers_int: tuple[int] = [0, 2, 4, 6]
numbers_float: tuple[float] = [0.1, 2.2, 4.4, 6.6]
mix: dict[int, str, float, tuple] = [1, 4, "5", 6.3, [1, 2, 4]]

print(f"Inteiros: {numbers_int}")
print(f"Flutuantes: {numbers_float}")

# concatenação de listas
print(numbers_float + numbers_int)

print(mix)
print(mix[4][2])

# adicionando a lista
numbers_int.append(8)
print(numbers_int)

# remove da lista
numbers_int.remove(8)
del(numbers_int[0])
print(numbers_int)

# verificando se contém dados no array
print("Contém") if numbers_int.__contains__(4) else print("Não contém")
