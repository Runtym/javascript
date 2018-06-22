

class Parents{
    protected money:number = 100;
    private myMoney:number = 100;
    constructor(){
        alert("부모호출!");
    }
    getMyMoney():number{
        return this.myMoney;
    }
}

class Child extends Parents{
    getMoney():number{
        return this.money;
    }
    getMyMoney():number{
        return super.getMyMoney();
    }
}

let child : Child = new Child();

//alert(child.money); 
alert(child.getMoney());
alert(child.getMyMoney());
 