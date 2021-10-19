var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

//highest price
var costly_product=products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly_product);

//lowest price
var lowcost_product=products.reduce((item1,item2)=>item1[2]<item2[2]?item1:item2)
console.log(lowcost_product);