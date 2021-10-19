class bank {
    session = {}
    accounts = {
        1001: {
            acno: 1001, password: "userone", balance: 5000, transactions:
                [
                    { to: 1002, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1002: {
            acno: 1002, password: "usertwo", balance: 7000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1003: {
            acno: 1003, password: "userthree", balance: 8000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1002, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
        1004: {
            acno: 1004, password: "userone", balance: 9000,
            transactions:
                [
                    { to: 1001, amount: 500 },
                    { to: 1003, amount: 600 },
                    { to: 1004, amount: 700 }
                ]
        },
    }
    getAccountDetails() {
        return this.accounts

    }
    authenticate(accno, password) {
        //validate account number
        if (accno in this.accounts) {
            let pwd = this.accounts[accno].password
            if (pwd == password) {
                this.session["user"] = accno//session={"user":1001}

                return 1//login successful
            }
            else {
                return 0//invalid password
            }

            // pwd==password?1:0
        }
        else {
            return -1
            //-1 for invalid account number
        }
    }
    balanceEnquiry() {
        //session={"user":1001}
        let user = this.session["user"]
        return this.accounts[user].balance

    }

    fundTransfer(to_accno, amount) {
        let user = this.session["user"]
        if (to_accno in this.accounts) {
            if (this.accounts[user].balance > amount) {
                this.accounts[user].balance -= amount;
                this.accounts[to_accno].balance += amount;
                this.accounts[user].transactions.push({ to: to_accno, amount: amount })

                

                console.log(this.accounts[user]);
            }
            else {
                console.log("insufficient balance");
            }
        }
        else {
            console.log("invalid account number");
        }
    }
    paymentHistory() {
        let user = this.session["user"]
        console.log(this.accounts[user].transactions);
    }
    getTransation()
    {
        let transaction_history=[];
        for(account in  this.accounts){
            transaction_history.push[this.accounts[account].transactions]
        }
        return transaction_history

    }
    creditTransaction()
    {
        
    }

}

var obj = new bank()
//console.log(obj.getAccountDetails());


var user = obj.authenticate(1001, "userone")
//onsole.log(user == 1 ? "login successfull" : user == -1 ? "invalid account number" : "invalid password");
console.log(obj.balanceEnquiry());

obj.fundTransfer(1003, 2000)

obj.paymentHistory()



//credit transaction