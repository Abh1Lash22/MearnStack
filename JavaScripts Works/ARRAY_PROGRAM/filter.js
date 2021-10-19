var arr=[2,3,4,5,6,7]
//print odd numbers

var odds=arr.filter(num=>num%2!=0)
console.log(odds);

//print squares of all even numbers

var even_sqr=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(even_sqr);