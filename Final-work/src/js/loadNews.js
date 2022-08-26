import LOAD_COMMENTS from '/src/js/loadComments.js';
import TIME_SHOW from '/src/js/timeShow.js';

/* Отримуємо доступи */
const NEWS_FEED = document.getElementById('newsFeed');
const EMPTY = document.getElementById('emptyNews');

/* Функція завантаження і відмальовування новин */
const LOAD_NEWS = async () => {
  await fetch('https://newsfeedjs-default-rtdb.firebaseio.com/news.json')
    .then((res) => res.json())
    .then((res) => {
      /* Ховаємо блок з повідомленням про відсутність новин */
      if (res !== null) {
        EMPTY.className = 'hide';

        /* Додаємо ID новини в атрибут */
        for (const key in res) {
          res[key]._id = key;
        }

        /* Переводимо отриманий обʼєкт в масив і сортуємо його по даті(від нових до старих) */
        const NEWS_ARR = (Object.values(res));
        const NEWS_SORT_ARR = NEWS_ARR.sort((a, b) => b._time - a._time);

        /* Перебираємо новини і відмальовуємо їх */
        for (const key in NEWS_SORT_ARR) {
          const DIV = document.createElement('div');
          DIV.className = 'news__feed item';
          DIV.innerHTML = `
                    <div class="item__author">
                        <div class="item__avatar">
                            <p class="item__avatar-text">${NEWS_SORT_ARR[key].name[0]}</p>
                        </div>
                        <div class="item__name-data">
                            <h3>${NEWS_SORT_ARR[key].name}</h3>
                            <p class="item__data">${TIME_SHOW(NEWS_SORT_ARR[key]._time, NEWS_SORT_ARR[key].time)}</p>
                        </div>
                    </div>

                    <div class="item__image">
                        <img src="${NEWS_SORT_ARR[key].url}" alt="news about js">
                    </div>

                    <div class="item-text-wrapper">
                        <p class="item-text">${NEWS_SORT_ARR[key].news}</p>
                    </div>

                    <div class="item-indicators-wrapper">
                        <button class = "item__like-btn"
                        data-likes = "${NEWS_SORT_ARR[key].likes}"
                        data-id = "${NEWS_SORT_ARR[key]._id}" >
                            Likes: ${NEWS_SORT_ARR[key].likes}
                        </button>
                        <button class="item__comment-btn" data-comments = "${NEWS_SORT_ARR[key].comments} data-id = ${NEWS_SORT_ARR[key]._id}">
                            Comments: ${Object.entries(NEWS_SORT_ARR[key].comments).length}
                        </button>
                    </div>
                    <div id="${NEWS_SORT_ARR[key]._id}" class = "comments hide">
                        <div class="item__form-wrapper">
                            <form data-id = ${NEWS_SORT_ARR[key]._id} class = "form add-comment">
                                <textarea class="form__input" rows="4" name="comment" required placeholder="Add your comment"></textarea>
                                <div class="form__two-lines">
                                    <input class="form__input" type="text" name="name" placeholder="Your nickname" required>
                                    <input class="form__input" type="submit" value="Send">
                                </div>
                            </form>
                        </div>
                    </div>
                `;
          NEWS_FEED.appendChild(DIV);

          /* Завантажуємо коментарі до новини */
          LOAD_COMMENTS(NEWS_SORT_ARR[key]._id);
        }
      } else {
        /* Якщо новин немає повертаємо блок з повідомленням про їх відсутність */
        EMPTY.className = 'news__feed item';
      }
    });
};

export default LOAD_NEWS;
