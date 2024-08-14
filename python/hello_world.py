"""
Testando o python
"""

# Para executar o código, basta digitar no terminal:
# python3 hello_world.py

print("Hello World")

x = 1
y = 10

if x > y:
    print("x: {x} é maior que y: {y}")
else:
    print("y: {y} é maior que x: {x}")

arr = [1, 2, 3, 4, 5]

for i in arr:
    print(i)

for i in range(10):
    print(i)    

class Dog:
    def __init__(self, name):
        self.name = name

    def bark(self):
        print("Au Au")