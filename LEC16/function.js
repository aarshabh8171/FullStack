// function fun(){
//     console.log('inside fun function')
// }

// fun()

// fun()



function fun1(){
    console.log('inside fun1 function')
}

var p = fun1;


var x = function fun(){
    console.log('inside function')
}

p();
fun1();
//x()
//fun() 
// can't do this ---> fun()
//as is it initiallized in x variable.





// anonymous function
// var z = function abc(){
//     var y = 10;
//     console.log(y);
// }
// z();





//Arrow function

var a = ()=>{
    var y = 10;
    console.log(y)
    return "kuchh bhi"
}

a();
console.log(a());



