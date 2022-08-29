function convertHTML(str) {

    /* Конвертуємо строку в масив, перебираємо його,
    і якщо знаходим потрібний знак, то заміняємо його на відповідний html
    */

    return str.split('').map(item => {
        if (item === '&') return item = '&amp;';
        if (item === '<') return item = '&lt;';
        if (item === '>') return item = '&gt;';
        if (item === '"') return item = '&quot;';
        if (item === "'") return item = '&apos;';
        return item;
    }).join(''); // Обʼднуємо назад в строку
}

convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana
convertHTML("Hamburgers < Pizza < Tacos"); // Hamburgers &lt; Pizza &lt; Tacos
convertHTML("Sixty > twelve"); // Sixty &gt; twelve
convertHTML('Stuff in "quotation marks"'); // Stuff in &quot;quotation marks&quot;
convertHTML("Schindler's List"); // Schindler&apos;s List
convertHTML("<>"); // &lt;&gt;
convertHTML("abc"); // abc

