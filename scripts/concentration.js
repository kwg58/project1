$( document ).ready(function() {
  imgPath="/images/";
  stuff = document.getElementById('tile1');
  images = ["gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg", "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg"];
  pointers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

  // set up the board based on the shuffled array.  Tile 1 gets the image in
  // element 0, tile 2 gets the image in element 1, etc.

  // start button event handler
  $("#start").on("click", function() {
    clickOnce=0;
    seconds=0;
    clickedTiles = [];
    openCells=[];
    matches=0;
    shuffleArray(pointers);
    if (clickOnce < 1) {
      timerid = setInterval(updateTime, 1000);
      clickOnce = 1;
    }
  });

});
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
function startGame() {
  //start the game-timer
  //enable clicking

}
function clickTile(id) {
  // call flipTiles for this cell
  // update the clickedTiles and openCells arrays
  // if it's the first click (only one element in clickedTiles), just return
  // if it's the second click, check to see if there's a match
  // if there's a match, update the matches variable
  // if matches = 8, call the gameWon
  // if if no match, leave the cells open for a certain amount of time, then
  // call flipTiles for the open cells, reset the openCells and
  // clickedTiles arrays and exit.
  //
  //

  // var x = document.getElementsByTagName("H1")[0].getAttribute("class");
  //  alert($(this).attr('data-val'));
  // tileNum = this.getAttribute('src');

  var tileSrc = obj.src;
  console.log("Tile " + tileNum + " has been clicked")

}
function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
  } else {
    image.src = "pic_bulbon.gif";
  }
}
// timer stuff

var updateTime = function() {
  document.getElementById("timer").innerHTML = seconds;
  seconds+=1;
};
$("#reset").on("click",function(){
  seconds = 0;
  clearInterval(timerID);
  $("timer").text("");
  // document.getElementById("timer").innerHTML = "Stop Watch";
});
// end timer stuff
