/*
let num = 16;
if (num>10) {
    console.log("num es mayor a 10")
} else if (num<10) {
    console.log("num es menor a 10")
} else {
    console.log("num es igual a 10")
}
if (num<=20 && num>10) {
    console.log("el numero esta entre 10 y 20")
} else if (num>20) {
    console.log("el numero es mayor a 20")
} else {
    console.log("el numero es menor que 10")
}*/

/*let edad = 18;
let tutor = false;
if(edad >= 18) {
    console.log("puede pasar");
}else if(tutor===true) {
    console.log("puede pasar");
}else {
    console.log("no podes pasar");
}*/

//ejercicio 6

/*let num1 = prompt ("Ingresa un numero")
let num2 = prompt ("Ingresa otro numero")
let res = parseInt(num1) + parseInt(num2) 
console.log ("La suma es igual a",res)*/

// ejercicio 7

/*let num1 = prompt ("Ingresa un numero")
let num2 = prompt ("Ingresa otro numero")
let num3 = prompt ("Ingresa otro numero")
if(num1>num2 && num1>num3) {
    console.log(num1,"es el mayor")
}else if(num2>num3) {
    console.log(num2,"es el mayor")
}else {
    console.log(num3,"es el mayor")
}*/

//ejercicio 8

/*let num = prompt("ingrese un numero")
let res = parseInt(num) % 2
if(res == 0) {
    console.log("El numero es divisible por 2")
}else {
    console.log("El numero no es divisible por 2")
}*/

//ejercicio 9

/*let text = prompt("escribe un texto breve")
let ntext = text.length
let i 
for (i = 0; i<ntext; i++) {
    if(text.charAt(i)=="a" || 
    text.charAt(i)=="e" ||
    text.charAt(i)=="i" ||
    text.charAt(i)=="o" ||
    text.charAt(i)=="u")
    console.log(text.charAt(i))
}*/

// ejercicio 10

/*let num = prompt ("Ingrese un numero")
let res = num % 2
let res1 = num % 3
let res2 = num % 5
let res3 = num % 7
if (res == 0){
    console.log ("el numero es divisible por 2")
} else if (res1 == 0) {
    console.log ("el numero es divisible por 3")
} else if (res2 == 0) {
    console.log ("el numero es divisible or 5")
} else if (res3 == 0) {
    console.log ("el numero es divisible por 7")
}*/

//ejercicio 11

/*let num = prompt ("Ingrese un numero")
if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    if (num % 2 === 0) {
        console.log("numero divisible por 2")
    } if (num % 3 === 0) {
        console.log("numero divisible por 3")
    } if (num % 5 === 0) {
        console.log("numero divisible por 5")
    } if (num % 7 === 0) {
        console.log("numero divisible por 7")
    }
    }*/

/*let sumar = function (num1, num2) {
    let res = num1 + num2
    return `la suma de ${num1} + ${num2} = ${res}`
}*/

/*let numeros = [2,6,5,7,9,8]
let sumaPar = numeros.reduce((acum, numero) => {
    if (numero % 2 == 0) {
        return acum + numero
    }
    return acum
}, 0)
console.log(sumaPar)*/

// PRACTICO 3

// Ejercicio 1

/*const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Octubre", "Noviembre", "Diciembre"]
meses.forEach(mes => {
    console.log(mes)
})*/

// Ejercicio 2

const provincias = []
let provincia
while (provincia !== null) {
    provincia = prompt ("ingrese una provincia")
    if (provincia == "") {
        alert("ud. no ingreso nada")
    } else {
        provincias.push (provincia) 
    } 
}   
console.log(provincias)
for (let i = 0; i < provincias.length; i++) {
    provincias.pop()
    console.log (provincias[i])
}
console.log(provincias.length)
for (let i = 0; i < provincias.length; i++) {
    if (i == 0) {
        document.write(provincias[0])
    }
    if (i == 3) {
        document.write(provincias[3])
    }
    if (i == provincias.length) {
        document.write(provincias[provincias.length])
    }
} /*Revisar por que me borra elementos del array */

// Ejercicio 3

/*let sumas = []
let dado1 
let dado2
    for (let i = 0; i < 50; i++) {
        dado1 = Math.floor(Math.random() * 7) + 1
        dado2 = Math.floor(Math.random() * 7) + 1
        sumas.push(dado1 + dado2)
    }
console.log(sumas)*/

// Ejerciccio Funciones

// Ejercicio 1

/*function pares(numero) {
    if (numero % 2 == 0) {
        console.log (`${numero} en par`)
    } else {
        console.log (`${numero} es imapar`)
    }
}
let num = pares(30)
console.log(num)*/

//Ejercicio 2

/*function minMay(texto) {
    if (texto === texto.toUpperCase()) {
        console.log("El texto esta en Mayusculas")
    }
    if (texto === texto.toLowerCase()) {
        console.log("El texto esta en minusculas")
    }
    if (texto !== texto.toUpperCase() && texto !== texto.toLowerCase()) {
        console.log("El texto posee mayusculas y minusculas")
    }
}
minMay("minusculas")*/

// Ejercicio 3

/*function calculos(a, b) {
    let res = 2 * (a + b)
    return console.log(`El perimetro del rectangulo es ${res}`)
}
calculos(20, 10)*/

// Ejercicio 4

/*function multiplicar(num) {
    let r1 = num * 1
    let r2 = num * 2
    let r3 = num * 3
    let r4 = num * 4
    let r5 = num * 5
    let r6 = num * 6
    let r7 = num * 7
    let r8 = num * 8
    let r9 = num * 9
    let r10 = num * 10
    console.log(r1, r2, r3, r4, r5, r6, r7, r8, r9, r10)
}
multiplicar(prompt("Ingrese un numero para calcular la tabla de multiplicar del 1 al 10"))*/

// Ejercicios de POO

// Ejercicio 1

/*const auto = {
    marca: volkswagen,
    modelo: gol,
    color: negro,
    function marcha () {
        
    }
}*/


