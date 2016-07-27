(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../":2}],2:[function(require,module,exports){
/* global navigator */
'use strict';

module.exports = () => {
  if (!navigator) {
    return Promise.reject(new Error('Browser not supported'));
  }

  return Promise.resolve(navigator.cookieEnabled);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IGNhY2hlRW5hYmxlZCA9IHJlcXVpcmUoJy4uLycpO1xuXG5mdW5jdGlvbiBjaGFuZ2VUZXh0KGFyZykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYnKS50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGFyZyk7XG59XG5cbmNhY2hlRW5hYmxlZCgpXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgY2hhbmdlVGV4dChyZXMpO1xuICB9KVxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiLyogZ2xvYmFsIG5hdmlnYXRvciAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcbiAgaWYgKCFuYXZpZ2F0b3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdCcm93c2VyIG5vdCBzdXBwb3J0ZWQnKSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5hdmlnYXRvci5jb29raWVFbmFibGVkKTtcbn07XG4iXX0=
