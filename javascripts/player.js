var Gauntlet = (function(OldGauntlet) {
/*
  TODO: Modularize this code with IIFE or Browserify
 */
OldGauntlet.Combatants = {};
/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
OldGauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;
  this.spell = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.healthBonus = 0;
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

OldGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  if (newWeapon === "Class-Surprise-Me" || newWeapon === undefined) {
    this.weapon = PlayerOne.generateWeapon();
  }
  else {
  this.weapon = new OldGauntlet.WeaponsCase[newWeapon]();
  }
}
OldGauntlet.Combatants.Player.prototype.generateWeapon = function() {
  var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));
  var randomWeapon = this.allowedWeapons[random];
  this.weapon = new OldGauntlet.WeaponsCase[randomWeapon]();
  return this.weapon;
};

OldGauntlet.Combatants.Player.prototype.setClass = function(newClass) {
  if (newClass === "Class-Surprise-Me" || newClass === undefined) {
    this.class = PlayerOne.generateClass();
  }
  else {
  this.class = new OldGauntlet.GuildHall[newClass]();
  }
}

OldGauntlet.Combatants.Player.prototype.generateClass = function() {
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));
  var randomClass = this.allowedClasses[random];
  this.class = new OldGauntlet.GuildHall[randomClass]();
  this.health += this.class.healthBonus;
  return this.class;
};


OldGauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
    this.allowedWeapons = ["Dagger", "WarAxe", "BroadSword"];
};
OldGauntlet.Combatants.Monster.prototype = new OldGauntlet.Combatants.Player();

return OldGauntlet;

})(Gauntlet || {});
