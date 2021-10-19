function secondLargestAmongThree(num1,num2,num3)
{
    if(num1>num2&&num1>num3)
    {
       return num2>num3?num2:num3;
    }
    else if(num2>num1&&num2>num3)
    {
       return num1>num3?num1:num3;
    }
    else{
        return num1>num2?num1:num2;
    }
}
//console.log(secondLargestAmongThree(34,67,78));