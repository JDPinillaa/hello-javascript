/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Subject {
    name
    credits

    constructor(name, credits) {
        this.name = name
        this.credits = credits
    }



}

// 2. Añade un método a la clase que utilice las propiedades

class Car{
    brand
    model
    miles

    constructor(brand, model, miles) {
        this.brand = brand
        this.model = model
        this.miles = miles
    }

    info(){
        console.log("Car brand: ", this.brand, "Car model: ", this.model, "Car miles: ", this.miles)
    }
}




// 3. Muestra los valores de las propiedades e invoca a la función

let car = new Car("Mazda", "6", 75000)
console.log(car.brand)
console.log(car.model)
console.log(car.miles)
car.info()

// 4. Añade un método estático a la primera clase
class Subject2 {
    name
    credits

    constructor(name, credits) {
        this.name = name
        this.credits = credits
    }

    static subject(){
        return "soy una materia"
    }

}

// 5. Haz uso del método estático
console.log(Subject2.subject())

// 6. Crea una clase que haga uso de herencia
class Vehicle{
    name
    type

    constructor(name, type) {
        this.name = name
        this.type = type
    }

    start(){
        return "*Sonido de motor iniciado *"
    }
}

class bike extends Vehicle{
    displacement

    constructor(name, type, displacement) {
        super(name, type);
        this.displacement = displacement
    }

    start(){
        return "Sonido de motor de moto iniciado"
    }
}

// 7. Crea una clase que haga uso de getters y setters
// 8. Modifica la clase con getters y setters para que use propiedades privadas


class Athlete{
    #name
    #age
    #id
    #sport
    #experience

    constructor(name, age, id, sport, experience) {
        this.#name = name
        this.#age = age
        this.#id = id
        this.#sport = sport
        this.#experience = experience
    }

    getName(){
        return this.name
    }

    setName(name){
        this.#name = name
    }

    getAge(){
        return this.#age
    }

    setAge(age){
        this.age = age
    }

    getId(){
        return this.#id
    }

    getSport(){
        return this.#sport
    }

    setSport(sport){
        this.#sport = sport
    }



}


// 9. Utiliza los get y set y muestra sus valores

juandi = new Athlete("Juan Diego", 20, 1112, "Triatlon", 0)

juandi.getSport()
juandi.setSport("Running")

// 10. Sobrescribe un método de una clase que utilice herencia

class Plane extends Vehicle{
    hours

    constructor(name, type, hours) {
        super(name, type);
        this.hours = hours
    }

    start() {
        return "*sonido de avion iniciando*";
    }
}