var employee={id:1000,emp_name:"ram",desig:"developer",salary:25000}



//object define{}
//key ,value pairs

//values are accessing throug corresponding key
console.log(employee["emp_name"]);
console.log(employee["salary"]);
console.log(employee.emp_name);
console.log(employee.salary);

//update employee slary as 30000
employee["salary"]=30000
console.log(employee);

//chk for gender key is present or not
console.log("gender" in employee);

//add new value pair gender :male
employee["gender"]="male"
console.log(employee);

