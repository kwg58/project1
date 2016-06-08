$( document ).ready(function() {
  console.log("start");
  // $("[class^='tile']").on("click", function() {
  $('[id^="tile"]').on("click", function() {
    $(this).toggleClass("flipped");
    // console.log(this);
    // var tilex = document.getElementById(this);
    // tile.toggleClass("flipped");
      // tilex.classList.toggle("flipped");
  });

});
