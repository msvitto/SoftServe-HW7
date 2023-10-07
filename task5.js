/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",\
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
Нове повідомлення додається до уснуючих.
додаткове випробування: обмежити кількість виведених повідомлень до 5,
при додаванні повіомлення після 5го, зі сторінки має зникнути найстаріше повідомлення.
*/
const myBtn = document.querySelector("button");
const myDiv = document.createElement("div");
document.body.appendChild(myDiv);
const maxMessages= 5;
const messages =[];

myBtn.addEventListener("click", (event)=>{
    addMessage("I was pressed!");
});
myBtn.addEventListener("mouseenter", (event)=>{
    addMessage("Mouse on me!");
});
myBtn.addEventListener("mouseleave", (event)=>{
    addMessage("Mouse is not on me!");
});
function addMessage (message){
    messages.push(message);
    if(messages.length>maxMessages){
        messages.shift();
    }
    myDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join(" ");
}

