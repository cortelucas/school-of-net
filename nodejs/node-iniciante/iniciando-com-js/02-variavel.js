/**
 * @type {string}
 */
var name = 'John Doe'
/**
 * @type {number}
 */
var age = 30
/**
 * @type {number}
 */
var height = 1.83
/**
 * @type {boolean}
 */
var isMarried = true
/**
 * @type {undefined}
 */
var gender = undefined
/**
 * @type {null}
 */
var salary = null

/**
 * @type {object}
 * @property {string} name
 * @property {number} age
 * @property {number} height
 * @property {boolean} isMarried
 * @property {undefined} gender
 * @property {null} salary
 * @property {string} type
 * @property {number} value
 * @returns {object}
 * */
const message = {
    name: {
        value: name,
        type: typeof name
    },
    age: {
        value: age,
        type: typeof age
    },
    height: {
        value: height,
        type: typeof height
    },
    isMarried: {
        value: isMarried,
        type: typeof isMarried
    },
    gender: {
        value: gender,
        type: typeof gender
    },
    salary: {
        value: salary,
        type: typeof salary
    }
}

console.log(message)
