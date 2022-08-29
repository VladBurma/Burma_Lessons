function spinalCase(str) {

    /* Ставимо пробіл перед усіма буквами верхнього регістру окрім початку,
    потім символи і пробіли заміняємо на ʼ-ʼ і приводимо все до нижнього регістру
    */

    return str.replace(/(?!^)([A-Z])/g, ' $1').replace(/[_,\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
}

spinalCase("This Is Spinal Tap"); //this-is-spinal-tap
spinalCase("thisIsSpinalTap"); //this-is-spinal-tap
spinalCase("The_Andy_Griffith_Show"); //the-andy-griffith-show
spinalCase("Teletubbies say Eh-oh"); //teletubbies-say-eh-oh
spinalCase("AllThe-small Things"); //all-the-small-things