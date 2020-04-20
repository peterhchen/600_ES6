// ES6
let dispColor = function (msg, ...colors) {
    console.log ('argument.length:', arguments.length)
    console.log ('msg', msg)
    console.log ('colors:', colors)
    for (let i in colors) {
        console.log (colors[i])
    }
}

console.log ('ES6:')
let message = 'List of colors:'
let colorArray = ['Orange', 'Yellow', 'Indigo']
dispColor (message, ...colorArray)
