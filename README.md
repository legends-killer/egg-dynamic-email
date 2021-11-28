# egg-dynamic-email

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-dynamic-email.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-dynamic-email
[travis-image]: https://img.shields.io/travis/eggjs/egg-dynamic-email.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-dynamic-email
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-dynamic-email.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-dynamic-email?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-dynamic-email.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-dynamic-email
[snyk-image]: https://snyk.io/test/npm/egg-dynamic-email/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-dynamic-email
[download-image]: https://img.shields.io/npm/dm/egg-dynamic-email.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-dynamic-email

<!--
Description here.
-->

## Install

```bash
$ npm i egg-dynamic-email --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.eggDynamicEmail = {
  enable: true,
  package: 'egg-dynamic-email',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.eggDynamicEmail = {
  user: '',
  password: '',
  host: '',
  sender: '',
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
// {app_root}/app/controller/home.js
 async index() {
   const { ctx } = this
   const res = await ctx.app.email.sendEmail('title','content','receiver', [{data: 'html content', alternative: true}])
 }
```
## Questions & Suggestions

Please open an issue [here](https://github.com/legends-killer/egg-dynamic-email/issues).

## License

[MIT](LICENSE)
