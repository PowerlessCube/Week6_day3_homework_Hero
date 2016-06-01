var Hero = require( '../hero' );
var Food = require( '../food' );
var Rat = require( '../rat' );
var assert = require( 'chai' ).assert;

describe('Hero', function() {

beforeEach( function() {
  bat = new Hero("Batman", 100, "apple", 80 );
  apple = new Food( "apple", 10 );
  banana = new Food( "banana", 10 );
  rat = new Rat("Rat",20,5);
});

  it('Should have a name', function() {
    assert.equal("Batman", bat.name );
  });

  it('Should have 100 health', function() {
    assert.equal(100, bat.health );
  });

  it('Should have favourite food', function() {
    assert.equal("apple", bat.favouriteFood );
  });

  it('Should talk', function() {
    assert.deepEqual("I am Batman", bat.talk());
  });

  it('Eating favourite food should return 15 more health', function() {
    bat.eat(apple);
    assert.equal( 115, bat.health );
  });

  it('Eating regular food should return 10 more health', function() {
    bat.eat(banana);
    assert.equal( 110, bat.health );
  });

  it('Eating poison food will negatively effect health', function() {
     rat.poison(banana);
     bat.eat(banana);
     assert.equal(80, bat.health);
  });

  it('Attacking rat should kill rat.', function() {
    bat.attack(rat);
    assert.equal( 0, rat.health );
    assert.equal( 0, rat.poisonValue );
  });
});
