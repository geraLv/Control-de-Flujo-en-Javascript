let n1 = 0;
for(let i = 0; i < 61; i++){
    if((Math.abs(n1) %3===0)&&(Math.abs(n1) %5===0)){
        console.log(n1, 'FizzBuzz');
    } else if(Math.abs(n1) %3===0){
        console.log(n1, 'Fizz');
    } else if(Math.abs(n1) %5===0){
        console.log(n1, 'Buzz');
    } else{
        console.log(n1)
    }
    n1 = (n1+1);
}
