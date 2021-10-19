var arr1=[10,20,21,22,27], arr2=[11,12,20,21,23]
//print common elements from this arays(20,21)

var count=0;
for(let num1 of arr1)
{
    for(let num2 of arr2)
    {
        if (num1==num2)
        {
            console.log("common element",num1);
        }
        count++;
    }
}
console.log("itreation",count);