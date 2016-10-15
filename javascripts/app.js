/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();
PlayerOne.setWeapon(new WarAxe());
PlayerOne.generateClass();  // This will be used for "Surprise me" option
console.log(PlayerOne.toString());
var ComputerEnemy = new Gauntlet.Combatants.Orc();
ComputerEnemy.generateClass();
ComputerEnemy.setWeapon(new BroadSword());
console.log(ComputerEnemy.toString());
/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());
$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();
  $("#player-name-button").click(function(e) {
    PlayerOne.playerName = $("#player-name").val();
  })
    /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;
    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }
    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });
  /*
    Placeholder to show player selected weapons/class
   */
  $(".class-select").click(function(e) {
    console.log($(this).closest("div").prop("id"));
  })
  $(".weapon-select").click(function(e) {
    console.log($(this).closest("div").prop("id"));
  })
  /*
    Hide attack button until player is ready to defeat its enemy
   */
    $("#Attack-button").hide();
    $("#Start-battle-button").click(function() {
      $("#Attack-button").show();
      $("#player-one-name").html(PlayerOne.playerName);
    });
 $("#Attack-button").click(function() {
    $("#player-one-name").html(PlayerOne.playerName);
 });
  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
});