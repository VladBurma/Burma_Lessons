/* Створюємо клас SuperDude */
class SuperDude {
  constructor(name, superPowersArr) {
    /* Явно робимо незмінним name */
    Object.defineProperty(this, 'name', {
      value: name,
      writable: false,
      configurable: false,
      enumerable: true
    });
    this.superPowersArr = superPowersArr;
    /* Пробігаємось по масиву superPowersArr і явно робимо здібності незмінними  */
    this.superPowersArr.forEach((power) => {
      Object.defineProperty(this, power.name, {
        value: power.spell,
        writable: false,
        configurable: false,
        enumerable: true
      });
    });
  }
}

/* Створюємо клас Spell */
class Spell {
  constructor(name, whatSuperDudeDo) {
    this.name = name;
    let action = whatSuperDudeDo;
    this.spell = function () {
      return console.log(`${this.name} ${action}`);
    };
  }
}

/* Масив у якому створюємо екземпляри Spell */
let superPowers = [
  new Spell('invisibility', 'hide from you'),
  new Spell('superSpeed', 'running from you'),
  new Spell('superSight', 'see you'),
  new Spell('superFroze', 'will froze you'),
  new Spell('superSkin', 'skin is unbreakable')
];

/* Створюємо екземпляр SuperDude */
let Luther = new SuperDude('Luther', superPowers);

/* Тестуємо методи */
Luther.superSight();
Luther.superSpeed();
Luther.superFroze();
Luther.invisibility();
Luther.superSkin();