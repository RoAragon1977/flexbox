
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

// Practico 2
// Ejercicio 1

let i = prompt("ingresa tu edad")
if (i >= 0 && i <= 100) {
    if (i < 18) {
        console.log("Ud. no tiene edad para conducir")
    } if (i >= 18) {
        console.log("Ud. ya tiene edad para conducir")
    } 
} else {
    console.log("ingrese un valor correcto")
}


