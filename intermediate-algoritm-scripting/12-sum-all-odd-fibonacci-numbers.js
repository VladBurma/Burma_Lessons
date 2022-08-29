function sumFibs(num) {
    
    /* Задаємо початкові значення і рахуємо суму чисел послідовності Фібоначі до заданого числа.
    Під час циклу перевіряємо числа на парність, якщо непарне, то додаємо до sumOdd.
    */

    let prevNum = 0;
    let currNum = 1;
    let sum = 0;
    let sumOdd = 0;
    while (currNum <= num) {
        if (currNum % 2 !== 0) sumOdd += currNum;
        sum = prevNum + currNum;
        prevNum = currNum;
        currNum = sum;
    }
    return sumOdd;
}

sumFibs(1); // число 1
sumFibs(1000); // 1785
sumFibs(4000000); // 4613732
sumFibs(4); // 5
sumFibs(75024); // 60696
sumFibs(75025); // 135721