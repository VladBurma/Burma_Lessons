/* Функція перезавантаження сторінки */
const RELOAD = async () => {
  window.location.reload();
};

/* Функція для додавання коментаря */
const ADD_COMMENTS = () => {
  const COMMENTS_BTN = document.querySelectorAll('.item__comment-btn');

  /* Вішаємо функцію для відображення/приховання коментарів */
  COMMENTS_BTN.forEach((item) => {
    item.addEventListener('click', (e) => {
      const COMM_BLOCK = e.target.parentElement.nextElementSibling;
      COMM_BLOCK.classList.toggle('hide');
      const COMM_FORM = COMM_BLOCK.querySelector('.add-comment');

      /* Вішаємо функцію для отримання нового коментаря */
      COMM_FORM.addEventListener('submit', async (event) => {
        event.preventDefault();
        const ID = event.target.dataset.id;
        const COMMENT = {
          name: COMM_FORM.name.value,
          comment: COMM_FORM.comment.value,
          _time: new Date().getTime(),
          time: new Date().toLocaleString(),
        };

        await fetch(`https://newsfeedjs-default-rtdb.firebaseio.com/news/${ID}/comments/.json`, {
          method: 'POST',
          body: JSON.stringify(COMMENT),
        });

        /* Перезавантажуємо сторінку після того, як дані надіслані на сервер */
        await RELOAD();
      });
    });
  });
};

export default ADD_COMMENTS;
