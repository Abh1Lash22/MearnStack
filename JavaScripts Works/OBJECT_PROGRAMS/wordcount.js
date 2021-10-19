var text="hai hello hai hello"

var words=text.split(" ")//words=["hai","hello","hai","hello"]
var word_count={}//object
for(let word of words)
{
    if (word in word_count)
    {
        word_count[word]+=1
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);
