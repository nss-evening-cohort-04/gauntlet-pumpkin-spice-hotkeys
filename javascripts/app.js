/*
  Test code to generate a human player and an orc player
 */
let PlayerOne;
let PlayerClass;
let PlayerWeapon;
let ComputerEnemy;
let GameOver = false;
let PlayerOneAlive = true;
let PlayerTwoAlive = true;
// PlayerOne.setWeapon(new Gauntlet.WeaponsCase.WarAxe());
// PlayerOne.generateClass();  // This will be used for "Surprise me" option
/*
  Test code to generate a spell
 */
// var spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());

$("#selected-player-weapon").hide();
$("#selected-player-class").hide();
$(document).ready(function() {
  /*
    Show the initial view that creates a new player and sets the player name
   */
  $("#player-setup").show();
  $("#player-name-button").click(function(e) {
    PlayerOne = new Gauntlet.Combatants.Human();
    var combatantType = ["Human", "Orc", "Dwarf"];
    var random = Math.round(Math.random() * (combatantType.length-1));
    var randomCombatant = combatantType[random];
    ComputerEnemy = new Gauntlet.Combatants[randomCombatant]();
    ComputerEnemy.generateClass();
    ComputerEnemy.setWeapon("Class-Surprise-Me");
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
      case "card--play-again":
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
  })
  $("#Start-battle-button").click(function(e) {
    PlayerOne.setWeapon(PlayerWeapon);
  })
  /*
    Hide attack button until player is ready to defeat its enemy
   */

    $("#Attack-button").hide();
    $("#Start-battle-button").click(function() {
      $("#game-audio").attr("src", "http://www.tannerhelland.com/dmusic/CyaronsGate.ogg");
    //Player One//
      $("#player-one-image").attr("src",PlayerOne.class.image);
      $("#player-one-class").html(PlayerOne.class.name);
      $("#player-one-weapon").html("Weapon: " + PlayerOne.weapon.name);
      $("#player-one-health").html("Health: " + PlayerOne.health);
      $("#player-one-intelligence").html("Intelligence: " + (PlayerOne.intelligence + PlayerOne.class.intelligenceBonus));
      $("#player-one-strength").html("Strength: " + PlayerOne.strength);
    //Player Two//
      $("#player-two-image").attr("src",ComputerEnemy.class.image);
      $("#player-two-class").html(ComputerEnemy.class.name);
      $("#player-two-weapon").html("Weapon: " + ComputerEnemy.weapon.name);
      $("#player-two-health").html("Health: " + ComputerEnemy.health);
      $("#player-two-intelligence").html("Intelligence: " + ComputerEnemy.intelligence);
      $("#player-two-strength").html("Strength: " + ComputerEnemy.strength);
    //Show Attack Button//
      $("#Attack-button").show();

    });

 $("#Attack-button").click(function() {
      PlayerOne.health = (PlayerOne.health - ComputerEnemy.weapon.damage);
      if (PlayerOne.health - ComputerEnemy.weapon.damage <= 0) {
              playerOneDied();
      }
      $("#player-one-health").html("Health " + (PlayerOne.health - ComputerEnemy.weapon.damage));
    //Player Two//
      ComputerEnemy.health = (ComputerEnemy.health - PlayerOne.weapon.damage);
      if (ComputerEnemy.health - PlayerOne.weapon.damage <= 0) {
              computerEnemyDied();
      }
      $("#player-two-health").html("Health " + (ComputerEnemy.health - PlayerOne.weapon.damage));
 });


function  playerOneDied() {
    $("#winner-text").html(PlayerOne.playerName + " has lost to the computer in the Gauntlet!")
    $("#battleground").hide();
    $("#play-again").show();
    $("#game-audio").attr("src", "http://www.tannerhelland.com/dmusic/Nevermore.mp3");
    GameOver = true;
}

function  computerEnemyDied() {
    $("#winner-text").html(PlayerOne.playerName + " has escaped the Gauntlet in victory!!!")
    $("#battleground").hide();
    $("#play-again").show();
    $("#game-audio").attr("src", "http://www.tannerhelland.com/dmusic/HiddenTears.mp3");
    GameOver = true;
}


$("#play-again-button").click(function(e) {
  $("#play-again").hide();
  $("#battleground").hide();
  $("#player-setup").show();
  $("#game-audio").attr("src", "http://www.tannerhelland.com/dmusic/Home.mp3");
  $("#player-name").focus();
})

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});