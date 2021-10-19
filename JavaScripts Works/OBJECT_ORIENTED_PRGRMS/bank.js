class bank{
    createAccount(p_name,ac_no,ac_type,mini_bal)
    {
        this.p_name=p_name,
        this.ac_no=ac_no,
        this.ac_type=ac_type,
        this.balance=mini_bal
    }
    deposit(amount)
    {
       this.balance+=amount
       console.log(`your account ${this.ac_no} has been credited with amount ${amount} available balance ${this.balance}`);
       
    }
    withdrawal(amount)
    {
        if(this.balance>amount)
        {
            this.balance-=amount;
            console.log(`your account ${this.ac_no} has been debited with amount ${amount} available balance ${this.balance}`);
        }
        else{
            console.log("transaction failed insuficient");
        }
    }
}
var obj1=new bank
obj1.createAccount("abhishek",12345,"savings",2000)
obj1.deposit(5000)
obj1.withdrawal(2000)