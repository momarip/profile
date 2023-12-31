#Stage 1
FROM node:18-alpine
WORKDIR /frontend
COPY package*.json ./
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD yarn dev
