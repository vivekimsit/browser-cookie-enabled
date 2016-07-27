'use strict';
const cacheEnabled = require('../');

function changeText(arg) {
  document.querySelector('div').textContent = JSON.stringify(arg);
}

cacheEnabled()
  .then(res => {
    changeText(res);
  })
.catch(err => console.error(err));
