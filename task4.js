/**
 Реалізуйте логіку видалення вибраного елементу списку при натисканні на кнопку.
 Видаляти елементи можна в будь якому порядку.
 */
const myBtn = document.querySelector("#myBtn");
const mySelector = document.querySelector("#mySelector");
myBtn.onclick = function deleteOption(){
    let selectedOptionIndex = mySelector.selectedIndex;
    if (selectedOptionIndex!== -1){
        mySelector.remove(selectedOptionIndex);
    }
}
