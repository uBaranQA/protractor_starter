export default class HeaderPage {

    constructor() {
        this.inputField = element(by.tagName('input'));
    }

    function createToDo(todoName) {
        inputField.sendKeys(todoName, protractor.Key.ENTER)
    }
}