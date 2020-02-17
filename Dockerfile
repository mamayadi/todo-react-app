# base image
FROM node

# set working directory
WORKDIR /my-app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /my-app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /my-app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.4.0 -g --silent

# start app
CMD ["npm", "start"]