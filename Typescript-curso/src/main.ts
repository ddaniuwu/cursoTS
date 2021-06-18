//Number 
//Explicito
let phone:number;
phone = 1;
phone = 54534242;
//phone = 'Hola' // genera un error


//Inferido-Implicito
let phoneNumber = 3435242
phoneNumber = 343
//phoneNumber = true //Genera un error por tipo

let hex:number = 0xf00d; //hexadecimal
let binary:number = 0b1010; //binario
let octal:number = 0o744; //octal


//Explicito
let isPro:boolean;
isPro = true;
//isPro = 1; Regresa un error por el tipo de variable

//Implicito - Inferido
let isUserPro = false;
isUserPro = true;
//sUserPro = 10 // error

let username:string;
username = "Luis";

let userInfo:string;
userInfo = `
    Userinfo :
    username : ${username}
    firstName : ${username + ' Hernandez'}
    phone : ${phoneNumber}
    isPro : ${isUserPro}
`
console.log('userInfo' , userInfo);

//------------------------------------//

let a = 'hola'
a = 'Holas'


let a1 = 10 ; 
let b:number = 20
let c = a + b

console.log(a)
console.log(c)

const num1 = 10
const num2 = 20
b = num1 + num2

console.log(b)


function suma(num1:number , num2: number):number {
    return num1 + num2 
}

console.log(suma(2,3))

/*type se utiliza para definir un tipo de dato para una 
variable*/
type dni = number;
let dniNumber:dni = 1234
let dniNumber2:dni = 123434

console.log(typeof(dniNumber))
console.log(typeof(dniNumber2))