
// creo la clase vehiculo con sus dos atributos privados
class Vehiculo{   
#marca;
#velocidad;

// creo el contructor con los dos atributos provados, usando set para introducirlo
constructor( marca, velocidad){
    this.setMarca(marca);
    this.setVelocidad(velocidad);
}

// creo los getter y setter para manipular los atributos
getMarca(){
    return this.#marca;
}

setMarca(marca){
    this.#marca = marca;
}


getVelocidad(){
    return this.#velocidad;
}

// creamos una validacion para la velocidad
setVelocidad(velocidad){
    if (velocidad >=0){

this.#velocidad = velocidad;
}
    
}
}

// creo la clase coche que hereda de vehiculo
class Coche extends Vehiculo{

// creo el cotructor don un atributo propio y dos heredados    
    constructor(marca,velocidad,numPuertas){
        super(marca,velocidad);
        this.numPuertas = numPuertas;
    }

}

// creo dos objetos coche con sus atributos
let coche1 = new Coche ("mazda",250, 5);
let coche2 = new Coche ("citroen", 160, 5);


//accedemos al contenido de los atributos privados
console.log("La velocidad del primer coche es:  " + coche1.getVelocidad());
console.log("La marca del primer coche es :  " + coche1.getMarca());
console.log("La velocidad del segundo coche es:  " + coche2.getVelocidad());
console.log("La marca del segundo coche es :  " + coche2.getMarca());

