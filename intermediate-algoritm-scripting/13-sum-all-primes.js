function sumPrimes(num) {

    /* Створюємо функцію, яка буде повертати тільки просто число.
    Для зменшення часу перебору цикла for, максимальним значенням задамо
    рівним кореню з числа, так як після кореня не буде дільників цього числа
    */

    let findPrime = (number) => {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return;
        }
        return number;
    };

    let sum = 0;// Задаємо початкове значення суми
    for(let i = 2; i <= num; i++){
        if (findPrime(i)){  // Якщо просте, то додаємо його до sum
        	sum += i;
        } 
    }
    return sum;
}

sumPrimes(10); // 17
sumPrimes(977); // 73156