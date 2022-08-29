function diffArray(arr1, arr2) {

    /* Обʼєднуємо масиви і фільтруємо їхза умовою, що елемент є хоча б в одному з початкових масивів
    (варіант true || true неможливий, так як він би означав відсутність елемента в обох масивах)
    */

    return [...arr1, ...arr2].filter(item => !arr1.includes(item) || !arr2.includes(item));
}


diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["pink wool"]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // масив з одним елементом
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // ["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); // масив з двома елементами
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // []
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); // пустий масив
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // масив з одним елементом
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // ["piglet", 4]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // масив з двома елементами
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); // ["snuffleupagus", "cookie monster", "elmo"]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); // масив з трьома елементами
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); // [1, "calf", 3, "piglet", 7, "filly"]
diffArray([1, "calf", 3, "piglet"], [7, "filly"]); // масив з шістьма елементами