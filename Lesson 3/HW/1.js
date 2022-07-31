/*

  Задание написать простой слайдер.

    Есть массив с картинками из которых должен состоять наш слайдер.
    По умолчанию выводим первый элмемнт нашего слайдера в блок с id='slider'
    ( window.onload = func(){...} // window.addEventListener('load', function(){...}) )
    По клику на PrevSlide/NextSlide показываем предыдущий или следующий сладй соответствено.

    Для этого необходимо написать 4 функции которые будут:

    1. Срабатывать на событие load обьекта window и загружать наш слайд по умолчанию.
    2. RenderImage -> Очищать текущий контент блока #slider. Создавать нашу картинку и через метод аппенд чайлд вставлять её в слайдер.
    3. NextSlide -> По клику на NextSilde передавать currentPosition текущего слайда + 1 в функцию рендера
    4. PrevSlide -> Тоже самое что предыдущий вариант, но на кнопку PrevSlide и передавать currentPosition - 1
      + бонус сделать так что бы при достижении последнего и первого слада вас после кидало на первый и последний слайд соответственно.
      + бонсу анимация появления слайдов через навешивание дополнительных стилей

*/

/* Функція для кнопки Next. Якщо слайд останній, то присвоює значення 0 в currentPosition, якщо ні, то збільшує на 1 */
function nextSilde() {
  if (currentPosition == OurSliderImages.length - 1) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  renderImage();
}

/* Функція для кнопки Prev. Якщо слайд перший, то присвоює значення останнього слайду в currentPosition, якщо ні, то зменшує на 1 */
function prevSilde() {
  if (currentPosition == 0) {
    currentPosition = OurSliderImages.length - 1;
  } else {
    currentPosition--;
  }
  renderImage();
}

/* Функція renderImage, в якій ховаємо існуючу картинку через присвоєння класу hide і додаємо нову, поки що невидиму картинку з класом appear */
function renderImage() {
  slider.querySelector('img').className = 'hide';
  var imgNew = document.createElement('img');
  /* Сюди отримуємо оновленне значення currentPosition, в залежності від кнопки, що ми натиснули */
  imgNew.src = OurSliderImages[currentPosition];
  slider.appendChild(imgNew);
  imgNew.classList.add('appear');

}

/* 
Функція showNewImage(викликається після завершення анімацій у функції renderImage) у якій через forEach пробігаємось по усім тегам img в slider.
Якщо тег має клас hide, то видаляємо його. В іншому випадку(клас appear): замінюємо на клас show */
function showNewImage() {
  var images = slider.querySelectorAll('img');
  images.forEach((item) => {
    if (item.classList.contains("hide")) {
      item.remove();
    } else {
      item.className = 'show';
    }
  });
}



/* Отрмуємо потрібні доступи та визначаємо змінні */
var OurSliderImages = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg', 'images/cat4.jpg', 'images/cat5.jpg', 'images/cat6.jpg', 'images/cat7.jpg', 'images/cat8.jpg'];
var currentPosition = 0;
var btnNextSilde = document.getElementById('NextSilde');
var btnPrevSilde = document.getElementById('PrevSilde');
var slider = document.querySelector('#slider');

/* Створюємо перше зображення в слайдері */
var img = document.createElement('img');
img.src = OurSliderImages[currentPosition];

/* Виводимо перше зображення по завантаженню */
window.addEventListener('load', function () {
  slider.appendChild(img);
});

/* Навішуємо функції на кнопки */
btnNextSilde.addEventListener('click', nextSilde);
btnPrevSilde.addEventListener('click', prevSilde);

/* Додаємо функцію, що буде виконуватись після того, як сховається існуюча картинка і додасться нова */
slider.addEventListener('transitionend', showNewImage);


