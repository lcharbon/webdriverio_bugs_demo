describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('/home');
        browser.waitUntil(() => { return browser.getUrl().endsWith("/home")});
        browser.react$("Input").addValue("Test");
        browser.react$("Button").click();
        browser.waitUntil(() => { return browser.getUrl().endsWith("/success")});
        browser.react$$("Button").click();
    });
});