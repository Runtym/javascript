var html:string = '';
function makeHtml(obj:any){
    html += obj + '<p>';
}
//any 데이터 타입
var an : any = 10;
makeHtml(`type of an : ${typeof an}`);
an = 'abc';
makeHtml(`type of an : ${typeof an}`);
an = true;
makeHtml(`type of an : ${typeof an}`);
an = [1,2];
makeHtml(`type of an : ${typeof an}`);

// null 데이터 타입
var nl : null = null;
makeHtml(`type of nl : ${typeof nl}`);

// undefinded 데이터 타입
var uf : undefined = undefined;
makeHtml(`type of uf : ${typeof uf}`);

//숫자형 데이터 타입
var num1 : number = 10;
var num2 : number = 10.2;
makeHtml(`num1 : ${num1}`);
makeHtml(`num2 : ${num2}`);

//문자형 데이터 타입
var str1 : string = 'abc';
var str2 : string = "abc";
makeHtml(`str1 : ${str1}`);
makeHtml(`str2 : ${str2}`);

//논리형 데이터 타입
var bl1 : boolean = true;
var bl2 : boolean = false;
var bl3 : boolean = null;
var bl4 : boolean;
makeHtml(`bl3 : ${bl3}`);
makeHtml(`bl4 : ${bl4}`);
makeHtml(`!bl3 : ${!bl3}`);
makeHtml(`!bl4 : ${!bl4}`);

//튜플형 데이터 타입
var tp : string|number = 'abc';
makeHtml(`type of tp : ${typeof tp}`);
tp = 3;
makeHtml(`type of tp : ${typeof tp}`);

//열거형 데이터 타입
enum Computer {Laptop,Desktop,Tablet}
makeHtml(`Computer.Laptop : ${Computer.Laptop}`);
makeHtml(`Computer[0] : ${Computer[0]}`);

window.onload = function(){
    var rDivObj = document.querySelector('#resultDiv');
    if(!rDivObj){
        rDivObj = document.createElement('div');
        rDivObj.id = 'resultDiv';
        document.body.appendChild(rDivObj);
    }
    rDivObj.innerHTML = '결과 : ' + html;
}