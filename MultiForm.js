var multiForm = function(){
        this.pagechange = ()=>{
            element(by.xpath('//*[@id="form-views"]/div[2]/div/a')).click();         
            

        };


}

module.exports = new multiForm();