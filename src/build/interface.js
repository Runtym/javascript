class Login {
    constructor(test) {
        this.test = test;
    }
    login() {
        if (this.test.id == 'test') {
            if (this.test.pwd == 'test') {
                return true;
            }
        }
        return false;
    }
}
var login = new Login({ id: 'test', pwd: 'test' });
if (login.login()) {
    alert('로긴 성공!');
}
else {
    alert('로긴 실패');
}
//# sourceMappingURL=interface.js.map