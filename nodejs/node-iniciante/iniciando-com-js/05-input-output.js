const app = document.getElementById('app')

const name = prompt('Qual seu nome?')
const lastName = prompt('Qual seu sobrenome?')
const fullName = `${name} ${lastName}`

const h1 = document.createElement('h1')
const br = document.createElement('br')
h1.innerText = 'Input e Output'
app.appendChild(h1)
app.appendChild(br)

const div = document.createElement('div')
div.className = 'card'
div.innerText = `Seu nome é ${fullName}`
app.appendChild(div)


console.log(`Seu nome é ${fullName}`)
console.warn(`Seu nome é ${fullName}`)
console.error(`Seu nome é ${fullName}`)

console.timeEnd()