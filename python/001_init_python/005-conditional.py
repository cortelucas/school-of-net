age: int = int(input("insira sua idade: "))

if age >= 18:
    print("Você é maior de idade")
elif age >= 16 and age < 18:
    print("Está chegando lá")
else:
    print("Muito novo")
