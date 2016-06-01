var Rat = function(name, poisonValue, health) {
  this.name = name;
  this.poisonValue = poisonValue;
  this.health = health;
  this.loot = [];
};

Rat.prototype = {
  poison: function(food) {
    food.isPoisoned = true;
    food.healthValue = this.poisonValue;
  }
};

module.exports = Rat;

// TODO: Stretch Goal - rats/enemies have loot tables. an array of items that the hero can "search" for if enemy is dead. The array, can only be searched if the rat is in the "dead" state
