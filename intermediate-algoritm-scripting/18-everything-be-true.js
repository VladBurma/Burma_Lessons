function truthCheck(collection, pre) {

    /* Використовуємо every, щоб перевірити, чи задовільняють умові усі елементи.
    Якщо хоча б один ні, то повернеться false. В умову вклали наявність потрібної
    властивості і щоб ця властивість при приведенні у булевий тип була true
    */

    return collection.every(item => item.hasOwnProperty(pre) && !!(item[pre]));
}

truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot");
//false
truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "name");
//true
truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "role");
//false
truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }], "number");
//true
truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "caught");
//false
truthCheck([{ name: "Pikachu", number: 25, caught: 3 }, { name: "Togepi", number: 175, caught: 1 }, { name: "MissingNo", number: NaN, caught: 0 }], "number");
//false
truthCheck([{ name: "Quincy", username: "QuincyLarson" }, { name: "Naomi", username: "nhcarrigan" }, { name: "Camperbot" }], "username");
//false!
truthCheck([{ name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] }, { name: "Code Radio", users: [{ name: "Camperbot" }] }, { name: "", users: [] }], "users");
//true
truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "data");
//true
truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id");
//false