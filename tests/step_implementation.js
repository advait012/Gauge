'use strict';
const {openBrowser, write, closeBrowser, goto, press, text, focus, textBox, toRightOf,setViewPort,openTab,setConfig} = require('taiko');
const assert = require('assert');
const headless = process.env.headless_chrome.toLowerCase() === 'true';
beforeSuite(async () => {
    await openBrowser({ headless: headless });
   // setConfig({navigationTimeout:50000});
});
afterSuite(async () => {
    await closeBrowser();
});

afterStep(function(context){
    var scenario = context.currentScenario
    // Code for before scenario

    gauge.screenshot();

})

step("Open the tab", async function() {
    await openTab('https://msn.com');

});

step("emulate to iphone6", async function() {
    await setViewPort({width:600, height:800})
    });

step('tell the  <names>', async function(names) {
     console.log(names);
    });

    step("display the <phonenumber>", async function(phonenumber) {
        console.log(phonenumber);
        });

step('Goto getgauge github page', async () => {
    await goto('https://github.com/getgauge');
});
step('Search for <query>', async query => {
    await focus(textBox(toRightOf('Pricing')));
    await write(query);
    await press('Enter');
});
step('Page contains <content>', async content => {
    assert.ok(await text(content).exists());
});
step('Print the name', async function () {
    await console.log('Hi');
});
step('Go to <url>', async function (url) {
    await console.log(url);
});
step('Write the <names>', async function (names) {
    await console.log(names);
});
step('Prompt the <phonenumber>', async function (phonenumber) {
    await console.log(phonenumber);
});
step('Check values are printed for students <name>', async function (name) {
    console.log(name);
});
step('Execute the case', async function () {
    console.log('tag');
});
step('Check the concept step', async function () {
    console.log('This is first step');
});
step('Take the answer', async function () {
    console.log('This is second step');
});
step('First step of context', async function () {
    console.log('context step');
});
step('Original step', async function () {
    console.log('original step');
});
step('This is teardown', async function () {
    console.log('teardown step');
});