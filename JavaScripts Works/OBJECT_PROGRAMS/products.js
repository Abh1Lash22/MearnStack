var products={p_name:"product1",price:250,avl_qty:50}

//print product name

console.log(products.p_name);

//update stock as current stock + 30

products["avl_qty"]+=30
console.log(products);

//chk discount key is presnt
console.log("discount" in products);

//add discount :10%

products["discount"]="10%"
console.log(products);

//chk for batch code is present if not add batchcode=est_2k21_09

if ("batch_code" in products)
{
    console.log("true");
}
else{
    products.batch_code="est_2k21_09"
}
console.log(products);