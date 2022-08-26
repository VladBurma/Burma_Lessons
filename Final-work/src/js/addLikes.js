/* Функція додавання лайків */
const ADD_LIKES = () => {
  const LIKE_BTN = document.querySelectorAll('.item__like-btn');

  /* Вішаємо функцію на кожну кнопку */
  LIKE_BTN.forEach((item) => {
    let likesQuantity = item.dataset.likes;
    item.addEventListener('click', async (e) => {
      e.target.innerText = `Likes ${++likesQuantity}`;

      await fetch(`https://newsfeedjs-default-rtdb.firebaseio.com/news/${item.dataset.id}/.json`, {
        method: 'PATCH',
        body: JSON.stringify({
          likes: likesQuantity,
        }),
      });
    });
  });
};

export default ADD_LIKES;
