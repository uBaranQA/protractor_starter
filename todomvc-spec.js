const headerPage = require("./pages/header.pageObject");
const mainSection = require("./pages/main-section.pageObject")

describe('Todo mvc e2e tests', function () {

    beforeEach(function () {
        browser.get('http://todomvc.com/examples/angular2/');
    })

    it('should display input field', function () {
        expect(headerPage.inputFieldVisible()).toBe(true);
        expect(headerPage.getinputFieldAttribute('placeholder')).toEqual("What needs to be done?");      
    }),
    it('should accept new todo', async function() {
        const taskLabel = "task new";

        headerPage.createToDo(taskLabel);

        expect(mainSection.getTaskNames()).toContain(taskLabel);
    }); 
});