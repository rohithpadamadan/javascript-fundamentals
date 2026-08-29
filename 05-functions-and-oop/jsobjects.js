let person=
{
firstname:"Rohith",
lastname:"Padamadan",
height:5.11,
age:31
}
console.log(person.firstname);
console.log(person.lastname);
console.log(person.height);
console.log(person.age);


// Add new property to existing object

person.weight=67;
console.log(person.weight);

//update existing property
person.age=32;
console.log(person.age);``



// Remove property from the object

delete person.height;
console.log(person.height);




console.log("#Person");


// for in loop
for(let x in person)
{
    // console.log(x);     //prints the property names
    // console.log(person[x]); //prints the property values
    console.log(x+ ":" +(person[x]))
}