"use strict";
//Number 
//Explicito
var phone;
phone = 1;
phone = 54534242;
//phone = 'Hola' // genera un error
//Inferido-Implicito
var phoneNumber = 3435242;
phoneNumber = 343;
//phoneNumber = true //Genera un error por tipo
var hex = 0xf00d; //hexadecimal
var binary = 10; //binario
var octal = 484; //octal
//Explicito
var isPro;
isPro = true;
//isPro = 1; Regresa un error por el tipo de variable
//Implicito - Inferido
var isUserPro = false;
isUserPro = true;
//sUserPro = 10 // error
var username;
username = "Luis";
var userInfo;
userInfo = "\n    Userinfo :\n    username : " + username + "\n    firstName : " + (username + ' Hernandez') + "\n    phone : " + phoneNumber + "\n    isPro : " + isUserPro + "\n";
console.log('userInfo', userInfo);
//------------------------------------//
var a = 'hola';
a = 'Holas';
var a1 = 10;
var b = 20;
var c = a + b;
console.log(a);
console.log(c);
var num1 = 10;
var num2 = 20;
b = num1 + num2;
console.log(b);
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(2, 3));
var dniNumber = 1234;
var dniNumber2 = 123434;
console.log(typeof (dniNumber));
console.log(typeof (dniNumber2));
