class Animal{
    constructor(name){
        this.animalName = name;
    }
    speak(){
        console.log(this.animalName + 'makes noise');
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);//call the constructor of the superclass
    }
    speak(){
        console.log(this.animalName + ' barks ');
    }
}

class Cat extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(this.animalName + ' meows ');
    }
}

const myDog = new Dog('Tommy');
const myCat = new Cat('Kitty');

console.log(myDog);
console.log(myCat);

myDog.speak();
myCat.speak();