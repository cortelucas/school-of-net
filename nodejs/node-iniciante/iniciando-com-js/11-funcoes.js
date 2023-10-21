/**
 * Calculate the square of a given number.
 *
 * @param {number} number - The number to be squared.
 * @return {number} The square of the given number.
 */
function square(number) {
    return number * number
}

/**
 * Logs a greeting message with the provided name.
 *
 * @param {string} name - The name to include in the greeting message.
 * @return {void} This function does not return a value.
 */
function sayHello(name) {
    console.log(`Hello ${name}`)
}

// returns squares
console.log({
    1: `Quadrado de 1: ${square(1)}`,
    2: `Quadrado de 2: ${square(2)}`,
    3: `Quadrado de 3: ${square(3)}`
})

// returns Hello Lucas
sayHello('Lucas')
