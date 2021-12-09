const languageFunction = (language: string) => {
  return language.split('').map((letter, index) => {
    if (index == 0) { return letter.toUpperCase(); }
    else { return letter.toLowerCase(); }
  }).join('');
};

export default  languageFunction;