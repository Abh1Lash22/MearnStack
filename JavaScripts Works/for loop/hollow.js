for(row=0;row<=3;row++)
{
    let str= "";
    for(col=0;col<=5;col++)
    {
        row==3||col+row==3||col-row==3?str+="* ":str+=" ";
    }
    console.log(str);
}