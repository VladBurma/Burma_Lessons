function fearNotLetter(str) {

    /* Створюємо початкове значення charCode і потім перетворивши строку на масив букв пробігаємось по масиву.
    Якщо початковий charCode рівний першому(а так ми і задали на початку), то збільшуємо значення початкового на 1
    і переходимо до наступного елементу. Якщо ж ні, то присвоюємо в result значення пропущеної букви.
    Якщо пройшов по всьому масиву, ми жодного разу не зайдемо в else, тобто всі CharCode будуть відповідати
    CharCode елементів з масиву, то значить, що пропущеного символу немає і ми повертаємо result undefined
    */

    let beginingCharCodeAt = str.charCodeAt(0);
    let result;

    str.split("").forEach(letter => {
        if (letter.charCodeAt(0) === beginingCharCodeAt) beginingCharCodeAt++;
        else result = String.fromCharCode(beginingCharCodeAt);
    });

    return result;
}

fearNotLetter("abce"); // d
fearNotLetter("abcdefghjklmno"); // i
fearNotLetter("stvwx"); // u
fearNotLetter("bcdf"); // e
fearNotLetter("abcdefghijklmnopqrstuvwxyz"); // undefined