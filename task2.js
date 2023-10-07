/**
Напишіть функцію changeCSS, яка спрацьовуватиме по кліку на кнопку
і змінюватиме стиль вмісту тега <p>:
колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS"
 */
const myBtn = document.querySelector("button");
myBtn.onclick = changeCSS;
function changeCSS() {
    const myText = document.querySelector("#text");
    myText.style.color = "orange";
    myText.style.fontSize = "20px";
    myText.style.fontFamily = "Comic Sans MS";
}
changeCSS(myText);
