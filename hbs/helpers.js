const hbs = require('hbs')
//Helpers
hbs.registerHelper("getTime", () => {
    return new Date().getFullYear();
  });
  
  hbs.registerHelper("capitalizar", text => {
    let words = text.split(" ");
    words.forEach((word, idx) => {
      words[idx] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return words.join(" ");
  });