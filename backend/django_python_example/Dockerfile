#Usando uma imagem base oficial do Python
FROM python:3.12

# Define o diretório de trabalho
WORKDIR /app

# Copia o arquivo requirements.txt
COPY requirements.txt /app/

# Instala as dependências do projeto
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código do projeto para o container
COPY . /app/

# Expõe a porta 8000
EXPOSE 8000

# Comando para iniciar o servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
