'use strict';

const $ = require('jquery');

const sayHello = () => console.log('Hello');

sayHello();

$('.container').append().html("Hello World!").css('background-color', 'cyan');

const niceMessage = require('./say-hello.js');

niceMessage('Codeup');