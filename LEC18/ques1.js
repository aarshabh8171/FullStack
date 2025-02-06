let arr = [
    {firstName:'Rohit', lastName:'Jha', age:25},
    {firstName:'Donald', lastName:'Trump', age:76},
    {firstName:'Vimpol', lastName:'Xyz', age:20},
    {firstName:'Deepeka', lastName:'Padukone', age:25},
];



let FilterdArr = arr.filter(person => person.age === 25)
                .map(person => `${person.firstName} ${person.lastName}`);

console.log(FilterdArr); 


let ageCount = arr.reduce(function(count, person) {
    count[person.age] = (count[person.age] || 0) + 1;
    return count;
}, {});

let output = [];
for (let age in ageCount) {
    output.push(age + ":" + ageCount[age]);
}

console.log(output); // ['25:2', '76:1', '20:1']
