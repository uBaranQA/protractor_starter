describe('Todo mvc e2e tests',function(){

    it('should display input field',function(){
        browser.get('http://todomvc.com/examples/angular2/')

       const inputField =  element(by.tagName('input'))

   
        expect(inputField.isPresent()).toBe(true);
        expect(inputField.getAttribute('placeholder')).toEqual("What needs to be done?");
   });

   it('should send keys and press enter',function(){
       const taskLabel = "task numer jeden"
       browser.get('http://todomvc.com/examples/angular2/')

       const inputField =  element(by.tagName('input'))
       inputField.sendKeys(taskLabel, protractor.Key.ENTER);
       
       const taskList = element(by.className('view'));
       const taskName = element(by.tagName('label'));

       expect(taskList.isPresent()).toBe(true);
       expect(taskName.isPresent()).toBe(true);
       expect(taskName.getText()).toEqual(taskLabel);
   });
   
}); 