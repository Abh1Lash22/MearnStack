 var products=[
    [100,"oreo",40,50],
    [101,"fifty-fifty",20,60],
    [102,"borbourne",40,0],
    [103,"treat",30,10],
    [104,"arrowroot",30,0],
    [105,"moms-magic",45,10],

]
 // print number of items in shop
 console.log(products.length);
// print number of available items
  let avl_stock=0;
  for(let item of products)
  {
      if(item[3]>0)
      {
          avl_stock++;
      }
  }
console.log(avl_stock);

// print all product names only

var product_name=products.map(item=>item[1])
console.log(product_name);

//print all available product
var aval_items=products.filter(item=>item[3]>0)
console.log(aval_items);

//print out of stock product name

var out_stock_name=products.filter(item=>item[3]==0).map(item=>item[1])
console.log(out_stock_name);

//add offer 5rs for all product whose stock>50

var offer=products.filter(item=>item[3]>50).map(item=>[item[2]-5,item[1]])
console.log(offer);