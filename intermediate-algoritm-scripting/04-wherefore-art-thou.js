function whatIsInAName(collection, source) {

    /* Отримуємо всі ключі source в масив і перебираємо кожен елемент collection.
    Для кожного елемента перебираємо sourceKeys. Якщо в елементі collection не буде
    потрібного ключа, або його значення не буде рівним нашому то виходимо з циклу.
    В іншому випадку пушимо цей елемент в масив arr
    */

    let arr = [];
    // Змініть код лише під цим рядком
    let sourceKeys = Object.keys(source);
    collection.forEach(element => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!element.hasOwnProperty(sourceKeys[i]) || element[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return;
            }
        }
        arr.push(element);
    });
    // Змініть код лише над цим рядком
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
// [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 });
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 });
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
// [{ "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat": 2 }], { "apple": 1, "bat": 2 });
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
whatIsInAName([{ "a": 1, "b": 2, "c": 3 }], { "a": 1, "b": 9999, "c": 3 });
// []
whatIsInAName([{ "a": 1, "b": 2, "c": 3, "d": 9999 }], { "a": 1, "b": 9999, "c": 3 });
// []
