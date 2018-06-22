class Parents {
    constructor() {
        this.money = 100;
        this.myMoney = 100;
        alert("부모호출!");
    }
}
class Child extends Parents {
    getMoney() {
        return this.money;
    }
    getMyMoney() {
        //return this.myMoney;
        return 0;
    }
}
let child = new Child();
//alert(child.money); 
alert(child.getMoney());
alert(child.getMyMoney());
//# sourceMappingURL=class.js.map