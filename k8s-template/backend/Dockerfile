FROM node:20-alpine
WORKDIR /cedille
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]