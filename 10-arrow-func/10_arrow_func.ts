var getValue = function () {
    return 10
}

console.log ('regular function: ', getValue())

const getArrowValue = () => {
    return 10
}

console.log ('arrow function: ', getArrowValue())

const getArrowValue2 = (m) => {
    return 10 * m
}

console.log ('arrow function 2: ', getArrowValue2(5))