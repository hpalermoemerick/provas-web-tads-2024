cidades = ''

with open("cidades.txt", "r") as f:
    for line in f:
        cidade = line.strip().split()
        cidade = " ".join(cidade[1:])
        print(cidade)

print(cidades)