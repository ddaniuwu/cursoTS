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
