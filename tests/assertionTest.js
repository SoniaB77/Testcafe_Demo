import {Selector} from 'testcafe';

const developerName = Selector("#developer-name");
const osOption = Selector("#windows");
const submitButton = Selector("#submit-button"); 


fixture("First Fixture")    
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t =>{  
    const developerNameElement = 
    await developerName.with({visibilityCheck:true})(); 
    await t
        .expect(developerNameElement.value).eql('', 'input is empty')
        .typeText("#developer-name", "TAU")
        .expect(developerName.value).eql('TAU', 'input contains "TAU"')
        .click("#windows")
        .click("#submit-button"); 
});