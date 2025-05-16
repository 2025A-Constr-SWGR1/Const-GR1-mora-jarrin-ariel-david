FROM node:22.12
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY dist ./dist
EXPOSE 3000
CMD ["node", "dist/main.js"]
