var Gauntlet = (function(OldGauntlet) {

OldGauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new OldGauntlet.GuildHall[randomClass]();
    return this.class;
  }
};
OldGauntlet.Combatants.Orc.prototype = new OldGauntlet.Combatants.Monster();


OldGauntlet.Combatants.Human = function() {
  var randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  this.allowedWeapons = ["Dagger", "WarAxe", "BroadSword"];
};
OldGauntlet.Combatants.Human.prototype = new OldGauntlet.Combatants.Player();


return OldGauntlet;

})(Gauntlet || {});
