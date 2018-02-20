# Callum Silcock's website (csi.lk)

Built with:

* [Gatsby](https://www.gatsbyjs.org/)
* [Netlify CMS](https://www.netlifycms.org)
* Based off the [Gatsby Netlify Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

Using [JAMstack architecture](https://jamstack.org)

## 💻 Requirements

* Node v8+
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## ⬇️ Installation

Clone this repo and install dependencies

```bash
git clone git@github.com:csi-lk/csi.lk.git
```

```bash
npm install
```

## 🔥 Development

Running `start` will start Gatsby and spin up a local server for you to use

```bash
npm start
```

## 🛂 Testing

### Unit tests

Are run using [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme)

```bash
npm test
```

Or to update the snapshots

```bash
npm run test:update
```

## 💾 Scripts

```bash
Script          Usage                                     Description

help            npm run help                              Outputs descriptions for each npm script

start           npm start                                 Starts a local live-reload server running
                npm run start                             Gatbsy (runs develop)

build           npm run build                             Builds files using Gatsby

develop         npm run develop                           Starts a local live-reload server running
                                                          Gatbsy

serve           npm run serve                             Runs Gatsby in serve mode

test            npm test                                  Jest tests with coverage report
                npm run test

test:update     npm run test:update                       Jest tests but updates snapshots

lint            npm run lint                              Runs all linters

lint:js         npm run lint:js                           Javascript linter eslint

lint:js:fix     npm run lint:js:fix                       Javascript linter eslint in fix mode
```