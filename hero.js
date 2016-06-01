var Hero = function(name, health, favouriteFood,strength) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.strength = strength;
  this.inventory = [];
};

Hero.prototype = {
  talk: function() {
    return ("I am " + this.name );
  },
  eat: function(food) {
    if ( food.isPoisoned === true ) {
      this.health -= food.healthValue;
    }
    else
      { if (food.name === this.favouriteFood) {
        this.health += ( food.healthValue * 1.5 );
      }
      else {
        this.health += food.healthValue;
      }
    }
  },
 attack: function(enemy) {
   if ( enemy.health < this.strength) {
     enemy.health = 0;
     enemy.poisonValue = 0;
   }
   else {
     enemy.health -= this.strength;
   }
 }
};

// TODO: The Hero has a function that allows him to search enemies that have the "dead" state. Searching will take food from the rats loot table and add it to the hero inventory.

// TODO: complexity stretch goal for inventory - heros will have an invetory limit, if their inventory is full they gain the "Overencumbered" state and are no longer as agile.

module.exports = Hero;
