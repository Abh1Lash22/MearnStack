function add (...args)
{
  return args.reduce((num1,num2)=>num1+num2)
}
console.log(add(10,20,40,30));