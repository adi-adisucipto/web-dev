class Student {
    name;
    email;
    batch;
    gender;
    lacation = "Indonesia";

    constructor(_name, _email, _batch, _gender){
        this.name = _name;
        this.email = _email;
        this.batch = _batch;
        this.gender = _gender;
    } // Spesial function
}

// Class itu bisa dibilang seperti deklarasi variabel

const studentBudi = new Student(
    "Budi",
    "budi@gmail.com",
    "jcwdoham004",
    "male"
);

const studentSara = new Student(
    "Sara",
    "sara@gmail.com",
    "jcwdoham004",
    "female"
);

console.log(studentBudi);
console.log(studentSara);

// Prinsip object: enkapsulasi dan inheritance


class Product {
    #name = "Keyboard";
    #price;

    getProduct() {
        return this.#name
    }

    updateName(name) {
        this.#name = name
    }
}

const newProduct = new Product();
console.log(newProduct.getProduct())
newProduct.updateName("Mouse");
console.log(newProduct.getProduct())



// Inheritance
class Animal {
    name;
    spesies;
    environment;

    constructor(_name, _spesies, _environment){
        this.name = _name;
        this.spesies = _spesies;
        this.environment = _environment;
    }

    speak(){
        return "Mengeluarkan suara";
    }
}

class Cat extends Animal {
    constructor(_name, _spesies, _environment){
        super(_name, _spesies, _environment)
    }

    speak() {
        return "meow";
    }
}

class Dog extends Animal {
    constructor(_name, _spesies, _environment){
        super(_name, _spesies, _environment)
    }

    speak() {
        return "woof";
    }
}

const kucing = new Cat("cat", "feline", "land");
const anjing = new Dog("Dog", "canine", "land");

console.log(kucing);
console.log(anjing);

class AnimalHaveLegs extends Animal {
    legs;

    constructor(_spesies, _environment, _legs){
        super(_spesies, _environment);
        this.legs = _legs;
    }
}

class AnimalHaveFin extends Animal {
    fin;

    constructor(_spesies, _environment, _fin){
        super(_spesies, _environment);
        this.fin = _fin;
    }
}

const macan = new AnimalHaveLegs("tiger", "land", 4);
const lumbaLumba = new AnimalHaveFin("dolphin", "water", 3);

console.log(macan);
console.log(lumbaLumba);



class CoffeeMachine {
    boilWater(){
        console.log("Boil water");
    }

    brewCoffee(){

    }
}


// enkapsulasi
// inheritance
// polimorphism
// abstraction