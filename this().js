const about = {
    fname : 'Neha',
    lname : 'Pal',
    roll : 56,
    fullName : function(){
        return this.fname +" "+ this.lname;
    }
}
console.log(about.fullName());