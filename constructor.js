function Name(fname,lname){//good practice to keep the first letter of the object name as capital
    this.firstName = fname;
    this.lastName = lname; 
}
const person_1 = new Name('Elon','Musk');
const person_2 = new Name('Bill' ,'Gates');
console.log(person_1);
console.log(person_2);

person_1.age = 53;
console.log(person_1);