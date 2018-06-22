var html = '';
function makeHtml(obj) {
    html += obj + '<p>';
}
//any 데이터 타입
var an = 10;
makeHtml(`type of an : ${typeof an}`);
an = 'abc';
makeHtml(`type of an : ${typeof an}`);
an = true;
makeHtml(`type of an : ${typeof an}`);
an = [1, 2];
makeHtml(`type of an : ${typeof an}`);
// null 데이터 타입
var nl = null;
makeHtml(`type of nl : ${typeof nl}`);
// undefinded 데이터 타입
var uf = undefined;
makeHtml(`type of uf : ${typeof uf}`);
//숫자형 데이터 타입
var num1 = 10;
var num2 = 10.2;
makeHtml(`num1 : ${num1}`);
makeHtml(`num2 : ${num2}`);
//문자형 데이터 타입
var str1 = 'abc';
var str2 = "abc";
makeHtml(`str1 : ${str1}`);
makeHtml(`str1 : ${str1}`);
//논리형 데이터 타입
var bl1 = true;
var bl2 = false;
var bl3 = null;
var bl4;
makeHtml(`bl3 : ${bl3}`);
makeHtml(`bl4 : ${bl4}`);
makeHtml(`!bl3 : ${!bl3}`);
makeHtml(`!bl4 : ${!bl4}`);
//튜플형 데이터 타입
var tp = 'abc';
makeHtml(`type of tp : ${typeof tp}`);
tp = 3;
makeHtml(`type of tp : ${typeof tp}`);
//열거형 데이터 타입
var Computer;
(function (Computer) {
    Computer[Computer["Laptop"] = 0] = "Laptop";
    Computer[Computer["Desktop"] = 1] = "Desktop";
    Computer[Computer["Tablet"] = 2] = "Tablet";
})(Computer || (Computer = {}));
makeHtml(`Computer.Laptop : ${Computer.Laptop}`);
makeHtml(`Computer[0] : ${Computer[0]}`);
window.onload = function () {
    var rDivObj = document.querySelector('#resultDiv');
    if (!rDivObj) {
        rDivObj = document.createElement('div');
        rDivObj.id = 'resultDiv';
        document.body.appendChild(rDivObj);
    }
    rDivObj.innerHTML = '결과 : ' + html;
};
//# sourceMappingURL=data-type.js.map