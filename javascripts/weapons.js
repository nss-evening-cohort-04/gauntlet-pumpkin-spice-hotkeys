var Gauntlet = (function(OldGauntlet) {

OldGauntlet.WeaponsCase = {};

OldGauntlet.WeaponsCase.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

OldGauntlet.WeaponsCase.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
OldGauntlet.WeaponsCase.Dagger.prototype = new OldGauntlet.WeaponsCase.Weapon();

OldGauntlet.WeaponsCase.BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
OldGauntlet.WeaponsCase.BroadSword.prototype = new OldGauntlet.WeaponsCase.Weapon();

OldGauntlet.WeaponsCase.WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
OldGauntlet.WeaponsCase.WarAxe.prototype = new OldGauntlet.WeaponsCase.Weapon();

return OldGauntlet;

})(Gauntlet || {});