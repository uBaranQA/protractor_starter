describe('Todo mvc e2e tests', function () {

    beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    })

    it('should display input field', function () {
        

        const inputField = element(by.tagName('input'));

        expect(inputField.isPresent()).toBe(true);
        expect(inputField.getAttribute('placeholder')).toEqual("What needs to be done?");

        
    }),
    it('should accept new todo', async function() {
        debugger
        const taskLabel = "task new";

        const taskNameLocator = "//label[contains(text(), '" + taskLabel + "')]"

        const inputField = element(by.tagName('input'));

        await inputField.sendKeys(taskLabel);
        await inputField.sendKeys(protractor.Key.ENTER);

        /* await inputField.sendKeys('second task');
        await inputField.sendKeys(protractor.Key.ENTER); */

        const taskList = element(by.className('todo-list'));
        const taskName = element(by.xpath(taskNameLocator));//element(by.tagName('label'));

        expect(await taskList.isPresent()).toBe(true);
        expect(await taskName.isPresent()).toBe(true);
        expect(await taskName.getText()).toEqual(taskLabel);

        const taskListArray = await element.all(by.className('view'));
        debugger;
        expect(await taskListArray.length).toEqual(1);
    }); 
    /* it('should send keys and press enter',function(){
        const taskLabel = "task numer jeden"
        browser.get('http://todomvc.com/examples/angular2/')

        const inputField =  element(by.tagName('input'))
        inputField.sendKeys(taskLabel, protractor.Key.ENTER);
        
        const taskList = element(by.className('view'));
        const taskName = element(by.tagName('label'));

        expect(taskList.isPresent()).toBe(true);
        expect(taskName.isPresent()).toBe(true);
        expect(taskName.getText()).toEqual(taskLabel);
    }); */
});