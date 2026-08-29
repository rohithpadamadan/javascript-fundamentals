class student
{
    constructor()
    {
        let name,marks;
    }

    getName()
    {
        return this.name;           //this keyword representing the class; will return the name of the student
    }
    setName(name)
    {
        this.name=name;
    }
    getMarks()
    {
        return this.marks;      // will return the marks of the student
    }
    setMarks(marks)
    {
        this.marks=marks;
    }
}



let stu=new student();
stu.setName("Rohith");
stu.setMarks(90);

console.log(stu.getName(),stu.getMarks());