var ptag;
var mainHeader;
var mainHeader2;
var codeupBorder;
var fontSize;
var allH1;
var allP;
var allLi;
var allEm;
var hoverIn;
var hoverOut;


$(document).ready(function () {
    //ID SELECT

    //turns the background of the main p-tag skyblue then alerts the contents of main p-tag
    ptag = $('#main-ptag');
    ptag.css('background-color', 'skyblue');
    alert($(ptag).text());

    //ID SELECT

    //turns background-color pink then alerts the contents of main header
    mainHeader = $('#main-header');
    mainHeader.css('background-color', 'green');
    alert($(mainHeader).text());

    //CLASS SELECT

    //turns border red 1px border
    codeupBorder = $('.codeup');
    codeupBorder.css({'border': 'solid red 1px'});

    // ELEMENT SELECT

    //changes the font size to 20px for all li elements
    fontSize = $('li');
    fontSize.css({'font-size': '20px'});

    //assigns all h1, p and li tags
    allH1 = $('h1');
    allP = $('p');
    allLi = $('li');

    //alerts the page the contents of all the h1 elements
    alert($(allH1).text());


    //combines all h1, p and li elements and highlights them all yellow!
    allEm = $("h1, p, li");
    allEm.css('background-color', '#ffffcc');

    // turns second h1 blue when clicked
    mainHeader2 = $('#main-header2');
    $(mainHeader2).click(function () {
        mainHeader2.css('background-color', 'lightblue');
    });

    //changes font size of all p tags to 18px
    $(allP).dblclick(function () {
        allP.css('font-size', '18px');
    });

    //this will turn text red
    hoverIn = function () {
        allLi.css('color', 'red');
    }

    //this will turn text back to black
    hoverOut = function () {
        allLi.css('color', 'black');
    }

    // this will make the functionality work for hovering
    $(allLi).hover(hoverIn, hoverOut);

});
