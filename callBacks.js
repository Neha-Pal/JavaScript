function display(result){
    console.log(result);
}

function add(n_1,n_2,CallBack){
    let sum = n_1+n_2;
    CallBack(sum);//pass the sum to callback function
}
//call the add function with display as the callback function
add(3,5,display)