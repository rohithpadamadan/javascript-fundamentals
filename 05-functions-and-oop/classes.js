class Student
{

    constructor(i,n,g)
    {
        this.sid=i;
        this.sname=n;
        this.grade=g;

    }

    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }


}


let stu=new Student(1,"Jay","A");
// stu.setDetails(11,"Rohith","A");
stu.display();

let stu1=new Student(2,"Rohith","B");
stu1.display();

let stu2=new Student(3,"Charles","C");
stu2.display();
