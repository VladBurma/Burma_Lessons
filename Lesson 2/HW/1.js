/* Отримуємо потрібні нам доступи */
var buttons = document.querySelectorAll('.showButton');
var tabContainer = document.getElementById('tabContainer');
var tabs = document.querySelectorAll('.tab');

/* Функція, що знаходить натиснуту кнопку і додає клас active до табу з відповідним атрибутом data */
function tabShow(dataNumber){
  var findButton = document.querySelector('.showButton[data-tab="'+ dataNumber +'"]');
  findButton.onclick = function(){
    hideAllTabs();
    var findTab = tabContainer.querySelector('.tab[data-tab="'+ dataNumber +'"]');
    findTab.classList.add('active');
  };
}

/* Функція, що перебирає всі таби та видаляє з них клас active */
function hideAllTabs(){
  tabs.forEach(item => item.classList.remove('active'));
}

/* Перебираємо кнопки по атрибуту data */
buttons.forEach(item => tabShow(item.dataset.tab));