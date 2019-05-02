const assert = require('assert');

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/');
        let a = browser.react$("TestButton").click();
    });
});