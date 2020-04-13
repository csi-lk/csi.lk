# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.3.3](https://github.com/csi-lk/csi.lk/compare/v2.3.2...v2.3.3) (2020-04-13)

### [2.3.2](https://github.com/csi-lk/csi.lk/compare/v2.3.1...v2.3.2) (2020-04-13)


### Bug Fixes

* **big-text:** content should be children not a prop ([aa14f9a](https://github.com/csi-lk/csi.lk/commit/aa14f9a4e55cf63d7383432dace78c0208a1c275))
* **silk:** createElement should also be default export ([3341ea3](https://github.com/csi-lk/csi.lk/commit/3341ea358980889608ddb3ca2d9c4438115f912a))
* **small-text:** content should be children not a prop ([fd2872f](https://github.com/csi-lk/csi.lk/commit/fd2872f7c060c00e3a0774221d030c2c904a3e77))
* shortcodes should have content passed as children ([dc967d5](https://github.com/csi-lk/csi.lk/commit/dc967d55971406e8842e3b4554d90cc3172a1a32))

### [2.3.1](https://github.com/csi-lk/csi.lk/compare/v2.3.0...v2.3.1) (2020-04-11)


### Bug Fixes

* **navigation:** articles link not pointing to root ([3eb0623](https://github.com/csi-lk/csi.lk/commit/3eb06233d0e56fcba7913e446f6ac0ab14249956))

## [2.3.0](https://github.com/csi-lk/csi.lk/compare/v2.2.0...v2.3.0) (2020-04-09)


### Features

* **article:** show post date and link to markdown source for each article ([0ac810b](https://github.com/csi-lk/csi.lk/commit/0ac810b516396fc9547323e85a8908327fb44bc9))
* **article-list:** show post date for each article and sort them by date ([084b509](https://github.com/csi-lk/csi.lk/commit/084b50976d694b4004bd6c95f7bab069ac64daa4))
* **time:** added new simple time component ([41114bb](https://github.com/csi-lk/csi.lk/commit/41114bbcb3c1e3e310e8156ecb3f31e184b3a14c))

## [2.2.0](https://github.com/csi-lk/csi.lk/compare/v2.1.0...v2.2.0) (2020-04-08)


### Features

* **navigation:** increased spacing and added articles link ([2628c42](https://github.com/csi-lk/csi.lk/commit/2628c42cd43769c79fd98493ac1d918c1a9e4b0c))


### Bug Fixes

* **footer:** small fix to footer to increase specificity and spacing ([74668da](https://github.com/csi-lk/csi.lk/commit/74668dadf21ca798a838f46c06aaed25ab6c97e2))

## [2.1.0](https://github.com/csi-lk/csi.lk/compare/v2.0.0...v2.1.0) (2020-04-08)


### Features

* **article:** add article layout ([ec9d75b](https://github.com/csi-lk/csi.lk/commit/ec9d75b47d7a9e1ee01c8b92e7e47bb580da8074))
* **header:** add <meta> keywords tag for articles ([fa622d9](https://github.com/csi-lk/csi.lk/commit/fa622d97732d420c1db29a66e8d3a21727f3541a))
* **home:** use new keywords meta ([187c85c](https://github.com/csi-lk/csi.lk/commit/187c85c8e08e4d5137929590bb66a00a2fde5a51))

## 2.0.0 (2020-04-08)


### Features

* **article-list:** add new article list layout with /articles.html page ([2ee7c8e](https://github.com/csi-lk/csi.lk/commit/2ee7c8eda16643ef057d82d5235c4660a820fbc8))
* **index:** use small text shortcode and update text to be clearer ([250c756](https://github.com/csi-lk/csi.lk/commit/250c756cff18f68392ec7a19be8bbecd928f50af))
* **small-text:** added small text component with styles ([a56cba9](https://github.com/csi-lk/csi.lk/commit/a56cba982589e1c133250c8d9663b5b2be53561d))
* add big text markdown shortcode and a bit of styling across the board ([a558c9d](https://github.com/csi-lk/csi.lk/commit/a558c9d1af00aef17a9c742f56cd15bd4133f0e2))
* external links now have classname and open blank by default, changed working on terminal css icon ([f707e01](https://github.com/csi-lk/csi.lk/commit/f707e014b37fb65233c83e4692792b925236d047))
* move head to header component, add fixed vs fluid styling for page container ([f1fbd90](https://github.com/csi-lk/csi.lk/commit/f1fbd9068963d911d304d8ab14bed59d09a85ac3))
* **footer:** added fixed prop and some simple css ([4b6fcb1](https://github.com/csi-lk/csi.lk/commit/4b6fcb1edc36508b3f4f028acf7f8e645cff6102))
* **header:** created global header component ([4c83499](https://github.com/csi-lk/csi.lk/commit/4c834992b1940c4fbe453468209177f6b74b9ab1))
* **home:** use new types and the new header ([6b31c7e](https://github.com/csi-lk/csi.lk/commit/6b31c7e391d48d0bb0ac66cb141863bebc7fac9d))
* **index:** update index copy and include header in layout ([dfaddb9](https://github.com/csi-lk/csi.lk/commit/dfaddb9e68c59d2661b8909dd40679ccf89be8eb))
* **navigation:** created navigation component ([6cd3907](https://github.com/csi-lk/csi.lk/commit/6cd3907d62a249bd9ac06a1c115f293f7a286577))
* **page-container:** added page container component ([cf6753e](https://github.com/csi-lk/csi.lk/commit/cf6753ea33b9733939cf491d9405f17d3c6bd303))
* **repo:** move buildtool from scss to postcss and components into individual folders ([5217dcf](https://github.com/csi-lk/csi.lk/commit/5217dcf5dc18bbb452f4e306ea63d84a460741d5))
* **repo:** now using tsx with my own super simple jsxFactory that i've named 'silk ([0000d59](https://github.com/csi-lk/csi.lk/commit/0000d59a1bd360a84a9e89966230da2f49e1fac5))
* **repo:** switched to using 11ty for SSG ([d6c500f](https://github.com/csi-lk/csi.lk/commit/d6c500f5650ed787a7cc3907c4a94545c370172a))
* **site-data:** added all fallback site data ([3021606](https://github.com/csi-lk/csi.lk/commit/3021606979844d4fe3b5be4f3f47c58ee7b9def3))


### Bug Fixes

* **eleventy:** removed header, build fails without it ([125f98a](https://github.com/csi-lk/csi.lk/commit/125f98aec17a8c2ecdf38e824c159acd1f86e69b))
* **navigation:** add silk jsx to be in scope ([a1d38b6](https://github.com/csi-lk/csi.lk/commit/a1d38b6fcd0149db096ecfb7541e77fdd4e2944b))
* **page-container:** no longer rely on body, update fixed vs fluid styling ([a8560df](https://github.com/csi-lk/csi.lk/commit/a8560dfbf76bff3416d003a05827b6ec5097cddb))
* **small-text:** should be p instead of span ([1b8cf7f](https://github.com/csi-lk/csi.lk/commit/1b8cf7f0898aed4dcc500746986265dc0f0a676d))
