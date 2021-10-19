var arr=[2,3,4,5,6,7,8]// after op [1,2,3,5,7,8,9]
//if num<5 mapp into num-1 else num>5 map num+1 and 5 mapp into 5
var op=[]
for(let num of arr)
{
   // if(num<5)
    //{
       // op.push((num-1) )
   // }
   // else if (num>5)
    //{
    //    op.push((num+1))
   // }
    //else{
    //    op.push(num)
        
   // }
    num<5?op.push((num-1)):num>5?op.push((num+1)):op.push((num));
}
console.log(op);
