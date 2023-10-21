/**
 * @type {number}
 */
const number = 10

const message = {
    int: {
        value: parseInt(number),
        type: typeof number
    },
    float: {
        value: parseFloat(number),
        type: typeof number
    },
    random: {
        operation: "Math.random()",
        result: Math.random()
    },
    floor: {
        operation: "Math.floor(number)",
        result: Math.floor(number)
    },
    ceil: {
        operation: "Math.ceil(number)",
        result: Math.ceil(number)
    },
    round: {
        operation: "Math.round(number)",
        result: Math.round(number)
    },
    abs: {
        operation: "Math.abs(number)",
        result: Math.abs(number)
    },
    sign: {
        operation: "Math.sign(number)",
        result: Math.sign(number)
    },
    trunc: {
        operation: "Math.trunc(number)",
        result: Math.trunc(number)
    },
    pow: {
        operation: "Math.pow(number, 2)",
        result: Math.pow(number, 2)
    },
    sqrt: {
        operation: "Math.sqrt(number)",
        result: Math.sqrt(number)
    },
    cbrt: {
        operation: "Math.cbrt(number)",
        result: Math.cbrt(number)
    },
    min: {
        operation: "Math.min(1, 2)",
        result: Math.min(1, 2)
    },
    max: {
        operation: "Math.max(1, 2)",
        result: Math.max(1, 2)
    },
    randomInt: {
        operation: "Math.floor(Math.random() * 10)",
        result: Math.floor(Math.random() * 10)
    },
    randomFloat: {
        operation: "Math.random() * 10",
        result: Math.random() * 10
    }
}

console.log(message)
