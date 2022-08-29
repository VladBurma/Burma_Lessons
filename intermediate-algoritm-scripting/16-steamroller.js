function steamrollArray(arr) {

    /* Створюємо новий масив у який помістимо всі наші значення, що не будуть масивами.
    Для цього пробігаємось по кожному елементу масиву і якщо він масив,
    то через concat додаємо його в finalArr. І коли ми його додаємо то викликаємо рекурсію на нашу функцію,
    яка буде перевіряти, чи не масив це, і якщо масив, то знову через concat додавати значення і викликати рекурсію.
    Всі інші значення, що не були масивами будуть пушитись у finalArr */

    let finalArr = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            finalArr = finalArr.concat(steamrollArray(item));
        } else finalArr.push(item);
    });
    return finalArr;
}

steamrollArray([[["a"]], [["b"]]]); //["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); //[1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); //[1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); //[1, {}, 3, 4]

// У вашому рішенні не повинні використовуватися методи Array.prototype.flat() або Array.prototype.flatMap()