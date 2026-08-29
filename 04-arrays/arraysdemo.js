// let teams=["Arsenal", "Chelsea"];
// let teams= new Array("Arsenal","Chelsea", "Manu");
//console.log(teams);
// console.log(teams[0]); //accessing element

// teams[0]="Madrid";
// teams[1]="Barca";
// console.log(teams);

// let myarr=[2026,"Arsenal",0.9,true];
// console.log(myarr);


//we can have objects inside array

// let person1=
// {
// name:"Rohith",
// age:31
// };

// let person2=
// {

//     name:"Martina",
//     age:30
// };
// let myarr2=[person1,person2];
// console.log(myarr2);
// console.log(myarr2[0]);

let fruits=["Apple","Mango"];
console.log(fruits.length);


//Looping elements from array
// for (let i=0; i<=1;i++)
// {
//     console.log(fruits[i]);
// }

//Looping elements from array using for /of loop
for (ele of fruits)
{
    console.log(ele);
}

//Recognize an array
console.log(typeof fruits);
console.log(Array.isArray(fruits));