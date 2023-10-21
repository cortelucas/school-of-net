let i = 0
let str = ''

do {
    if (i <= 3) {
        console.log(`I less than 5`)
    } else {
        str += `${i}, `
    }
    i++
} while (i <= 5)

// while (i <= 5) {
// 	if (i <= 3) {
// 		console.log('Is less than 5')
// 	} else {
// 		str += i
// 	}
// 	i++
// }

console.log(str)
