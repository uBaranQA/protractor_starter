const HeaderPage = function() {

    const inputField = element(by.tagName('input'))
    
    this.createToDo = async function(todoName) {
        await inputField.sendKeys(todoName, protractor.Key.ENTER);
    }

    this.inputFieldVisible = async function() {
        return await inputField.isDisplayed();
    }

    this.getinputFieldAttribute = async function(attributeName) {
        return await inputField.getAttribute(attributeName);
    }
}

module.exports = new HeaderPage();