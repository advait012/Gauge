const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown,link,button,textField,waitFor} = require('taiko');










step("Open the browser", async function() {
    
    await openBrowser({headless: false,});
    //Sargs: ["--start-fullscreen"]


    });

    step("Hit the URL", async function() {
        await goto('http://automationpractice.com/index.php');
        });
        step("Press the enter", async function() {
            await press('Enter');
            await scrollDown();
            });


        step("Clear the text", async function() {
            await clear();
            });

        step("Write the text", async function() {
            
            await write('Testing text',into($('#search_query_top')));
            });        

        step("Print the URL", async function() {
         await title().then(function(item){

console.log(item);
         });
            });

            step("Click the link", async function() {
                let  linkName=link('Sign in');
                await click(linkName);
                
                });

                step("Enter the text", async function() {
                   let textName=textField('Search');
                     write('emailid',into(textName));
                    });

                step("Click the button", async function() {
                    let buttonName=button('Create an account');
                    await click(buttonName).then(function(){
                        waitFor(5000);
                    });
                    });


            step("Click the element", async function() {
              
   
                var fp =  require('../Pages/FirstPage.js');
                await fp.clickOnCart();
                });


        step("Reload the URL", async function() {
            await reload('http://automationpractice.com/index.php');
            });

        step("Switch to next tab", async function() {
            await click("Ecommerce software by PrestaShop™");
            await switchTo("Create and develop your business with PrestaShop");
            await click('Create my store');
            })

            step("Hit the demoqa <URL>", async function(URL) {
              await goto(URL);
                });

                step("Enter the firstName", async function() {
                    let sp= require('../Pages/SecondPage.js');
                    
                    await sp.enterFirstName();
                    });

                    step("Retrieve the value", async function() {
                        let dp = require('../Pages/SecondPage.js');
                        
                        await dp.getValue();
                        
                        });

                        step("Retrieve the text", async function() {
                            var temp = $('div._5iyx');
                            await temp.text().then(function(value){
                                console.log(value);

                            })

                            });

                    step("Select the dropdown value", async function() {
                        let dp = require('../Pages/SecondPage.js');
                        
                        await dp.selectValue();
                        });

                        step("Check the radio button", async function() {
                            let dp = require('../Pages/SecondPage.js');
                            
                            await dp.clickRadioButton();
                            await waitFor(5000);
                            });
