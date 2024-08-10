class Animal{
    constructor(name,eat){
        this.animalName = name;
        this.eatingType = eat;
    }
}

class dog extends Animal{
    constructor(){
        super('Dog','meat');
    }
}
const mydog = new dog();
console.log(mydog.animalName + " eats "+ mydog.eatingType);