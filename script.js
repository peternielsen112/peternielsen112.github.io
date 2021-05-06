/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
            myDropdown.classList.remove('show');
        }
    }
};


var strings = ['Did you know that spacing in HTML files is merely aesthetic?', '"Don\'t ever apologize for being the smartest one in the room." - Quentin Beck', 'Gravity Falls is the best TV show, in my opinion.', 'Python can compute square roots AND scientific notation.', 'HTML is just a markup language.', 'American Pie by Don McLean is a eulogy for Buddy Holly, Ritchie Valens, and the death of music as we know it.', 'No, these aren\'t splashes. Shut up.', '<i><strong>E</strong></i>', '<a class=\'rick\' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">This is <em>not</em> a rickroll.</a>','Calming level: Bob Ross ≥ Jack Johnson ≥ Sal Khan', 'SOS did not originate from “Save Our Ship” - it was just an easy thing to type in Morse Code and was used for the universal “help” signal. (Its translation is . . .- - -. . .)','Bootstrap can be helpful, but it’s really picky and tough to work with.','Sassy CSS (.scss) is used for putting variables in a CSS stylesheet, compiling with those variables, and making your life easy.','“Two things are infinite: the universe and human stupidity; and I’m not sure about the universe.” - Thomas Edison'];

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