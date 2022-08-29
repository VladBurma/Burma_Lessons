const Person = function (firstAndLast) {

    /* Створюємо локальну змінну - масив, в якій зберігаємо імʼя і прізвище.
    Якщо треба щось змінити, то перезаписуємо масив.
    Якщо вивести, то виводимо з цього масиву
    */
   
    let _firstAndLastArr = firstAndLast.split(' ');
    // Змініть код лише під цим рядком
    // Завершіть поданий нижче метод та впровадьте наступні схожим способом
    this.getFirstName = function () {
        return _firstAndLastArr[0];
    };
    this.getLastName = function () {
        return _firstAndLastArr[1];
    };
    this.getFullName = function () {
        return _firstAndLastArr.join(' ');
    };
    this.setFirstName = function (first) {
        return _firstAndLastArr[0] = first;
    };
    this.setLastName = function (last) {
        return _firstAndLastArr[1] = last;
    };
    this.setFullName = function (firstAndLast) {
        return _firstAndLastArr = firstAndLast.split(' ');
    };
};

const bob = new Person('Bob Ross');

// Не треба додавати жодних властивостей. Object.keys(bob).length повинен завжди повертатися як 6.
bob instanceof Person; //true.
bob.firstName; //undefined.
bob.lastName; //undefined.
bob.getFirstName(); //Bob.
bob.getLastName(); //Ross.
bob.getFullName(); //Bob Ross.
bob.getFullName(); //Haskell Ross після bob.setFirstName("Haskell").
bob.getFullName(); //Haskell Curry після bob.setLastName("Curry").
bob.getFullName(); //Haskell Curry після bob.setFullName("Haskell Curry").
bob.getFirstName(); //Haskell після bob.setFullName("Haskell Curry").
bob.getLastName(); //Curry після bob.setFullName("Haskell Curry").