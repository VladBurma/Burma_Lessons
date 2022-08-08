/*

  Задание:

    1. Написать конструктор объекта комментария который принимает 3 аргумента
    ( имя, текст сообщения, ссылка на аватаку);

    {
      name: '',
      text: '',
      avatarUrl: '...jpg'
      likes: 0
    }
      + Создать прототип, в котором будет содержаться ссылка на картинку по умлочанию
      + В прототипе должен быть метод который увеличивает счетик лайков

    var myComment1 = new Comment(...);

    2. Создать массив из 4х комментариев.
    var CommentsArray = [myComment1, myComment2...]

    3. Созадть функцию конструктор, которая принимает массив коментариев.
      И выводит каждый из них на страничку.

    <div id="CommentsFeed"></div>


*/

/* Функція конструктор коментарів */
function Comment(name, text, avatarUrl) {
  this.name = name;
  this.text = text;
  this.avatarUrl = avatarUrl;
  this.likes = 0;
}

/* Для зручності виніс всі данні в окремий обʼєкт */
const DATA = {
  name: ['Максим', 'Сніжанна', 'Микола', 'Надія'],
  comments: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    'Exercitation ullamco laboris nisi ut aliquipt, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  ],
  images: [
    'https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1659966019~hmac=5ae9484daaad82927dbef769df0a1282',
    'https://cdn-icons.flaticon.com/png/512/4140/premium/4140045.png?token=exp=1659972356~hmac=f8d7ab36c1ed9020ebafd894e56ae913',
    'https://cdn-icons.flaticon.com/png/512/4140/premium/4140044.png?token=exp=1659972364~hmac=ce79c280376c7852ec15a178d44c788a',
    //На останній комент не буде зображення
  ]
};

/* Створюю обʼєкт, що буде прототипом для коментрарів */
const PROTOTYPE = {
  /* Збережене дефолтне зображення */
  avatarDefault: 'img/default.png',
  /* Функція збільшення числа лайків */
  likesUp: function () {
    this.likes++;
  }
};

/* Масив в якому будуть зберігатись коментарі */
const COMMENTS = [];

/* Наповнюю масив коментарями і одразу встановлюю кожному обʼєкту COMMENTS[i] прототип PROTOTYPE */
for (let i = 0; i < 4; i++) {
  COMMENTS[i] = new Comment(DATA.name[i], DATA.comments[i], DATA.images[i]);
  Object.setPrototypeOf(COMMENTS[i], PROTOTYPE);
}

/* Отримую доступ */
const COMMENTS_FEED = document.getElementById('commentsFeed');

/* Функція, що прийматиме масив коментарів і виводитиме їх на сторінку */
function CommentsToPage(arr) {

  /* Пробігаємось по кожному коментарю */
  arr.forEach((comment) => {

    /* Створюємо div обгортку для коментаря */
    let divCommentsItem = document.createElement('div');
    divCommentsItem.classList.add('comments-item');

    /* Створюємо зображення - аватар */
    let img = document.createElement('img');

    /* Якщо немає посилання на зображення, то ставимо дефолтну картинку */
    if (comment.avatarUrl === undefined) {
      img.src = comment.avatarDefault;
    } else {
      img.src = comment.avatarUrl;
    }

    /* Створюємо div обгортку для контенту */
    let divContent = document.createElement('div');
    divCommentsItem.classList.add('comments-item__content');

    /* Створюємо імʼя */
    let h3 = document.createElement('h3');
    h3.innerText = comment.name;

    /* Створюємо сам коментар */
    let text = document.createElement('p');
    text.innerText = comment.text;

    /* Створюємо кнопку Likes, що викликає метод likesUp з прототипу */
    let likesButton = document.createElement('button');
    likesButton.innerText = 'Likes';
    likesButton.addEventListener('click', function () {
      comment.likesUp();
      likesButton.innerText = 'Likes ' + comment.likes;
    });

    /* Створюємо правильну структуру та додаємо коментар на сторінку */
    divContent.appendChild(h3);
    divContent.appendChild(text);
    divContent.appendChild(likesButton);

    divCommentsItem.appendChild(img);
    divCommentsItem.appendChild(divContent);

    COMMENTS_FEED.appendChild(divCommentsItem);
  });
}
new CommentsToPage(COMMENTS);