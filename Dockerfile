# base node image
FROM node:14.18.1-alpine

# set the current working directory
WORKDIR /usr/src/app

# set environment variables
ENV HOST 0.0.0.0
ENV PORT 8080

# copy both 'package.json' and 'yarn.lock'
COPY package.json ./
COPY yarn.lock ./

# install production dependencies
RUN yarn

# copy local code to the container image
COPY . ./

# build strapi
RUN yarn build

# make the container port accessible externally
EXPOSE 8080

# run the web service on container startup
CMD [ "yarn", "start" ]