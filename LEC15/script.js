var str = "This is JS and we are learing string";
var x = 'This is also string';
var y = `this is string`;

console.log(str)

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())




// To Replace 
// var repacedVal = str.replace('is','IS');
// console.log(repacedVal);

// var repacedVal1 = str.replaceAll('JS','JAVA_Script');
// console.log(repacedVal1);




//Split
// var splitVal = str.split(' ');
// console.log(splitVal);

// var splitVal = str.split('is');
// console.log(splitVal);




//String Literal
var money = 100;
var p = `I have Rs. ${money}.`;

console.log(p);




// Object
var obj = {
    'Name':'Aarshabh',
    'Age': 21,
    'City':'Noida'
}

console.log(obj);
console.log(obj.Name);

//all key of object
for(var i in obj){
    console.log(i);
    // as is detect is as key
    // console.log(obj.i);
    console.log(obj[i]);
}





