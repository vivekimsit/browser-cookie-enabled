/* global navigator */
'use strict';

module.exports = () => {
  if (!navigator) {
    return Promise.reject(new Error('Browser not supported'));
  }

  return Promise.resolve(navigator.cookieEnabled);
};
