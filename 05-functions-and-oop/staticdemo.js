class Test
{
static a=10;
b=20;

static m1()
{
    console.log("This is m1 static method.......");
}

m2()
{
    console.log("This is m2 static method.......");
}

}
// we can directly access static vars and methods using class name
console.log(Test.a);    //10
Test.a=1000;
console.log(Test.a);  //1000
console.log(Test.b);    //undefined


Test.m1();
// Test.m2();

//we can access non static variables and methods using object

let t=new Test();
console.log(t.b);
t.m2()