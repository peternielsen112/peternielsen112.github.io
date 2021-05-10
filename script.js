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

function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
};
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn2')) {
        var myDropdown = document.getElementById("myDropdown2");
        if (myDropdown.classList.contains('show2')) {
            myDropdown.classList.remove('show2');
        }
    }
};

function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show3");
};
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn3')) {
        var myDropdown = document.getElementById("myDropdown3");
        if (myDropdown.classList.contains('show3')) {
            myDropdown.classList.remove('show3');
        }
    }
};

function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show4");
};
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn4')) {
        var myDropdown = document.getElementById("myDropdown4");
        if (myDropdown.classList.contains('show4')) {
            myDropdown.classList.remove('show4');
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

var featureds = ["<h4><a class='chapter' href='wyuuprebellion.html'><em>Chronicles of Wyuup: Rebellion</em></a></h4><br></br><p>The land of Wyuup is engaged in a civil war. Two factions - the Revolution and the Resistance - fight for control of the government and the people. And Ren is stuck in the middle of it. Upon finding a mysterious tavern in the woods, he discovers a sort of neutral zone between the two factions. But the neutral zone has more to it than meets the eye - and Ren needs to figure out what its true motives are. Chapter 1 coming sometime in May 2021.</p>", "<h4><a class='chapter' href='tsof.html'><em>The Swords of Fate</em></a></h4> <br></br><p>The evil sorcerer Quatremaine is arising in the West after a defeat many years ago - and the Overking will do nothing to stop him. Kallwyn Jameson, a blacksmith from the Western Dunes, must band together with a motley crew of vagabonds and soldiers to stop Quatremaine - and his loyal, unthinking army of Fire-Kin - from taking over the world. Chapters 1-6 currently available!</p>", "<h4><a class='chapter' href='cash21.html'><em>Cash Culasso and the 21 Prisms</em></a></h4><br></br><p>Cash Culasso, interstellar treasure hunter and daredevil, finds himself in deeper than he'd expected when a mysterious client hires him to steal twenty-one mystical objects called Prisms. Now, Cash has to join together with a group of religious zealots known as the Guardians in order to save the galaxy from certain doom... Read chapters 1-3, available <a href='cash21.html'>here</a>.</p>", "<h4><a class='chapter' href='tjog.html'><em>The Journal of Galif</em></a></h4><br></br><p>The legendary journal of Galif the Greyt in its entirety. Provided it allows you to read its pages, and not just the disclaimer, you can learn the history of Galdrania and its neighbors, along with the various forms of wizardry, and the dangers of gourmet food. Learn the details of the story of Xinel and Eliel, wonder at the horrors of Alynbrigge the Black, and discover the forms and ranks of Magick. Part of the universe(s) of The Swords of Fate, <em>The Journal of Galif</em> will shed light on the Order of the Mask and the mysteries of Galdrania as never done beofre. Chapter 1 coming soon!</p>", "<h4><a class='chapter' href='help.html'><em>Help, I Accidentally Bought the Internet</em></a></h4><br></br><p>Dave is relatively normal. He lives in a relatively normal apartment (just be careful with the windows) with his relatively normal best friends: Dan, who has a strange obsession with Star Wars and chicken nuggets, and Christi, who's sort of rebellious and works in IT. He works for a relatively normal company with his relatively normal development team (their names are not important, just know that they are relatively normal). He even drives a relatively normal car - an old pickup that can barely fit him and his relatively normal best friends. But one day, Dave steps into a shady alley and meets Crisper and That Guy, two dealers who are selling something quite unusual - the internet. Chapter 1 coming soon!</p>"];

function featuredsend() {
  var randomFeatured = featureds[Math.floor(Math.random()*featureds.length)];
  return randomFeatured
};
var featured = featuredsend();

var navbar = `
    <div class="navbar">
      <a href="./index.html">Home</a>
      <a href="./programming.html>Programming</a>
      <a href="./writing.html">Creative Writing</a>
      <a href='academicwriting.html'>Academic Writing</a>
      <div class="dropdown">
        <button class="dropbtn" onclick="myFunction()">
          The Swords of Fate &#9660;
        </button>
        <div class="dropdown-content" id="myDropdown">
          <a href="./tsof.html"><em>The Swords of Fate</em></a>
          <a href="./thog.html"><em>The Heir of Galdrania</em></a>
          <a href="./tjog.html"><em>The Journal of Galif</em></a>
        </div>
      </div>
      <div class="dropdown2">
        <button class="dropbtn2" onclick="myFunction2()">
          The Prism Wars &#9660;
        </button>
        <div class="dropdown-content2" id="myDropdown2">
          <a href="./cash21.html"><em>Cash Culasso and the 21 Prisms</em></a>
          <a href="./cashpc.html"><em>Cash Culasso and the Phantom Cruiser</em></a>
          <a href="./cashff.html"><em>Cash Culasso and the Final's Fall</em></a>
        </div>
      </div>
      <div class="dropdown3">
        <button class="dropbtn3" onclick="myFunction3()">
          The Chronicles of Wyuup &#9660;
        </button>
        <div class="dropdown-content3" id="myDropdown3">
          <a href="./wyuuprebellion.html"><em>Chronicles of Wyuup: Rebellion</em></a>
        </div>
      </div>
      <div class="dropdown4">
        <button class="dropbtn4" onclick="myFunction4()">
          Projects &#9660;
        </button>
        <div class="dropdown-content4" id="myDropdown4">
          <a href="">Hope for the Galaxy</a>
        </div>
      </div>
    </div>
`;

var series = `
    <aside class='side1'>
      <h3>Get Started on a Series</h3>
      <h4><a class="chapter" href="tsof.html"><em>The Swords of Fate</em></a></h4>
      <p>The evil sorcerer Quatremaine is arising in the West after a defeat many years ago - and the Overking will do nothing to stop him. Kallwyn Jameson, a blacksmith from the Western Dunes, must band together with a motley crew of vagabonds and soldiers to stop Quatremaine - and his loyal, unthinking army of Fire-Kin - from taking over the world.</p>
      <h4><a class="chapter" href="wyuuprebellion.html"><em>Chronicles of Wyuup: Rebellion</em></a></h4>
      <p>The land of Wyuup is engaged in a civil war. Two factions - the Revolution and the Resistance - fight for control of the government and the people. And Ren is stuck in the middle of it. Upon finding a mysterious tavern in the woods, he discovers a sort of neutral zone between the two factions. But the neutral zone has more to it than meets the eye - and Ren needs to figure out what its true motives are.</p>
      <h4><a class="chapter" href="cash21.html"><em>Cash Culasso and the 21 Prisms</em></a></h4>
      <p>Cash Culasso, interstellar treasure hunter and daredevil, finds himself in deeper than he'd expected when a mysterious client hires him to steal twenty-one mystical objects called Prisms.</p>
    </aside>
`;