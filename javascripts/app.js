/*
  Test code to generate a human player and an orc player
 */
var PlayerOne = new Gauntlet.Combatants.Human();
var PlayerClass;
// PlayerOne.setWeapon(new Gauntlet.WeaponsCase.WarAxe());
// PlayerOne.generateClass();  // This will be used for "Surprise me" option

// var ComputerEnemy = new Gauntlet.Combatants.Orc();
// ComputerEnemy.generateClass();
// ComputerEnemy.setWeapon(new Gauntlet.WeaponsCase.BroadSword());
// console.log(ComputerEnemy.toString());

/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());


$("#selected-player-weapon").hide();
$("#selected-player-class").hide();
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
    $("#selected-player-class").val($(this).closest("div").prop("id"));
    PlayerClass = $(this).closest("div").prop("id");
  })

  $(".weapon-select").click(function(e) {
    $("#selected-player-weapon").val($(this).closest("div").prop("id"));
    PlayerWeapon = $(this).closest("div").prop("id");
  })

  $("#select-weapon").click(function(e) {
    PlayerOne.setClass(PlayerClass);
    alert(PlayerClass);
  })
  $("#Start-battle-button").click(function(e) {
    PlayerOne.setWeapon(PlayerWeapon);
    alert(PlayerWeapon);
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