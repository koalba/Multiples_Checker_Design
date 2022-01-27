'use strict'

function checkNumber () {
    let inputValue = document.querySelector('.main__input').value

    if(inputValue !== ""){
        isItEven(inputValue)
        threeMultiple(inputValue)
        sevenMultiple(inputValue)

        console.log("The number " + inputValue + " is:")
        console.log("   - " + isItEven(inputValue))
        console.log("   - " + threeMultiple(inputValue))
        console.log("   - " + sevenMultiple(inputValue))
    }

}

function isItEven(number) {
    let node = document.querySelector('.even')
    const calc = number % 2

    if(calc !== 0){
        node.classList.remove('active')
        return "NOT EVEN"
    } else{
        node.classList.add('active')
        return "EVEN"
    }
}

function threeMultiple(number) {
    let node = document.querySelector('.multThree')
    const calc = number % 3

    if(calc !== 0){
        node.classList.remove('active')
        return "NOT MULTIPLE OF 3"
    } else{
        node.classList.add('active')
        return "MULTIPLE OF 3"
    }
}

function sevenMultiple(number) {
    let node = document.querySelector('.multSeven')
    const calc = number % 7

    if(calc !== 0){
        node.classList.remove('active')
        return "NOT MULTIPLE OF 7"
    } else{
        node.classList.add('active')
        return "MULTIPLE OF 7"
    }
}