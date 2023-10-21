const name = 'Alessandra'
const lastName = 'Doe'

const fullNameTemplate = `${name} ${lastName}`
const fullNameConcatFunction = name.concat(' ').concat(lastName)
const fullNameConcatPlus = name + ' ' + lastName

const message = {
    fullNameTemplate: {
        operation: "${name} ${lastName}",
        result: fullNameTemplate
    },
    fullNameConcatFunction: {
        operation: "name.concat(' ').concat(lastName)",
        result: fullNameConcatFunction
    },
    fullNameConcatPlus: {
        operation: "name + ' ' + lastName",
        result: fullNameConcatPlus
    }
}

console.log(message)
