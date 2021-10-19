// 0 1 2 3
for(let row=0;row<4;row++)
{
    //3 2 1
    let str ="";
    for(let space=0;space<(4-row-1);space++)//space=0;0<3;space=1 1<3 space=2....
    {
       str+=" "
    }
    for(let col=0;col<(row+1);col++)//col=0 0<(0+1) 0<1 ..1 1<1
    {
        str+="* "
    }
    console.log(str);//" * "
}