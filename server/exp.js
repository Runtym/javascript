const exp = require('express');
const app = exp();

app.use('/' , (req,res,next)=>{
    res.sendFile('./index.html' , {root:__dirname});
});
app.listen(80 , function(){
    console.log('80포트로 서버 시작');
})