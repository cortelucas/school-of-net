const numberOne = 10
const numberTwo = 0
const operation = '/'

switch (operation) {
    case '+':
        console.log(numberOne + numberTwo)
        break
    case '-':
        console.log(numberOne - numberTwo)
        break
    case '*':
        console.log(numberOne * numberTwo)
        break
    case '/':
        console.log(numberTwo === 0 ? 'Cannot divide by zero' : numberOne / numberTwo)
        break
    default:
        console.log('Invalid operation')
}
