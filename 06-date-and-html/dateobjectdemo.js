let d=new Date();
// console.log(d);

console.log(d.getDate());   //1-31
console.log(d.getMonth()+1);  //0-11
console.log(d.getFullYear());   //returns the year


console.log(d.getDate()+ " "+(d.getMonth()+1)+" "+d.getFullYear());


console.log(d.getHours()); //0-23
console.log(d.getMinutes()); //0-59
console.log(d.getSeconds()); //0-59


console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
