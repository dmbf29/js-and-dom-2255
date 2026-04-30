// Create an arrow function to capitalize a string
// () => {}
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.substring(1);
  // return firstLetter + restOfWord;
  return `${firstLetter}${restOfWord}`;
};

console.log(capitalize("hello"));
