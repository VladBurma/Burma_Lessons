import './styles/index.scss';
import ADD_NEWS from '/src/js/addNews.js';
import LOAD_NEWS from '/src/js/loadNews.js';
import ADD_LIKES from '/src/js/addLikes.js';
import ADD_COMMENTS from '/src/js/addComments.js';

/* Функція для приховання лоадеру */
const loadFunc = async () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
};

/* Як тільки DOM дерево буде завантажене виконуємо вкладені функції одна за одною */
document.addEventListener('DOMContentLoaded', async () => {
  await LOAD_NEWS();
  await ADD_LIKES();
  await ADD_COMMENTS();
  setTimeout(() => {
    loadFunc();
  }, 1000); // Loader буде мінімум 1 секунду щоб не мерехтіти
});

/* Отримуємо доступи */
const ADD_NEWS_FORM = document.getElementById('addNewPostForm');
const URL_IMG_CHECK = document.getElementById('urlResult');
const IMG_CHECK_BTN = document.getElementById('imgCheck');

/* Вішаємо функцію на додавання новини */
ADD_NEWS_FORM.addEventListener('submit', (e) => {
  e.preventDefault();
  ADD_NEWS(ADD_NEWS_FORM);
});

/* Вішаємо функцію на показ зображення по url */
IMG_CHECK_BTN.addEventListener('click', () => {
  if (ADD_NEWS_FORM.url.value === '') {
    URL_IMG_CHECK.className = 'hide';
  } else {
    URL_IMG_CHECK.src = ADD_NEWS_FORM.url.value;
    URL_IMG_CHECK.classList.remove('hide');
  }
});
