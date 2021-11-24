const countLetters = function(sen) {
  let Obj = {};
  for (const letter of sen) {
    if (letter !== ' ') {
      if (Obj[letter] === undefined) {
        Obj[letter] = 1;
      } else {
        Obj[letter] += 1;
      }
    }
  }
  return Obj;
};

