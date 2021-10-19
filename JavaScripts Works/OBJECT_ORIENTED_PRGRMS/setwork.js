var test="haai hhooww haai";
var words = test.split(" ")

for(let word of words)
{
    
var st=new Set()
    for (let char of word)
    {
        st.add(char)
    }
    console.log(st);

}
