const {openBrowser, write,switchTo, closeBrowser, goto, press, text, focus, textBox, toRightOf,click,
    reload,title,into,$,clear,scrollDown,link,inputField,dropDown,waitFor,checkBox,radioButton} = require('taiko');



function secondPage(){

const firstName=textBox({id:'text'});
const htmlForm=link('HTML contact form');
const menu=link('Selectmenu');
const dropDownValue=dropDown({id:'dropdowm-menu-1'});
const radioalink=link('Checkboxradio');
const radio=radioButton('Green');


this.clickRadioLink=async function(){
await click(radioalink);

}

this.clickRadioButton=async function(){

await radio.select();

}

this.enterFirstName=async function(){

    await waitFor(firstName);
    await write('Advait',into(firstName));
await waitFor(3000);
}

this.clickDropDownValue=async function(){

await click(menu);

}

this.getValue=async function(){

    await firstName.value().then(function(value){
console.log(value);

    })

}

this.selectValue=async function(){


    await waitFor(dropDownValue);
    await dropDownValue.select('SQL');
    await waitFor(6000);


}

this.clickTheHtmlLink=async function(){

await click(htmlForm);

}



}

module.exports= new secondPage();