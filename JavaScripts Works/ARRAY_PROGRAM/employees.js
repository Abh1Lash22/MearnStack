var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]

//print number of employees

//console.log(employees.length);

//print number of developers

 var count=0;
 for(let emp of employees)
 {
     if(emp[3]=="developer")
     {
         count++;
     }
 }
// console.log("developer=",count);

 //print experience of each employee

 for(let employee of employees)
 {
//    console.log("experience of  :",employee[5]-employee[4]);
     }


// print highest salary
var high_salary=0;
 for (let employee of employees)
 {

       if(high_salary<employee[2])
       {
           high_salary=employee[2];
       }
 }
// console.log("highest salary",high_salary);


 //print lowest salary

 var low_salary=employees[0][2];
 for (let employee of employees)
 {

       if(low_salary>employee[2])
      {
           low_salary=employee[2];
       }
 }
// console.log("lowest salary",low_salary);


//print name of developer who is taking highest salary

//var dvlpr_high =
employees.filter(emp=>emp[3]=="developer").reduce((emp1,emp2)=>emp1[2]>emp2[2]?emp1:emp2)

//console.log(dvlpr_high);

//print name of highest exp employee

var high_exp_emp = employees.reduce((emp1,emp2)=>emp1[5]-emp1[4]>emp2[5]-emp2[4]?emp1:emp2)
//console.log(high_exp_emp);

//print total sum of each employee




