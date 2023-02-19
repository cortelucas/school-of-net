list: tuple[int] = [2, 4, 6, 8, 10]
names: tuple[str] = ["Lucas", "Leonardo", "Andressa", "Sonia", "Luiz", "Antonio"]

# percorre lista de numeros
for number in list:
  if number < 10:
    print(f'Number: 0{number}')
  else:
    print(f'Number: {number}')

print("---" * 4)

# percorre lista de strings
for name in names:
  print(name)