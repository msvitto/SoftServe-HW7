/**
Потрібно реалізувати логіку, яка буде формувати 2 випадаючих списки.
У першому містяться назви країн, у другому – назви міст.
Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку
певна країна - в правому випадаючому списку з'являлися міста цієї країни.
Список міст формується динамічно, через JavaScript.
Також потрібно нижче в параграфі вивести назву обраної країни і місто.
Спробуйте не вносити зміни в html файл.
 */
const country = document.getElementById("country");
// const usa = country.querySelector("[usa]");
// const ger = country.querySelector("[ger]");
// const ukr = country.querySelector("[ukr]");
const cities = document.getElementById("cities");

const myMessage = document.querySelector("p");

const cityData = {
    usa: ["New-York", "Washington", "Boston", "Chikago"],
    ger: ["Berlin", "Munich", "Hamburg"],
    ukr: ["Kyiv", "Lviv", "Odesa"]
};
country.addEventListener("change", function(){
    cities.innerHTML = "";
    const selectedCountry = country.value;
    if(cityData[selectedCountry]){
        cityData[selectedCountry].forEach(function (cityName) {
        addCityOption(cityName);
        });
    }
    updateMessage;
});
function addCityOption(cityName){
    const cityOption = document.createElement("option");
    cityOption.textContent = cityName;
    cities.appendChild(cityOption);
}
country.addEventListener("change", function(){
    updateMessage();
});
cities.addEventListener("change", function () {
    updateMessage();
  });

function updateMessage(){
    const selectedCountry = country.options[country.selectedIndex].text;
    const selectedCity = cities.value;
    myMessage.textContent = `${selectedCountry}, ${selectedCity}`;
}
updateMessage();




