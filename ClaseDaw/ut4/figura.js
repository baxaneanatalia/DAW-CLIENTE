class figura {
    //constructor de la clase figura
    constructor (nombre){
        this.nombre = nombre
    }
//metodo area con throw para que se sobreescriba en cada figura
    area(){
        throw new Error("El método debe sobreescribirse en cada figura.");
    }
}

//clase cuadrado que hereda de figura
class cuadrado extends figura {
    constructor (nombre,lado){
        //llamamos al constructor de la clase padre
        super(nombre)
        //asignamos el valor del lado
        this.lado =lado
    } 
//metodo area que calcula el area del cuadrado
    area(){
        return this.lado * this.lado
    }
}
//creamos un objeto de la clase cuadrado y llamamos al metodo area
console.log( "El area de los cuadrados es:  " + 
    new cuadrado("cuadrado1", 5).area()  + " y " +
    new cuadrado("cuadrado2", 10).area()

)

//clase circulo que hereda de figura
class circulo extends figura {
    constructor(nombre,radio){
        super (nombre)
        this.radio = radio
    }
    //metodo area que calcula el area del circulo
    area(){
        return Math.PI * this.radio * this.radio
    }
}
//creamos un objeto de la clase circulo y llamamos al metodo area
console.log("El area de los circulos es:  " + 
    new circulo ("circulo1", 7).area().toFixed(2) + " y " +
    new circulo ("circulo2", 3).area().toFixed(2) 

)
