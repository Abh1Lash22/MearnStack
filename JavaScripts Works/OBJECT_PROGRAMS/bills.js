var bill_details=[

    {bill_number:1000,date:"17-09-2021",amount:5000,payment_type:"card"},
    {bill_number:1001,date:"17-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1002,date:"17-09-2021",amount:6000,payment_type:"card"},
    {bill_number:1003,date:"17-09-2021",amount:2000,payment_type:"cash"},
    {bill_number:1004,date:"18-09-2021",amount:7000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1005,date:"18-09-2021",amount:4000,payment_type:"card"},
    {bill_number:1006,date:"18-09-2021",amount:3000,payment_type:"cash"},
    {bill_number:1007,date:"19-09-2021",amount:4000,payment_type:"cash"},
    {bill_number:1008,date:"19-09-2021",amount:6000,payment_type:"cash"},
]

//sales report....

var sales_report ={}
for(let bill of bill_details)
{
    let bill_date=bill.date;
    let date_amount=bill.amount;
    if(bill_date in sales_report)
        {
          sales_report[bill_date]+=date_amount
        }
        else{
            sales_report[bill_date]=date_amount;
        }
}
console.log(sales_report);





//sort the sales report wrt total_collection

console.log(Object.entries(sales_report).sort((amount1,amount2)=>amount1[1]-amount2[1]));

