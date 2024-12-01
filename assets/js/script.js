//Parte 1
const arbol = document.querySelector('.arb')

arbol.addEventListener('click', () => {
    if (arbol.style.border) {
        arbol.style.border = ''
    }
    else {
        arbol.style.border = '3px solid blue'
        arbol.style.borderRadius = '53px'
    }
})

//Parte 2
const cantidad1 = document.getElementById('cantidad1')
const cantidad2 = document.getElementById('cantidad2')
const cantidad3 = document.getElementById('cantidad3')
const boton1 = document.querySelector('#boton1')
const par1 = document.querySelector('#par1')


boton1.addEventListener('click', () => {
    const cantidadTotal = Number(cantidad1.value) + Number(cantidad2.value) + Number(cantidad3.value)
    if (Number(cantidadTotal) <= 10) {
        par1.innerHTML = `Llevas ${cantidadTotal} stickers`
    }
    else {
        par1.innerHTML = "Superaste la cantidad"
    }
})

//Parte 3
const numero1 = document.getElementById('num1')
const numero2 = document.getElementById('num2')
const numero3 = document.getElementById('num3')
const respuesta = document.getElementById('respuesta')
const botonpass = document.getElementById('botonpass')

botonpass.addEventListener('click', () => {
    if (numero1.value == 9 && numero2.value == 1 && numero3.value == 1) {
        respuesta.innerHTML = 'Password correcto 1'
    } else if (numero1.value == 7 && numero2.value == 1 && numero3.value == 4) {
        respuesta.innerHTML = 'Password correcto 2'
    } else {
        respuesta.innerHTML = 'Password incorrecto'
    }
})


