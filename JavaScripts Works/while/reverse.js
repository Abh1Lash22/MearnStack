//123=>321
//mod
//floor
var num=123;
var res="";
//var res=0;
while(num!=0)//123!=0 12!=0 1!=0 0 !=0
{
    let  digit=num%10;//digit=123%10=3  digit=12%10=2  digit=1%10=1
   //res=res*10+digit;//0*10+3=3 res=3*10=2=32.....
   res+=digit;//""+3+2+1=321  
    num=Math.floor(num/10)//123/10=12  12/10=1 1/10=0
}
console.log(res);