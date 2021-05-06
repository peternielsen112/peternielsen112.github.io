var strings = ['Did you know that spacing in HTML files is merely aesthetic?', '"Don\'t ever apologize for being the smartest one in the room." - Quentin Beck', 'Gravity Falls is the best TV show, in my opinion.', 'Python can compute square roots AND scientific notation.', 'HTML is just a markup language.', 'American Pie by Don McLean is a eulogy for Buddy Holly, Ritchie Valens, and the death of music as we know it.', 'No, these aren\'t splashes. Shut up.', '<i><strong>E</strong></i>'];

var links = ['Home', 'Programming', 'Author', 'Opinions', 'Blog'];
var authorlinks = ['All Home','Home','The Swords of Fate','Chronicles of Wyuup','Cash Culasso']
var things = ['Author', 'Programmer', 'Insane', 'Coin Collector', 'Nerd'];

function thingssend() {
  var randomThing = things[Math.floor(Math.random()*things.length)];
  return randomThing
};

function stringsend() {
  var randomItem = strings[Math.floor(Math.random()*strings.length)];
  return randomItem
};
var x = stringsend();
var y = thingssend();