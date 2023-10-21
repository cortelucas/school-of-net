let numberOne = 10
let numberTwo = 20

const message = {
    arithmetics: {
        sum: {
            operation: "numberOne + numberTwo",
            result: numberOne + numberTwo
        },
        sub: {
            operation: "numberOne - numberTwo",
            result: numberOne - numberTwo
        },
        mult: {
            operation: "numberOne * numberTwo",
            result: numberOne * numberTwo
        },
        div: {
            operation: "numberOne / numberTwo",
            result: numberOne / numberTwo
        }
    },
    comparison: {
        greater: {
            operation: "numberOne > numberTwo",
            result: numberOne > numberTwo
        },
        less: {
            operation: "numberOne < numberTwo",
            result: numberOne < numberTwo
        },
        equal: {
            operation: "numberOne === numberTwo",
            result: numberOne === numberTwo
        },
        notEqual: {
            operation: "numberOne !== numberTwo",
            result: numberOne !== numberTwo
        },
        greaterOrEqual: {
            operation: "numberOne >= numberTwo",
            result: numberOne >= numberTwo
        },
        lessOrEqual: {
            operation: "numberOne <= numberTwo",
            result: numberOne <= numberTwo
        }
    },
    logical: {
        and: {
            operation: "numberOne && numberTwo",
            result: numberOne && numberTwo
        },
        or: {
            operation: "numberOne || numberTwo",
            result: numberOne || numberTwo
        },
        not: {
            operation: "!numberOne",
            result: !numberOne
        },
        xor: {
            operation: "numberOne ^ numberTwo",
            result: numberOne ^ numberTwo
        }
    }
}

console.log(message)
