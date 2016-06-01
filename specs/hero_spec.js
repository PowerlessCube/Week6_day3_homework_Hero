var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );
var assert = require( 'chai' ).assert;

describe('Hero "Alive" Object', function() {

  beforeEach( function() {
    hero = new Hero("Finn", 100, "apple", 80 );
    apple = new Food( "apple", 10 );
    banana = new Food( "banana", 10 );
    rat = new Rat("Rat",20,5);
    deadRat = new Rat( "Dead Rat", 0, 0 );
    deadRat.populateLootTable( banana );
  });

  it('Should have a name', function() {
    assert.equal("Finn", hero.name );
  });

  it('Should have 100 health', function() {
    assert.equal(100, hero.health );
  });

  it('Should have favourite food', function() {
    assert.equal("apple", hero.favouriteFood );
  });

  it('Should talk', function() {
    assert.deepEqual("I am Finn", hero.talk());
  });

  it('Eating favourite food should return 15 more health', function() {
    hero.eat(apple);
    assert.equal( 115, hero.health );
  });

  it('Eating regular food should return 10 more health', function() {
    hero.eat(banana);
    assert.equal( 110, hero.health );
  });

  it('Eating poison food will negatively effect health', function() {
     rat.poison(banana);
     hero.eat(banana);
     assert.equal(80, hero.health);
  });

  it('Attacking rat should kill rat.', function() {
    hero.attack(rat);
    assert.equal( 0, rat.health );
    assert.equal( 0, rat.poisonValue );
  });

  it('Searching "Alive" rat should return nothing to inventory', function() {
    hero.lootBody(rat);
    assert.deepEqual( [], hero.inventory );
  });

  it('Searching "Dead" rat should return an item to inventory', function() {
    hero.lootBody(deadRat);
    assert.deepEqual( [banana], hero.inventory );
  });

});
