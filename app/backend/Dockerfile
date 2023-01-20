FROM node:16.14-alpine

WORKDIR /app-backend

COPY package* ./

EXPOSE 3000

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]

CMD [ "start" ]

# FROM node:16.14-alpine

# WORKDIR /app-backend

# COPY . /app-backend/

# RUN npm install

# EXPOSE 3001

# CMD ["npm", "start"]