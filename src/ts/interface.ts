interface Test{
    id:string;
    pwd:string;
}


class Login{
    test:Test;
    constructor(test:Test){
        this.test =test;
    }

    login():boolean{
        if(this.test.id=='test'){
            if(this.test.pwd=='test'){
                return true;
            }
        }
        return false;
    }
}

var login : Login = new Login({id:'test',pwd:'test'});
if(login.login()){
    alert('로긴 성공!');
}else{
    alert('로긴 실패');
}