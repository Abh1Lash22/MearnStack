function largestAmongThree(num1,num2,num3)
{
    return num1>num2&num1>num3?num1:num2>num1&num2>num3?num2:num3>num1&num3>num2?num3:"three numbers are equal";
}
console.log(largestAmongThree(20,30,40));