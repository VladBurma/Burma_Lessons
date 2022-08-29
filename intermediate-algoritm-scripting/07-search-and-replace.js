function myReplace(str, before, after) {

  /* Cпочатку перевіряємо регістр першої букви before, якщо верхній,
  то в after також робимо першу букву верхнім регістром.
  І навпаки. Потім повертаємо строку зі зміною before на after.
  */

  if (before[0].toUpperCase() === before[0]){
    after = after.replace(/^./, after[0].toUpperCase());
  } else{
    after = after.replace(/^./, after[0].toLowerCase());
  }

  return str.replace(before, after);
}

myReplace("Let us go to the store", "store", "mall"); //Let us go to the mall
myReplace("He is Sleeping on the couch", "Sleeping", "sitting"); // He is Sitting on the couch
myReplace("I think we should look up there", "up", "Down"); // I think we should look down there
myReplace("This has a spellngi error", "spellngi", "spelling"); // This has a spelling error
myReplace("His name is Tom", "Tom", "john"); // His name is John
myReplace("Let us get back to more Coding", "Coding", "algorithms"); // Let us get back to more Algorithms