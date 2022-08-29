function translatePigLatin(str) {

    /* Використовуємо рекурсію.
    Якщо str починається на голосну або складається тільки з приголосних то додаємо до str 'ay'.
    Якщо ж ні, то переставляємо першу букву в кінець. Якщо перша буква голосна то просто додаємо 'way'.
    */

    function rec() {
        if (!!str.match(/^[aeiou]/) || str.match(/[aeiou]/) === null) {
            return str += 'ay';
        }
        str = str.replace(/^(.)(.+)/, '$2$1');
        rec();
    }
    if (!!str.match(/^[aeiou]/)) return str += 'way';
    else rec();

    return str;
}

translatePigLatin("lconsonant"); //onsonantcay
translatePigLatin("california"); //aliforniacay
translatePigLatin("paragraphs"); //aragraphspay
translatePigLatin("glove"); //oveglay
translatePigLatin("algorithm"); //algorithmway
translatePigLatin("eight"); //eightway
translatePigLatin("schwartz"); //artzschway
translatePigLatin("rhythm"); //rhythmay
