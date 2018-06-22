const exp = require('express');
const app = exp();
const path = require("path");
app.use('/scripts', exp.static(__dirname + '/../node_modules'));
var url = '';
const rootPath = path.resolve(__dirname + '/../src');
const errPage = rootPath + '/views/error.html';

app.use('/' , (req,res,next)=>{
    url = req.url;
    if(url==='/'){
        url = '/views/index.html';
    }
    if(url.endsWith('.js') || url.endsWith('html')|| url.endsWith('.js.map')|| url.endsWith('.ts')){
        console.log(rootPath+url);
        res.sendFile(rootPath+url,(err)=>{
            if(err){
                console.log(err);
                res.sendFile(errPage);
            }
        });
    }else{
        res.sendFile(errPage);
    }
});

app.listen(80 , function(){
    console.log('80포트로 서버 시작');
})