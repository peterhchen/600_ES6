"use strict";
// ES5
var dispColor = function () {
    console.log('message:', message);
    for (var i in arguments) {
        console.log(arguments[i]);
    }
};
var message = 'List of colors:';
console.log('ES5');
dispColor(message, 'Red');
dispColor(message, 'Red', 'Blue');
dispColor(message, 'Red', 'Blue', 'Green');
// ES6
var dispColor2 = function (msg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log('argument.length:', arguments.length);
    console.log('msg', msg);
    console.log('colors:', colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
console.log('ES6:');
var message2 = 'List of colors:';
dispColor2(message, 'Red');
dispColor2(message, 'Red', 'Blue');
dispColor2(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=13_rest_oper.js.map