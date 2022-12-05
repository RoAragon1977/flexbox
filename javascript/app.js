
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

/*let i = prompt("ingresa tu edad")
if (i >= 0 && i <= 100) {
    if (i < 18) {
        console.log("Ud. no tiene edad para conducir")
    } if (i >= 18) {
        console.log("Ud. ya tiene edad para conducir")
    } 
} else {
    console.log("ingrese un valor correcto")
}*/

// Ejercicio 2

/*let nota = prompt("ingrese una nota")
if (nota>=0 && nota<=10) {
    if (nota>=0 && nota<=2) {
        alert("Muy deficiente")
    } if (nota>=3 && nota<=4) {
        alert("Insuficiente")
    } if (nota>=5 && nota<=6) {
        alert("Suficiente")
    } if (nota==7) {
        alert("Bien")
    } if (nota>=8 && nota<=9) {
        alert("Notable")
    } if (nota==10) {
        alert("Sobresaliente")
    } 
} else {
    alert("Numero erroneo, ingrese un valor entre 0 y 10")
}*/  

// Ejercicio 3

/*let acum = ""
do {
    let cadena = prompt("Intoduce un texto")
    if (acum == "") {
        acum = acum + cadena
    }  else {
        acum = acum + "-" + cadena
    }
    
} while(confirm("desea seguir?"))
console.log(acum)*/

// Ejercicio 4

/*let suma = 0
let num 
do {
    num = prompt("Ingresa un numero")
    if (Number(num) == num) {
        num = Number(num)
        suma = suma + num
    } else {
        if (num != undefined) {
            alert("Lo ingresado no es un numero")
        }
    }
} while (num != undefined) {
    console.log(suma)
}*/

// Ejercicio 5

/*const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"]
let res
let dni
do {
    dni = prompt("Ingrese su numero de DNI con 8 digitos")
    if (Number(dni) !== dni  && dni.length !== 8) {
        alert("error al ingresar dni, vuelva a intentar")
    } else {
        dni = Number(dni)
        res = dni % 23
        console.log("La letra de tu DNI es "+ letras[res])
    }
} while (dni != undefined) {
    console.log("Gracias por su visita")
} corregir cuando se oprime cancelar*/

// Ejercicio 6

/*let i
let rep 
for (i = 1; i <= 30; i++) {
    for (rep = 0; rep < i ; rep++) {
        document.write(i)
    }
    document.write("<br>")
}*/

// Ejercicio 7

/*let rep
let i
let x = prompt("ingrese un numero del 1 al 50")
if (Number(x) == x) {
    if (x > 0 && x <= 50) {
        for (i = x; i >= 1; i--) {
            for (rep = i; rep >= 1; rep--) {
                document.write(i)
            }
            document.write("<br>")
        }
    }
} else {
    alert("No has introducido un número")
}*/

// Ejercicio 8

        for (let i = 0; i <= 50; i++) {
            for (let rep = 1; rep <= i; rep++) {
                document.write(rep)
            }
            document.write("<br>")
        }
