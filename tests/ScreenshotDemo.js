fixture("First Fixture")    
    .page("https://devexpress.github.io/testcafe/")
    .beforeEach(async t => {
        await t 
            .maximizeWindow()
            .setTestSpeed(0.1)
            .setPageLoadTimeout(0);
    })

test
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{    
    await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .takeScreenshot() 
        .click("#submit-button");
});

test
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{    
    await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .takeElementScreenshot("#submit-button")
        .click("#submit-button") 
        .takeScreenshot(); 
});