var global_var = 0;
var ff = 1;
first_function(ff);
// console.log(first_var);
function first_function(first_var){
    //  var first_var = 1;
     second_function();  
}
function second_function(){
    var second_var = 2;
    console.log(second_var);
    console.log(first_var);
}
// second_function();