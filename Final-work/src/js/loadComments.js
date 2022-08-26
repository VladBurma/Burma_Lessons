import TIME_SHOW from '/src/js/timeShow.js';

/* Функція завантаження і відмальовування коментарів */
const LOAD_COMMENTS = (id) => {
  const CURR_COMM = document.getElementById(id);
  /* Отримуємо коментарі до новини */
  const LOAD_NEWS_COMMENTS = async () => {
    await fetch(`https://newsfeedjs-default-rtdb.firebaseio.com/news/${id}/comments/.json`)
      .then((res) => res.json())
      .then((res) => {
        /* Створюємо заголовок з кількістю коментарів */
        const HEADING_DIV = document.createElement('div');
        HEADING_DIV.className = 'item__comments-wrapper';
        HEADING_DIV.innerHTML = `<h3 class="item__heading">Comments(${Object.entries(res).length})</h3>`;
        CURR_COMM.appendChild(HEADING_DIV);

        /* Переводимо отриманий обʼєкт в масив і сортуємо його по даті(від старих до нових) */
        const COMM_ARR = (Object.values(res));
        const COMM_SORT_ARR = COMM_ARR.sort((a, b) => a._time - b._time);

        /* Перебираємо коментарі і відмальовуємо їх */
        for (const key in COMM_SORT_ARR) {
          const COMMENT = document.createElement('div');
          COMMENT.className = 'item__comment';
          COMMENT.innerHTML = `
                    <div class="item__avatar">
                        <p class="item__avatar-text">${COMM_SORT_ARR[key].name[0].toUpperCase()}</p>
                    </div>
                    <div class="item__comment-content">
                        <div class="item__name-data comment">
                            <h3>${COMM_SORT_ARR[key].name}</h3>
                            <p class="item__data">${TIME_SHOW(COMM_SORT_ARR[key]._time, COMM_SORT_ARR[key].time)}</p>
                        </div>
                        <p>${COMM_SORT_ARR[key].comment}</p>
                    </div>
                    `;
          HEADING_DIV.appendChild(COMMENT);
        }
      });
  };
  LOAD_NEWS_COMMENTS();
};

export default LOAD_COMMENTS;
