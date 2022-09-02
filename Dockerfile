# Build Environment: Node + Playwright
FROM node:16
FROM mcr.microsoft.com/playwright:focal 


# Env
WORKDIR /usr/app
ENV PATH /app/node_modules/.bin:$PATH

# Export port 8081 for Node 

# USER node

EXPOSE 8081

# Copy all app files into Docker Work directory

COPY --chown=node:node . . 


COPY package*.json ./usr/app/

COPY . . 
#COPY *.js ./
# COPY index.js /usr/app/
# COPY bet365-dados-2.js/ /usr/app/
# COPY botTelegram.js/ /usr/app/
# COPY estrategia.js/ /usr/app/

#COPY tsconfig.json /app/
#RUN xvfb-run bet365-dados-2
# Install Deps
RUN npm install
# If you are building your code for production
#RUN PLAYWRIGHT_BROWSERS_PATH=./ms-playwright npx playwright install --with-deps

# RUN npm ci --only=production

# Build TS into JS to run via Node
# RUN npm run build

# Run Node index.js file
CMD [ "npm", "start" ]