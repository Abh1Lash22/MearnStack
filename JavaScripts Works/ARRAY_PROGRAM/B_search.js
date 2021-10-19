var arr=[10,11,13,14,12]
//sort()... for sorting array in obbjeclevel
arr.sort((num1,num2)=>num1-num2)
//console.log(arr);
var element=13;
var low=0,upp=arr.length-1;

var flag=0;
while(low<=upp)//0<5
{
    mid=Math.floor((low+upp)/2);

    if (element<arr[mid])
    {
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1

    }
    else if(element==arr[mid])
    {
        flag=1;
        break;
    }
}
console.log(flag==0?"element not found":"element found");

// gcd  of (14,21) create a program to find gcd of two number //grtst cmn diviser