class Parent{
    phone(){
        console.log("have redmi 10 max pro");
    }
}

class Child extends Parent{
    phone()
        {
            super.phone()
            console.log("have iphone 12");
        }
    
}
var child=new Child()
child.phone()
