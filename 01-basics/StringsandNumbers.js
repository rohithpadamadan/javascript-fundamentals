// let s="welcome";

// //charAt()
// console.log(s.charAt(2));   //l


// //concat()
// console.log(s.concat(" to javascript programming"));
// console.log(s.concat(" to javascript").concat(" programming"));

// //replace()
// s="welcome to javascript";
// console.log(s.replace("javascript","java"));


// //substring()
// s="welcome";
// console.log(s.substring(3,7));

// // case conversion method
// s="WELcome";
// console.log(s.toLowerCase());
// console.log(s.toUpperCase());


//split()
s="welcome to javascript";
let arr=s.split(' ');

console.log(arr[0]+":"+arr[1]+":"+arr[2]);

//trim()
s="   welcome      ";
console.log(s);
console.log(s.trim());



//Numbers


// let x=100;
//let x=new Number(100);

let x=102;    //Integer value
let y=102.7; //decimal
let z=10e2; // exponential value


console.log(x,y,z);



//isInteger()
x=19;
y=1.8;
z="x";
console.log(Number.isInteger(x));
console.log(Number.isInteger(y));
console.log(Number.isInteger(z));


s="12345";
console.log(typeof(s)); 
console.log(typeof(Number.parseInt(s)));


//parsefloat()
s="123.568"
console.log(typeof(s)); 
console.log(typeof(Number.parseFloat(s)));


//toString()

let n=1234;
console.log(typeof(n)); //numbers
console.log(typeof(Number.toString(n)));