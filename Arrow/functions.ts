let suma = function( a:number , b:number){
    return a+b
}
console.log(suma(2,3))


let sumarFlecha = (a:number , b:number) => a+b;
/*let sumarFlecha = (a:number , b:number) {
return a+b
}
*/
console.log(sumarFlecha(2,4))

let ObtenerNombre = () =>{
    return "Luis"
}
/*
let ObtenerNombre = () => "Luis"
*/


console.log(ObtenerNombre())