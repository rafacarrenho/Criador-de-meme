export const changeVowels = text => {
  let newText = text.toLowerCase();
  newText = newText.replace(/(a|e|i|o|u)/g, 'i');
  newText = newText.replace(/(á|à|ã|â)/g, 'i');
  newText = newText.replace(/(é|è|ê)/g, 'i');
  newText = newText.replace(/(í|ì|î)/g, 'i');
  newText = newText.replace(/(ó|ò|ô)/g, 'i');
  newText = newText.replace(/(ú|ù|û)/g, 'i');
  return newText;
};
