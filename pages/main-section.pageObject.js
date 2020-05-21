const MainSection = function() {
    const taskList = element.all(by.className('view'));
    const taskName = element(by.tagName('label'));

    this.getTaskNames = async function() {
        return await element.all(by.className('view')).getText();
    }
}

module.exports = new MainSection();