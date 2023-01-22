hello_world: str = 'hello world'
print('hello')

# \n pula linha
print('hello \nworld')

# concatenação/ interpolação de strings
print('lucas ' + hello_world)
print('lucas {}'.format(hello_world))
print(f'lucas {hello_world}')

# acesso da string como array
print(hello_world[0])
print(hello_world[2])
print(hello_world[1])
print(hello_world[0:2])
print(hello_world[3:5])