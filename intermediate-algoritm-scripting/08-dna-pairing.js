function pairElement(str) {

    /* Робимо функцію, яка в залежності від аргументу поверне потрібний масив,
    а потім застосовуємо цю функцію на кожному елементі вхідного масиву.
    */

    function addDnaElement(element){
        if (element === 'A') return [element, 'T'];
        if (element === 'T') return [element, 'A'];
        if (element === 'C') return [element, 'G'];
        if (element === 'G') return [element, 'C'];
    }
    return Array.from(str).map(addDnaElement);
}

pairElement("ATCGA"); // [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
pairElement("TTGAG"); // [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
pairElement("CTCTA"); // [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]