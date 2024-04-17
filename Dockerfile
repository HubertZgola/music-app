FROM node:latest
WORKDIR /music-app
COPY package*.json ./
RUN npm install -g npm@10.5.2
COPY . .
RUN npm run build
CMD ["npm", "start"]