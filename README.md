# browser-cookie-enabled [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

> Get the cookie setting of browser


## Usage

```js
const cacheEnabled = require('browser-cookie-enabled');

cacheEnabled().then(res => {
  console.log(res); // (true|false)
})
.catch(err => console.error(err));
```

## License

MIT © [Vivek Poddar](http://github.com/vivekimsit)
