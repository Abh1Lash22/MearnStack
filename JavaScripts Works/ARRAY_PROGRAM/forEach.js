var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]

//print product names
var names= products.map(item=>item[1]).forEach(names=>console.log(names));

//print products rs>30
products.filter(item=>item[2]>30).forEach(names=>console.log(names));