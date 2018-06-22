

class Parents{
    protected money:number = 100;
    private myMoney:number = 100;
    constructor(){
        alert("부모호출!");
    }
}

class Child extends Parents{
    getMoney():number{
        return this.money;
    }
    getMyMoney():number{
        //return this.myMoney;
        return 0;
    }
}

let child : Child = new Child();

//alert(child.money); 
alert(child.getMoney());
alert(child.getMyMoney());
 