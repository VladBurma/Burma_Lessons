/* Функція перезавантаження сторінки */
const RELOAD = async () => {
  window.location.reload();
};

/* Функція додавання новини */
const addNews = async (form) => {
  const newsObj = {
    name: form.name.value,
    news: form.news.value,
    url: form.url.value,
    _time: new Date().getTime(),
    time: new Date().toLocaleString(),
    likes: 0,
    comments: '',
  };

  await fetch('https://newsfeedjs-default-rtdb.firebaseio.com/news.json', {
    method: 'POST',
    body: JSON.stringify(newsObj),
  });

  /* Перезавантажуємо сторінку після того, як дані надіслані на сервер */
  await RELOAD();
};

export default addNews;
