# Use a imagem node:22-alpine como base
FROM node:22

# Instalar dependências do sistema operacional
RUN apt install make \
  gcc \
  g++ \
  python3 \
  bash \
  git

# Definir o diretório de trabalho
WORKDIR /home/node/multi_currency_money

# Copiar o package.json e instalar dependências
COPY package.json ./
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta que a aplicação usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "dev"]

