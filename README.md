# Callum Silcock's website (csi.lk)

Built with:

* [Gatsby](https://www.gatsbyjs.org/)
* [Netlify CMS](https://www.netlifycms.org)
* Based off the [Gatsby Netlify Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

Using [JAMstack architecture](https://jamstack.org)

## 💻 Requirements

* Node v8+
* [Yarn](https://yarnpkg.com)
* [Gatsby CLI](https://www.gatsbyjs.org/docs/)

## ⬇️ Installation

Clone this repo and install dependencies

```bash
git clone git@github.com:csi-lk/csi.lk.git
```

```bash
yarn install
```

## 🔥 Development

Running `start` will start Gatsby and spin up a local server for you to use

```bash
yarn start
```

## 🛂 Testing

### Unit tests

Are run using [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme)

```bash
yarn test
```

Or to update the snapshots

```bash
yarn run test:update
```

## 💾 Scripts

```bash
Script          Usage                                     Description

help            yarn run help                              Outputs descriptions for each yarn script

start           yarn start                                 Starts a local live-reload server running
                yarn run start                             Gatbsy (runs develop)

build           yarn run build                             Builds files using Gatsby

develop         yarn run develop                           Starts a local live-reload server running
                                                          Gatbsy

serve           yarn run serve                             Runs Gatsby in serve mode

test            yarn test                                  Jest tests with coverage report
                yarn run test

test:update     yarn run test:update                       Jest tests but updates snapshots

lint            yarn run lint                              Runs all linters

lint:js         yarn run lint:js                           Javascript linter eslint

lint:js:fix     yarn run lint:js:fix                       Javascript linter eslint in fix mode
```