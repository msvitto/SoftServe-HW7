/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
const myBtn1 = document.querySelector("button:nth-of-type(1)");
const myBtn2 = document.querySelector("button:nth-of-type(2)");
const myBtn3 = document.querySelector("button:nth-of-type(3)");
const myLink = document.querySelector("a");
function changeCSS() {
    myBtn1.addEventListener("click", function(){
        document.querySelector("body").style.backgroundColor ="blue";
    });
    myBtn2.addEventListener("dblclick", function(){
        document.querySelector("body").style.backgroundColor ="pink";
    });
    myBtn3.addEventListener("mousedown", function(){
        document.querySelector("body").style.backgroundColor ="brown";
    });
    myBtn3.addEventListener("mouseup", function(){
        document.querySelector("body").style.backgroundColor ="white";
    });
    myLink.addEventListener("mouseenter", function(){
        document.querySelector("body").style.backgroundColor ="yellow";
    });
    myLink.addEventListener("mouseleave", function(){
        document.querySelector("body").style.backgroundColor ="white";
    });
}   
changeCSS();