var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
let str = tmp.greeting;
alert(str);
function logAccess(obj, prop, descriptor) {
    const delegate = descriptor.value;
    descriptor.value = function (param) {
        console.log(`${obj.constructor.name}'s ${prop} was called!`);
        return delegate.apply(obj, arguments);
    };
}
class MoneySafe {
    openSave(param) {
        this.open = true;
    }
}
__decorate([
    logAccess,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MoneySafe.prototype, "openSave", null);
const safe = new MoneySafe();
safe.openSave('test');
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