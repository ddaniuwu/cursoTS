let userId: any;
userId = 1;
userId = '1';
console.log('idUser', userId);

//Tipo Inferido
let otherID;
otherID = 1;
otherID = '1';
console.log('otherId', otherID)

let surprise:any ='hello typescript';
//surprise.sayHello() devuelve error
const res = surprise.substring(6);
console.log('res', res)