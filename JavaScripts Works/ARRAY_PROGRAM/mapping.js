var arr=[2,3,4,6,7,8]// after op [1,2,3,7,8,9]
//if num<5 mapp into num-1 else num>5 map num+1

var op=[]
for( let num of arr)
{
    if(num<5)
    {
        op.push((num-1) )
    }
    else{
        op.push((num+1))
    }
}
console.log(op);