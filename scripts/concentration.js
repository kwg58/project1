$( document ).ready(function() {
  startGame();
  imagesInput = [
    "gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg",
    "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg"
  ];
  imagesArrayed = ["gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg", "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg",
  "gg1-100.jpg", "gg2-100.jpg", "gg3-100.jpg", "ev1-100.jpg", "ev2-100.jpg", "ev3-100.jpg", "mg1-100.jpg", "mg2-100.jpg"];
  pointers = shuffleArray(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]);

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
  clickOnce = 1;    // prevents this from being run on next click
  seconds = 0;        // reset to 0 for timer
  clickedTiles = [];   // blank array stores names of clicked images
  openCells=[];        // blank array stores cell numbers of clicked images
  matches=0;           // used to count matches, game wins when set to 8
  timerid = setInterval(updateTime, 1000);  //start the game timer
  blnkImage = "bc-100.png";
  imgPath = "./images/";
  openSeconds = 3000;  // milliseconds to leave pictures open before flipping them.

}
function clickTile(cellID) {
  // if (clickedOnce = 0) {
  //   startGame();
  // }
  cellNum = cellID.substring(4);
  flipTiles(cellID, cellNum);       // flip the clicked tile
  pushFile = imagesArrayed[pointers[cellNum]];
  openTiles = clickedTiles.push(pushFile);
  openCells.push(cellNum);
  console.log("numer of files: " + clickedTiles.length);

  if (openTiles === 2)  {
    if (clickedTiles[0] === clickedTiles[1]) {   // check to see if file names match
      matches += 1;                     // update match count
      if (match = 8) {                // if we have 8 matches we win!
        gameWon();
      }
    } else {
      setTimeout(closeAllOpen, openSeconds);   // close open cells; needs timer
    }

  }
}

function flipTiles(tileID, tileNum) {
  // tileX = cellIDx.substr(5);
  // console.log("Cell: " + tileX);
  tilePic = [imagesArrayed[pointers[tileNum]]];
  var image=document.getElementById(tileID);
  if (image.src.match(blnkImage)) {
    image.src = imgPath + [imagesArrayed[pointers[tileNum]]];
  } else {
    image.src = imgPath + blnkImage;
  }
}

function closeAllOpen() {
  for (var i = openCells.length - 1; i > 0; i--) {
    // tileXX = "tile" + openCells[i];
    console.log("object: tile" + openCells[i]);
    var imageXX=document.getElementById("tile" + openCells[i]);
    imageXX.src = imgPath + blnkImage;
    // flipTiles(clickedTiles[i]);
  }
  clickedTiles = [];   // reset names of clicked images
  openCells=[];        //reset open cells

}
  function gameWon() {
    // message or something
    // display reset button
    //stop the game timer
    clearInterval(timerid);
    return;
  }
// timer stuff

var updateTime = function() {
  document.getElementById("timer").innerHTML = seconds;
  seconds+=1;
}

// end timer stuff
