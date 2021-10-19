var expenses=[12000,13000,14000,15000,11000,25000,17000]
//print highest exp
//print lowest exp
//num of month exp exceeds 15000
//print avg exp
//with out sort and no predefined methods allowed
var high_exp=expenses[0];
for(let amount of expenses)
{
    if (high_exp<amount)
    {
        high_exp=amount
    }
}
console.log(`Highest expense: ${high_exp}`);



var low_exp=expenses[0];
for(let amount of expenses)
{
    if (low_exp>amount)
    {
        low_exp=amount
    }
}
console.log(`Lowest expense:${low_exp}`);


let count=0;
for(let amount of expenses)
{
    if(amount>15000)
    {
        count++;
    }
}
console.log("exp>15000 count",count);


var total_exp=0;
for(let amount of expenses)
{
    total_exp+=amount
}
console.log("average expense",total_exp/expenses.length);