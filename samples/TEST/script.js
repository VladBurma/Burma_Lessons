const ADD_NEWS_FORM = document.getElementById('addNewPostForm');

ADD_NEWS_FORM.addEventListener('submit', e => {
    e.preventDefault();
    let news = {
        name: ADD_NEWS_FORM.name.value,
        news: ADD_NEWS_FORM.news.value,
        url: ADD_NEWS_FORM.url.value
    };

    return console.log(news);
});


