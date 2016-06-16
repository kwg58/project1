// AM: Should probably rename this file to something else so nobody disregards it as test code!

$( document ).ready(function() {

  imgArray = ["gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg", "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg",
  "gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg", "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg"];

  buildBoard();
  tileStatus = "flipped";
  //event handler for tile clicking
  $("[id^='tile']").on("click", function() {
    $(this).toggleClass("flipped");
    $(this).addClass("active");
    $(this).prop('disabled', true);
    clickTile(this.id);
  });

  //event handler for start button clicking
  $("#start").on("click", function() {
    $(this).text("Play Again");
    startGame();
    // $(this).prop('disabled', true);

  })
});
function shuffleArray(array) {            //borrowed from the Internet
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
// AM: Very interesting buildBoard function. Dig it!
function buildBoard() {
  tileStatus = "";
  $("#buildhere").html("");
  pointers = shuffleArray(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]);
  var imgSource = "./images/";
  var a = '<div id="tile';
  var b = '"><figure class="front"><img src="';
  var c = '"></figure></div>';
  // build the board
  for (i=0; i <= 15; i++) {
    pic = imgArray[pointers[i]];
    $("#buildhere").append(a + i + b + imgSource + pic + c);
  }
}
function startGame() {
  //start the game-timer
  //enable clicking
  // AM: It looks like that if I click fast enough, I can sneak in more than two clicks in a turn.
  // AM: I would make use of this `clickOnce` (or some variable like it) in your clicking logic.
  // AM: Essentially we want to say that, if the user has clicked twice, we don't want process any additional clicks until the next turn is ready.
  // AM: What exactly "ready" means is up to you. But it seems like it has something to do with that CSS flip transition ending.
  // AM: Happy to talk more about this in person.
  clickOnce = 1;    // prevents this from being run on next click
  seconds = 0;        // reset to 0 for timer
  clickedTiles = [];   // blank array stores names of clicked images
  openCells=[];        // blank array stores cell numbers of clicked images
  matches=0;           // used to count matches, game wins when set to 8
  timerid = setInterval(updateTime, 1000);  //start the game timer
  imgPath = "./images/";
  openSeconds = 2000;  // milliseconds to leave pictures open before flipping them.
  // buildBoard();
  if (tileStatus == "flipped") {
    // buildBoard();
    // AM: Creative jQuery selector!
    $("[id^='tile']").addClass("flipped");
  }  else {
    $("[id^='tile']").removeClass("flipped");
    tileStatus = "";
  }
}
function clickTile(cellID) {
  // if (clickedOnce = 0) {
  //   startGame();
  // }
  cellNum = cellID.substring(4);
  // pushFile = imgArray[pointers[cellNum]];
  openTiles = clickedTiles.push(imgArray[pointers[cellNum]]);

  if (clickedTiles.length === 2)  {
    if (clickedTiles[0] === clickedTiles[1]) {   // check to see if file names match
      matches += 1;
      clickedTiles = [];                   // update match count
      $(".active").toggleClass("active");
      $("[id^='tile']").prop('disabled', false);
      if (matches == 8) {                // if we have 8 matches we win!
        gameWon();
      }
    } else {
      setTimeout(function() {
        $(".active").toggleClass("flipped");
        $(".active").toggleClass("active");
      } , openSeconds);
      clickedTiles=[];
      $("[id^='tile']").prop('disabled', false);
    }   // close open cells after pause
  }
}
// }
function gameWon() {
  clearInterval(timerid);
  alert("You've won! It only took you " + seconds + " seconds");
}
var updateTime = function() {
  // $("timer").text(seconds);
  seconds+=1;
  document.getElementById("timer").innerHTML = seconds;
}
