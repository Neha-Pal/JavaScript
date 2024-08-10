//creating object using object literal
const student = {
    fname : 'Neha',
    lname : 'Pal',
    code : 56,
    age : 22,
    address : {
        district : 'North 24 pgs',
        state : 'WestBengal',
        pin : 700110
    }
}
console.log(student);
console.log(student.fname+student.lname);

student.fname = 'Piya';//update
console.log(student.fname+student.lname);

student.university = 'Brainware';//add new property
console.log(student);

delete student.age;//delete age property
console.log(student);