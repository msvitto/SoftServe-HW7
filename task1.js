/**
1. створить нове вікно розміром 300х300 пікселів;
2. із затримкою 2 сек змініть розміри вікна на 500х500 пікселів;
3. із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200);
4. із затримкою 2 сек закрийте вікно.
 */
const newWindow= window.open("","","width=300, height=300");
setTimeout(function(){
    newWindow.resizeTo(500, 500);
},2000);
setTimeout(function(){
    newWindow.moveTo(200,200);
},4000);
setTimeout(function(){
    newWindow.close();
},6000);