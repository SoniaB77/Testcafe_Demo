import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button"); 


fixture("First Fixture")    
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{    
    await t
        .typeText("#developer-name", "TAU")
        .click("#windows")
        .click("#submit-button"); 
});