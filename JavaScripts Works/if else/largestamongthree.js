var num1=34 ,num2=34,num3=34;
if((num1>num2 )&&(num1>num3) )
{
    console.log(`${num1} is largest`);
}
else if((num2>num1)&&(num2>num3))
{
    console.log(`${num2} is largest`);
}
else if((num3>num1)&&(num3>num2))
{
    console.log(`${num3} is largest`);
}
else{
    console.log("three numbers are equal");
}