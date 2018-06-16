const exp = require('express');
const app = exp();
const path = require("path");
app.use('/scripts', exp.static(__dirname + '/../node_modules'));
var url = '';

app.use('/' , (req,res,next)=>{
    url = req.url;
    if(url==='/'){
        url = '/index.html';
    }
    if(url.endsWith('.js') || url.endsWith('html')){
        res.sendFile(path.resolve(__dirname + '/../src' + url),(err)=>{
            if(err){
                res.sendFile(path.resolve(__dirname + '/../src/error.html'));
            }
        });
    }else{
        res.sendFile(path.resolve(__dirname + '/../src/error.html'));
    }
});
app.listen(80 , function(){
    console.log('80포트로 서버 시작');
})