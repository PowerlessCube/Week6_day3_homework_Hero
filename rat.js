var Rat = function(name, poisonValue, health) {
  this.name = name;
  this.poisonValue = poisonValue;
  this.health = health;
  this.lootTable = [];
};

Rat.prototype = {
  poison: function(food) {
    food.isPoisoned = true;
    food.healthValue = this.poisonValue;
  },

// IDEA: Stretch goal - rat loot tables Populates with Food items on rats death.
  populateLootTable: function(item) {
    if (this.health === 0) {
      this.lootTable.push(item);
    }
  }
};

module.exports = Rat;
