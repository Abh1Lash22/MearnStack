//var refname=  new classname

//student setStudent(rol,course,stud_name) printStudent

class student{
    //setStudent
    constructor(rol,course,stud_name)
    {
        this.rol=rol,
        this.course=course,
        this.stud_name=stud_name
        //this.rol(instance variable)
        //rol(local variable)
    }
    printStudent()
    {
        console.log(this.rol,this.course,this.stud_name);
    }
}

var obj1=new student(1,"bca","abhilash");
//obj1.setStudent(1,"bca","abhilash")
obj1.printStudent()
console.log(obj1.stud_name);

//duty of setStudent is initializing instance variable
// we can use constructer for initializing instance variable