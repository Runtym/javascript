var Templates = function (root, id) {
    var tmpObj = root.querySelector('#' + id);
    var instance = root.importNode(tmpObj.content, true);
    this.show = function () {
        root.body.appendChild(instance);
        //root.body.insertBefore(instance,root.body.childNodes[0]);
    };
};
class Greeting {
    constructor(message) {
        this.greeting = message;
    }
    sayHello() {
        return "Hello " + this.greeting;
    }
}
let tmp = new Greeting("World!!");
window.onload = function () {
    var rDivObj = document.querySelector('#resultDiv');
    if (!rDivObj) {
        rDivObj = document.createElement('div');
        rDivObj.id = 'resultDiv';
        document.body.appendChild(rDivObj);
        rDivObj.innerHTML = '결과 : ' + tmp.sayHello();
    }
};
//# sourceMappingURL=common.js.map