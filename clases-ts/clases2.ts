class Transporte  {
    private velocidad: number;
    private formaDeMovilidad: string
    

    constructor (velocidad:number , formaDeMovilidad:string){
        this.velocidad = velocidad
        this.formaDeMovilidad = formaDeMovilidad
    }
    getvelocidad() {
        return this.velocidad;
    }
    setVelocidad (velocidad:number){
        this.velocidad = velocidad
    }


    getformaDeMovilidad() {
        return this.formaDeMovilidad;
    }
    setformaDeMovilidad (formaDeMovilidad:string){
        this.formaDeMovilidad = formaDeMovilidad
    }
    
}

const transporte1 = new Transporte(24324 , "Carro")
//const transporte : Tansporte = new  Transporte(20 , "carro")


class Auto extends Transporte {
    private cantidadDePuertas:number;

    constructor(velocidad:number , formaDeMovilidad:string , cantidadDePuertas:number){
        super(velocidad , formaDeMovilidad)
        this.cantidadDePuertas = cantidadDePuertas;
    }
getvelocidad(){
    return super.getvelocidad() + 10
}

getCantidadDePuertas(){
    return this.cantidadDePuertas;
}

setCantidadDePuertas(cantidadDePuertas:number){
    this.cantidadDePuertas = cantidadDePuertas
}

}

const auto:Auto = new Auto(20,"Suelo" , 3)