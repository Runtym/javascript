class User{
    id:string;
    name:string;
    constructor(id:string,name:string){
        this.id = id;
        this.name = name;
    }
}

var user:User = new User('red','박경훈');
var objMap = {};
function test(event){
    let el = event.target;
    let id : string = el.getAttribute('data-cus-bind');
    objMap['DIV'+id].innerHTML = el.value;
}

window.onload = function(){
    let dataBindings = document.querySelectorAll('[data-cus-bind]');
    for(let el of dataBindings){
        let id:string  = el.getAttribute('data-cus-bind');
        if(id.indexOf('.')){
            let vars = id.split('.');
            let pVar = vars[0];
            let cVar = vars[1];
            let value = this[pVar][cVar];
            if(el.tagName=='DIV'){
                objMap['DIV' + id] = el;
                el.innerHTML = value;
            }else if(el.tagName=='INPUT'){
                objMap['INPUT' + id] = el;
                // var inputObj = (<HTMLInputElement>el)
                // inputObj.value = value;
                el.setAttribute('value',value);
                el.addEventListener('keyup',test);
            }
        }
    }
}