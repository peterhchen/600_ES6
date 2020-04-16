// ES5
let dispColor = function () {
    console.log ('message:', message)
    for (let i in arguments) {
        console.log (arguments[i])
    }
}

let message = 'List of colors:'
console.log ('ES5')
dispColor (message, 'Red')
dispColor (message,'Red', 'Blue')
dispColor (message,'Red', 'Blue', 'Green')

// ES6
let dispColor2 = function (msg, ...colors) {
    console.log ('argument.length:', arguments.length)
    console.log ('msg', msg)
    console.log ('colors:', colors)
    for (let i in colors) {
        console.log (colors[i])
    }
}

console.log ('ES6:')
let message2 = 'List of colors:'
dispColor2 (message, 'Red')
dispColor2 (message,'Red', 'Blue')
dispColor2 (message,'Red', 'Blue', 'Green')