FROM node:11
RUN  useradd -m app-user \
  && apt-get update \
  # Install latest chrome dev package, which installs the necessary libs to
  # make the bundled version of Chromium that Puppeteer installs work.
  && apt-get install -y wget --no-install-recommends \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-unstable --no-install-recommends \
  && rm -rf /var/lib/apt/lists/* \
  && npm install -g typescript

USER app-user
WORKDIR /home/app-user
RUN  mkdir -p app/src

COPY package.json package-lock.json tsconfig.json app/
COPY src app/src/
WORKDIR app
RUN npm i && \
  npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]