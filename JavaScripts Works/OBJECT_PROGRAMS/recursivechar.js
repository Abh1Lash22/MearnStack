var pattern="ABCABB"
//find first recursive character "A"

var word_count={}
for(let char of pattern)
{
    if (char in word_count)
    {
        console.log(char,"is first recursive character");
        break;
    }
    else{
        word_count[char]=1
    }
}

