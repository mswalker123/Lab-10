// $(document).ready(function(){

// $.get('https://www.reddit.com/r/aww/.json').done(function(responseBody) {
// console.log("DONE", responseBody.data.children[0].data.title);
// }).fail(function() {
// console.log("FAIL");
// }).always(function() {
// console.log("ALWAYS");

var header = document.createElement( "container" );
$('body').append(header);
header.className = "header";
$(header).append('<h2>Reddit Blog</h2>');




$.get('https://www.reddit.com/r/aww/.json').done(function(responseBody) {
  responseBody.data.children.forEach(function(post){
// var i;
// for (i = responseBody  .length -1; i>=0; i-=3){
// if(responseBody[i] === 5|| responseBody[i] === 27 ){
// responseBody.splice(i,1);
// }
// }


var title = post.data.title;
var author = post.data.author;
var thumbnail = post.data.thumbnail;
var image = $('<img />', { src: thumbnail});

console.log(title);
console.log(author);
// };

var newdiv = document.createElement( "div" );
$('body').append(newdiv);
$(newdiv).append(image).append('<h3>' + title + '</h3><h4>' +'author: ' + author + '</h4></p><hr>');


 });
  });
