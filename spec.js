
/*
describe('it should login',()=>{

    browser.ignoreSynchronization = true;
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');

    var loginPage = require('./Login_Page');

    it('should login',()=>{
        
        loginPage.enterUserName("angular");
        loginPage.enterPassword("password");
        loginPage.enterDesc("angular");
        loginPage.clickLogin();
        loginPage.clickLogout();
      
    });
    it('shouldnot login',()=>{
        loginPage.enterUserName("prakash");
        loginPage.enterPassword("prakashvasan");
        loginPage.enterDesc("prakash");
        loginPage.clickLogin();
        var err = element(by.xpath('/html/body/div[3]/div/div/div/div[2]'));
        expect(err.getText()).toEqual('Username or password is incorrect');
    })

});
*/



describe('to check calc',()=>{
    browser.ignoreSynchronization = true;
    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');

    var calc = require('./Calculator');

    it('should check the calc',()=>{
        calc.enterFieldValue(10);
        calc.chooseAction();
        calc.enterAnotherValue(10);
        
        
        expect(by.xpath('/html/body/div[3]/table/tbody/tr/td[2]/span[1]')).toBe(10);
        browser.sleep('30000');
    })
})