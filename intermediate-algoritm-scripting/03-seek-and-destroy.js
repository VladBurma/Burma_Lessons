function destroyer(arr) {

    /* Створюємо масив, куди запишемо всі надлишкові аргументи.
    Фільтруємо цей масив за умови відсутності елементу у надлишковому масиві
    */

    let restArgArr = [];
    for (let i = 1; i < arguments.length; i++) {
        restArgArr.push(arguments[i]);
    }

    return arr.filter(item => !restArgArr.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // [1, 5, 1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // [1]
destroyer([2, 3, 2, 3], 2, 3); // []
destroyer(["tree", "hamburger", 53], "tree", 53); // ["hamburger"]
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"); // [12,92,65]