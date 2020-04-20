"use strict";
// ES6
var dispColor = function (msg) {
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
var message = 'List of colors:';
var colorArray = ['Orange', 'Yellow', 'Indigo'];
dispColor.apply(void 0, [message].concat(colorArray));
//# sourceMappingURL=14_spread_oper.js.map