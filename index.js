console.log('The New File');
function display() {
alert("Welcome to the page! Take a short look!");
}

var x = 'a string variable';
console.log(x);

//console.log(document);
//console.log($(document));
console.log($('myId '));

var mydiv = document.getElementById('myId');
mydiv.setAttribute('style', 'color: blue');

console.log(mydiv);
//console.log($);
//$( document ).ready(function() {
 // Handler for .ready() called.
//});
//console.log('I am Ready to Zipline');