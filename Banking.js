var bank = function(){
    this.clickCustomerLogin = ()=>{
        element(by.buttonText('Customer Login')).click();
    };
    this.chooseAction = ()=>{
        element.all(by.id('userSelect')).get(1).click();
    }
    this.clickLogin = ()=>{
        element(by.buttonText('Login')).click();
    }
}