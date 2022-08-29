function sumAll(arr) {

    /* Сортуємо вхідний масив і птім на кожному значенні
    збільшуємо суму на значення
    */

    let sum = 0;

    const ARR_SORT = arr.sort((a, b) => a - b);

    for (let i = ARR_SORT[0]; i <= ARR_SORT[1]; i++) {
        sum += i;
    }
    return sum;
}

sumAll([1, 4]); // 10
sumAll([4, 1]); // 10
sumAll([5, 10]); // 45
sumAll([10, 5]); // 45