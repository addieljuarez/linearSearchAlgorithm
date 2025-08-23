



const linearSearch = (array, x) => {
    
    const lengthArray = array.length
    console.log('lengthArray', lengthArray)

    for(let i=0; i<lengthArray; i++){
        console.log(array[i])
        if(array[i] == x){
            
            return i
        }
    }

    return -1
}

const linearSearchWhile = () => {
    
}


const x = 20
const array = [34, 45, 29, 30, 20, 18, 232, 63]

console.time('timeFor')
const result = linearSearch(array, x)
console.log('the result is index:',result)
console.timeEnd('timeFor')

