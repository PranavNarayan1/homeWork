
/*function add(...a){

    let sum = 0;
    
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }

    console.log(sum);
}*/

function add(){

    let sum = 0;
    let array = Array.from(arguments);
    for(let i = 0; i < arguments.length; i++){
        
        sum = sum + array[i];

    }
    console.log(sum);

}

add(15, 25, 28, 95, 23);