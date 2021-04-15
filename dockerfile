FROM node:alpine
ENV NODE_ENV production
COPY . .
RUN yarn global add @nestjs/cli
RUN yarn install
RUN yarn build