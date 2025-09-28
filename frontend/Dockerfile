FROM node:20-alpine
WORKDIR /frontend
COPY . . 
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]