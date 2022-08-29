function orbitalPeriod(arr) {

    /* Найважче завдання, але не через програмування, а через пошук значення для
    великої півосі орбіти. Як виявилось, вона дорівнює радіусі Землі + середній висоті.
    */
    /* Пробігаємось по заданим обʼєктам масиву і для кожного вираховуємо значення
    orbitalPeriod в залежності від avgAlt. Після знаходження значення і присвоєння
    властивості видаляємо з обʼєкту властивість avgAlt.
    Повертаємо початковий масив зі зміненими обʼєктами.
    */

    const GM = 398600.4418;
    const earthRadius = 6367.4447;

    arr.map(item => {
        let aToTheThirdPow = Math.pow(earthRadius + item.avgAlt, 3);
        let orbitalPeriodExact = 2 * Math.PI * Math.sqrt(aToTheThirdPow / GM);
        item.orbitalPeriod = Math.round(orbitalPeriodExact);
        delete item.avgAlt;
    });

    return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
// [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]);
//[{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].