var loginPage = function(){
    
    this.enterUserName = (value)=>{
        element(by.model('Auth.user.name')).sendKeys(value);
    };
    this.enterPassword = (value)=>{
        element(by.model('Auth.user.password')).sendKeys(value);
    };
    this.enterDesc = (value)=>{
        element(by.model('model[options.key]')).sendKeys(value);
    };
    this.clickLogin = ()=>{
        element(by.className('btn btn-danger')).click();
    };
    this.clickLogout = ()=>{
        element(by.linkText('Logout')).click();
    };
}

module.exports = new loginPage();