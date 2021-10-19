var arr=[10,11,10,20,21,21]
//find the duplicate elements
var duplicate ={}//{10:2,11:1,20:1,21:2}
for (let num of arr){
    if(num in duplicate){
        duplicate[num]+=1
    }
    else{
        duplicate[num]=1
    }
    
}

