'use strict'

const d = document

function checkNumber () {

    const inputValue = d.querySelector('.main__input').value

    if(inputValue !== ""){

        calcMultiple( inputValue, 2 )
        calcMultiple( inputValue, 3 )
        calcMultiple( inputValue, 7 )
        
    }

}

function calcMultiple( number, multiple ){

    const calc = number % multiple

    let node

    switch (multiple) {
        case 2:
        node = d.querySelector('.even')
            break
        case 3:
        node = d.querySelector('.multThree')
            break
        case 7:
        node = d.querySelector('.multSeven')
            break
    }
    
    calc === 0 ? node.classList.add('active') : node.classList.remove('active')
    
}
