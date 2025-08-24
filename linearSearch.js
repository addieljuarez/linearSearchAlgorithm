



const linearSearchFor = (array, x) => {
    
    const lengthArray = array.length

    for(let i=0; i<lengthArray; i++){
        if(array[i] == x){
            return i
        }
    }

    return -1
}

const linearSearchWhile = () => {
    const lengthArray = array.length
    let n = 0
    while (n < array.length) {
        if(array[n] == x){
            return n
        }
        n++
    }

    return -1
}


const x = 20
const array = [34, 45, 29, 30, 20, 18, 232, 63]

console.time('timeFor')
const result = linearSearchFor(array, x)
console.log('the result is index:',result)
console.timeEnd('timeFor')


console.time('timeWhile')
const resultWhile = linearSearchWhile(array, x)
console.log('the result is index:',resultWhile)
console.timeEnd('timeWhile')

