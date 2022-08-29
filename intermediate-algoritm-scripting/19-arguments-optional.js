function addTogether() {

    /* Якщо заданий один аргумент, то ми створюємо функцію, в якій до першого аргументу
    додаємо аргумент нової функції. Викликаємо її тоді, коли перший аргумент буде number.
    Якщо хоча б один з двох аргументів не число, то видаємо undefined.
    Якщо в жодну з умов ми не зайшли, то значить, що ми маємо перший
    і другий аргументи - числа, тоді повертаємо їх суму
    */

    if (arguments.length === 1) {
        let addSecondNumb = (secondNumb) => {
            if (typeof secondNumb !== "number") return undefined;
            return arguments[0] + secondNumb;
        };
        if (typeof arguments[0] !== "number") return undefined;
        return addSecondNumb;
    }

    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
        return undefined;
    }

    return arguments[0] + arguments[1];
}

addTogether(2, 3); //5
addTogether(23, 30); //53
addTogether(5)(7); //12
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); //undefined
addTogether(2, "3"); //undefined
addTogether(2)([3]); //undefined
addTogether("2", 3); //undefined
addTogether(5, undefined); //undefined