//datastructures
//array.....object

//array
//defie?   []
//it is possible to store same and different data typesof object/data
//size is not defined
//insertion order is preserved
//fetching arrar elements index
//array index starts from 0th index
//                0    1     2     3     4     5
var expenses =[10000,12000,20000,22000,13000,34000]

//jan exp
console.log(expenses[1]);

console.log(expenses.length);

//itreating throug array

//for(let i=0;i<expenses.length;i++)
//{
  //  console.log(expenses[i]);
//}






for(let amount of expenses)
{
    console.log(amount);
}


//total amount
var total =0;
for (let amount of expenses)
{
    total+=amount
}
console.log(total);


//print all expens<15000
for(let amount of expenses)
{
    console.log(amount<15000?amount:"");
}

//add 3000 rs more with feb expense
expenses[1]+=3000;
console.log(expenses);

//inserting an element to end of the array
//arrayname.push()
//arrayname.length

expenses.push(22000)
console.log(expenses);

//remove an element from array

expenses.pop()

console.log(expenses);