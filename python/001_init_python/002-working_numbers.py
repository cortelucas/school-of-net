def add(x: float, y: float) -> float:
    return x + y


def subtract(x: float, y: float) -> float:
    return x - y


def multiply(x: float, y: float) -> float:
    return x * y


def divide(x: float, y: float) -> float | str:
    if y == 0:
        return "Não pode ser divido por zero"
    else:
        return x / y


print(
    f"""
      Soma: {add(2, 1)}
      Subtração: {subtract(2,1)}
      Multiplicação: {multiply(2,1)}
      Divisão: {divide(2,1)}
      Divisão por zero: {divide(2,0)}
      """
)
