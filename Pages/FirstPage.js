const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown} = require('taiko');

function firstPage(){

    const cart = $("div.shopping_cart > a");

    this.clickOnCart=async function(){

await click(cart);

    }


}

module.exports=new firstPage();