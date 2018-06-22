class Parents {
    constructor() {
        this.money = 100;
        this.myMoney = 100;
        alert("부모호출!");
    }
    getMyMoney() {
        return this.myMoney;
    }
}
class Child extends Parents {
    getMoney() {
        return this.money;
    }
    getMyMoney() {
        return super.getMyMoney();
    }
}
let child = new Child();
//alert(child.money); 
alert(child.getMoney());
alert(child.getMyMoney());
//# sourceMappingURL=class.js.map