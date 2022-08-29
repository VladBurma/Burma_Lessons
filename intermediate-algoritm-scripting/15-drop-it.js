function dropElements(arr, func) {
    
    /* Створюємо копію нашого масиву, з якого і будемо видаляти елементи.
    А проходитись ми будемо по заданому масиву.
    Якщо func дать true, то виходимо з циклів, якщо false, то видаляємо перший елемент
    */

    let finalArr = [...arr];
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i])) {
            finalArr.shift();
        } else break;
    }
    return finalArr;
}


dropElements([1, 2, 3, 4], function (n) { return n >= 3; }); //[3, 4].
dropElements([0, 1, 0, 1], function (n) { return n === 1; }); //[1, 0, 1].
dropElements([1, 2, 3], function (n) { return n > 0; }); //[1, 2, 3].
dropElements([1, 2, 3, 4], function (n) { return n > 5; }); //[].
dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; }); //[7, 4].
dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; }); //[3, 9, 2].