var calc = function(){
    this.enterFieldValue = (value)=>{
        element(by.model('first')).sendKeys(value);
       
    };
    this.chooseAction = ()=>{
        element.all(by.options('value for (key, value) in operators')).get(0).click();
    };
    this.enterAnotherValue = (value)=>{
        element(by.model('second')).sendKeys(value);
        element(by.buttonText('Go!')).click();
    };
        
    
}

module.exports = new calc();