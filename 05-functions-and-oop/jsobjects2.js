let emp=
{
firstname: "Rohith",
lastname: "Padamadan",
basesal:50000,
bonus:function()
{

    return(this.basesal*0.10);
}

};
console.log(emp.firstname);
console.log(emp.bonus());     // this method (function inside the object) is used to print the bonus value