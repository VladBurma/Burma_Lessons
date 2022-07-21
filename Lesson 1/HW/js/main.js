function getRandomBackgroundColor() {

  /* Задаємо функцію рандому від 0 до 255 */
  function getRandomIntInclusive() {
    return Math.floor(Math.random() * 256);
  }

  /* Задаємо функцію яка видає рандомне значення кольору у HEX */
  function getColorCode() {

    /* Задаємо масив де буде зберігатись код кольору #RRGGBB - [RR, GG, BB] */
    var colorArr = new Array();

    for(var i = 0; i < 3; i++){
      colorArr[i] = getRandomIntInclusive().toString(16);

      /* Треба для того, щоб корректно відображався колір у форматі з 6 символів, бо у випадку коли RGGBB, то це != RRGGBB, RGGBB == RRGGGG і ще BB. Тобто код кольора не буде відповідати кольору */
      if (colorArr[i].toString().length == 1) {
        colorArr[i] = colorArr[i].toString() + colorArr[i].toString();
      }
    }
    var color = '#' + colorArr.join('');
    
    return color;
  }
  
  /* Задаємо функцію яка змінює фон на наш рандомний колір і додає код кольору по центру екрана */
  function elementsToPage() {

    /* Видаляємо існуючий div з кодом кольору, якщо він існує. Потрібно для того, щоб кожен новий такий div зʼявлявся на місці попереднього */
    if (document.querySelector('div')){
      document.querySelector('div').remove();
    }

    var backgroundColor = getColorCode();
    
    document.body.style.backgroundColor = backgroundColor;

    var div = document.createElement('div');
    div.style.height = '100vh';
    div.style.width = '100vw';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
  
  
    var p = document.createElement('p');
    p.style.color = 'black';
    p.style.fontSize = '20px';
    p.style.fontWeight = '300';
    p.innerText = backgroundColor;
  
    div.appendChild(p);
  
    document.body.appendChild(div);
  }

  elementsToPage();

}

/* Викликаємо функцію одразу при завантаженні сторінки */
getRandomBackgroundColor();
