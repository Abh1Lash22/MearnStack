var arr=[10,11,12,13,40,15]
var element=15,flag=0;
for( let num of arr)
{
    if(num==element)
    {
        flag+=1;
        break;
    }
}

if(flag==0)
{
    console.log("element not found");
}
else{
    console.log("element found");
}