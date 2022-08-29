function smallestCommons(arr) {

    /* НСК(lcm) швидше всього знайти серед кратних чисел найбільшого числа.
    Тобто ми кожного разу збільшуємо наше найбільше число на його величину
    і перевіряємо чи усі числа з нашого проміжку діляться націло з нашим числом.
    Якщо ні, то знову збільшуємо, якщо так, то це і є НСК(lcm) */
    
    function checkForDivision(interimLcm, min, max) { // Функція для первірки, чи діляться числа на наше тимчасове НСК(lcm)
        for (let i = MIN; i < MAX; i++) {
            if (interimLcm % i !== 0) return true; // Перше значення що неподілиться націло змусить виконуватись умову з циклу while
        }
        return false;
    }

    const ARR_SORT = arr.sort((a, b) => a - b); // Сортуємо масив для отримання мінімальног оі максимального значення
    const MIN = ARR_SORT[0];
    const MAX = ARR_SORT[1];
    let lcm = MAX;

    while (checkForDivision(lcm, MIN, MAX)) {
        lcm += MAX;
    }
    return lcm;
}

smallestCommons([5, 1]); //60
smallestCommons([2, 10]); //2520
smallestCommons([1, 13]); //360360
smallestCommons([23, 18]); //6056820
