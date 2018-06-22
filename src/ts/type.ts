var Templates = function(root, id){
    var tmpObj = root.querySelector('#' + id);
    var instance = root.importNode(tmpObj.content,true);
    this.show = function(){
        root.body.appendChild(instance);
        //root.body.insertBefore(instance,root.body.childNodes[0]);
    }
}

class Greeting {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    sayHello() {
        return "Hello " + this.greeting;
    }
} 
let tmp = new Greeting("World!!");
let str:string = tmp.greeting;
alert(str);

function logAccess(obj,prop,descriptor){
    const delegate = descriptor.value;
    descriptor.value = function(...params){
        console.log(`${obj.constructor.name}'s ${prop}(${params}) was called!`);
        return delegate.apply(obj,arguments);
    }
}

function validationLogin(obj,prop,descriptor){
    const delegate = descriptor.value;
    descriptor.value = function(user:User){
        console.log('아이디 비번 유효성검사 시작');
        if(user.id.trim().length<4){
            alert('아이디는 3글자 이상입니다.');
            return false;
        }
        return delegate.apply(obj,arguments);
    }
}

interface User{
    id:string;
    pwd:string;
}
class MoneySafe{
    open:boolean;
    @logAccess
    openSave(param:any,int):void{
        this.open = true;
    }
    @validationLogin
    login(user:User):boolean{
        return true;
    }
}

const safe = new MoneySafe();
safe.openSave('test',1);
safe.login({id:'red',pwd:'123'});
window.onload = function(){
    var rDivObj = document.querySelector('#resultDiv');
    if(!rDivObj){
        rDivObj = document.createElement('div');
        rDivObj.id = 'resultDiv';
        document.body.appendChild(rDivObj);
        rDivObj.innerHTML = '결과 : ' + tmp.sayHello();
    }
}
//    "javascript.implicitProjectConfig.experimentalDecorators": true